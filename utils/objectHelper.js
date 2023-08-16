export function formatObjectValues(obj) {
  if (typeof obj !== "object" || obj === null) {
    console.warn("The provided value is not an object:", obj);
    return "";
  }

  const values = Object.values(obj)
    .filter(
      (value) => value && typeof value === "string" && value.trim() !== ""
    )
    .join(", ");

  return values ? `${key}: ${values}` : "";
}
