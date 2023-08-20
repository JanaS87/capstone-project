export default function Checkbox({ label, checked, name, value, onChange }) {
  return (
    <>
      <label>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          value={value}
          onChange={onChange}
        />
        {label}
      </label>
    </>
  );
}
