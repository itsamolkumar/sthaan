import { useForm } from "react-hook-form";

const AuthForm = ({ children, onSubmit, btnName }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange", // realtime validation (industry standard)
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto space-y-6"
    >
      {/*
        children = function
        hum use call kar rahe hain
        aur saari RHF powers de rahe hain
      */}
      {children({
        register,
        errors,
        watch,
        setValue,
      })}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        {btnName}
      </button>
    </form>
  );
};

export default AuthForm;
