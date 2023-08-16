export function formatObjectValues(label, value) {
  if (typeof value !== "string") {
    console.warn("The provided value is not a string:", value);
    return "";
  }

  return value.trim() !== "" ? `${label}: ${value}` : "";
}
