import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AdminRoute({ children }) {
  const location = useLocation();

  //  DIRECT localStorage check (MOST IMPORTANT)
  const authData = localStorage.getItem("auth");
  const parsedAuth = authData ? JSON.parse(authData) : null;
  const storedUser = parsedAuth?.user;

  // Redux (secondary)
  const reduxUser = useSelector((state) => state.auth.user);

  // Prefer redux if available, else fallback to storage
  const user = reduxUser || storedUser;

  //  Not logged in
  if (!user) {
    return (
      <Navigate
        to="/auth/login"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  //  Logged in but not admin
  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // ✅ Admin allowed
  return children;
}
