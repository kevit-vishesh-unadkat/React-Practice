function Input({ label, register, name, required }) {
  return (
    <div>
      <label>{label}</label>

      <input {...register(name, { required })} />
    </div>
  );
}

export default Input;