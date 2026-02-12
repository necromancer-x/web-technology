/* ========== 1 ========== */
document.getElementById("changeTextButton").addEventListener("click", () => {
  document.getElementById("myParagraph").textContent =
    "Text changed successfully!";
});

/* ========== 2 ========== */
document.getElementById("highlightFirstCity").addEventListener("click", () => {
  document
    .getElementById("citiesList")
    .firstElementChild.classList.add("highlight");
});

/* ========== 3 ========== */
document.getElementById("changeOrder").addEventListener("click", () => {
  let item = document.getElementById("coffeeType");
  item.textContent = "Espresso";
  item.style.background = "brown";
  item.style.padding = "5px";
});

/* ========== 4 ========== */
document.getElementById("addNewItem").addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(li);
});

/* ========== 5 ========== */
document.getElementById("removeLastTask").addEventListener("click", () => {
  document.getElementById("taskList").lastElementChild.remove();
});

/* ========== 6 ========== */
document.getElementById("clickMeButton").addEventListener("dblclick", () => {
  alert("Double Click Detected!");
});

/* ========== 7 ========== */
document.getElementById("itemList").addEventListener("click", (e) => {
  if (e.target.matches(".listItem")) {
    document
      .querySelectorAll(".listItem")
      .forEach((el) => el.classList.remove("selected"));
    e.target.classList.add("selected");
  }
});

/* ========== 8 ========== */
document.getElementById("feedbackForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let value = document.getElementById("feedbackInput").value;
  document.getElementById("feedbackDisplay").textContent = "Feedback: " + value;
});

/* ========== 9 ========== */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("domStatus").textContent = "DOM Fully Loaded!";
});

/* ========== 10 ========== */
document.getElementById("toggleHighlight").addEventListener("click", () => {
  document.getElementById("descriptionText").classList.toggle("highlight");
});
