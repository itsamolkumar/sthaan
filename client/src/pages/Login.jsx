import AuthForm from "../components/AuthForm";
import FormInput from "../components/FormInput";
import {useDispatch, } from "react-redux"
import {useNavigate} from "react-router-dom"
import { loginUser } from "../app/features/authSlice";
const Login=()=>{
   const navigate=useNavigate();
  const dispatch=useDispatch();
const onSubmit=async(data)=>{
console.log("Login Data",data);
 const result=await dispatch(loginUser(data));
    console.log("fetched LoggedIn data--",result);
    if (result.meta.requestStatus === "fulfilled") {
        navigate("/");
      }
}
return(<>
    <AuthForm onSubmit={onSubmit} btnName="Login">
        {({register,errors,watch})=>{
            const password = watch("password");
        return (
            <>
            <div className="grid grid-cols-1 gap-4">
            <FormInput 
            label="Email" 
            type="email" 
            name="email" 
            register={register} 
            error={errors.email?.message} 
           />
            <FormInput
              label="Password"
              type="password"
              name="password"
              register={register}
              error={errors.password?.message}
        //        validation={{
        //     validate: (value) =>
        //     value === watch("password") || "Passwords do not match",
        // }}
            />

          {/* <FormInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            register={register}
            error={errors.confirmPassword?.message}
            validation={{
    validate: (value) =>
      value === watch("password") || "Passwords do not match",
  }} /> */}
</div></>
      )  }}
    </AuthForm>
     <div className="max-w-md mx-auto space-y-4">
              <a href="/auth/signup" className="text-sm text-purple-600 hover:underline px-1">
                Don’t have an account? Sign Up
              </a>
              <a href="/auth/forgot-password" className="text-sm text-purple-600 hover:underline px-1">
                Forgot Password?
              </a>
            </div></>
)
}
export default Login;