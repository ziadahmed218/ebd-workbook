// discounts.js — a small module for other files to import.

// A NAMED export: importers must ask for it as { halfPrice }.
export function halfPrice(amount) {
  return amount / 2;
}

// A DEFAULT export: a file can have only one, and importers can name it anything.
const saleName = "Winter sale";
export default saleName;
