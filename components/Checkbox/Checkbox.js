export default function Checkbox({ label, checked, name, value }) {
  return (
    <>
      <label>
        <input type="checkbox" name={name} checked={checked} value={value} />
        {label}
      </label>
    </>
  );
}
