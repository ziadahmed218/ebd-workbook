import { items } from "./items.js";

// Draw an array of items into #list, replacing whatever was there.
export function renderItems(list) {
  const ul = document.querySelector("#list");
  ul.innerHTML = "";

  for (const item of list) {
    const li = document.createElement("li");
    li.classList.add("listing");
    li.textContent = `${item.name} - ${item.price} EGP`;
    ul.append(li);
  }
}

// Keep only the kitchen items.
export function matching() {
  return items.filter((item) => item.category === "kitchen");
}

// Show everything, then filter when the button is clicked.
export function start() {
  renderItems(items);

  const button = document.querySelector("#run-filter");
  button.addEventListener("click", () => {
    renderItems(matching());
  });
}
