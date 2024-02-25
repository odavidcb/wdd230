const list = document.querySelector("#list");
const button = document.querySelector("button");
const input = document.querySelector("#favchap");
let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

button.addEventListener("click", () => {
  if (input.value != "") {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList(chaptersArray);
    input.focus();
    input.value = "";
  }
});

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});

function displayList(item) { 
  let listItem = document.createElement("li");
  let deleteButton = document.createElement("button");
  listItem.textContent = item;
  deleteButton.textContent = "❌";
  deleteButton.classList.add("delete");
  listItem.append(deleteButton);
  list.append(listItem);
  deleteButton.addEventListener("click", function () {
    list.removeChild(listItem);
    deleteChapter(listItem.textContent);
    input.focus();
  });
}

function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}
function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}
function deleteChapter(chapter) { 
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => {
    return item !== chapter;
  });
}
