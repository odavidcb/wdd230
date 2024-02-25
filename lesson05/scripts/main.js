const list = document.querySelector("#list");
const button = document.querySelector("button");
const input = document.querySelector("#favchap");

button.addEventListener("click", () => {
  if (input.value != "") {
    const listItem = document.createElement("li");
    const btn = document.createElement("button");
    listItem.textContent = input.value;
    btn.textContent = "❌";
    btn.ariaLabel = `Remove ${input.value}`;
    btn.addEventListener("click", () => {
      listItem.remove();
      input.focus();
    });
    listItem.appendChild(btn);
    list.appendChild(listItem);
  }
  input.focus();
  input.value = "";
});

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});