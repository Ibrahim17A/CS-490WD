// Get elements
const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const clearBtn = document.getElementById("clearBtn");
const counter = document.getElementById("counter");

// Function to update counter
function updateCounter() {
  const items = document.querySelectorAll("li");
  const count = items.length;
  counter.textContent = `${count} item${count !== 1 ? "s" : ""}`;
}

// Add button click
addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text;

  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
    updateCounter();
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);
  input.value = "";
  updateCounter();
});

// Add item by pressing Enter
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addBtn.click();
});

// Clear all
clearBtn.addEventListener("click", () => {
  list.innerHTML = "";
  updateCounter();
});

// Initialize counter
updateCounter();
