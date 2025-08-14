"use strict";
document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  const indexedTabs = document.querySelectorAll("p, .icon-plus, .icon-minus");
  indexedTabs.forEach((el) => {
    el.setAttribute("tabindex", "0");
  });
});

// Get all items
const items = document.querySelectorAll(".item");

items.forEach((item) => {
  //Getting all elements
  const plusIcon = item.querySelector(".icon-plus");
  const minusIcon = item.querySelector(".icon-minus");
  const pElement = item.querySelector("p");
  const hiddenBox = item.querySelector(".hidden-box");

  //Function that displays/hides hidden box
  const toggleFunction = function () {
    plusIcon.classList.toggle("closed");
    minusIcon.classList.toggle("closed");
    hiddenBox.classList.toggle("closed");
  };

  // Adding event on click
  plusIcon.addEventListener("click", toggleFunction);
  minusIcon.addEventListener("click", toggleFunction);
  pElement.addEventListener("click", toggleFunction);
});
