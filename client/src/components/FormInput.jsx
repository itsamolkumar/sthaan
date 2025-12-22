const FormInput = ({
  label,
  type,
  register,
  name,
  error,
  validation = {},
  defaultValue,
  disabled = false,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>

      <input
        type={type}
        defaultValue={defaultValue}
        disabled={disabled}
        className={`border p-2 rounded ${
          disabled ? "bg-gray-100 cursor-not-allowed" : ""
        }`}
        {...register(name, validation)}
      />

      {error && (
        <span className="text-red-500 text-sm">{error}</span>
      )}
    </div>
  );
};

export default FormInput;
