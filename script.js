"use strict";
document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  const indexedTabs = document.querySelectorAll("p, .icon-plus, .icon-minus");
  indexedTabs.forEach((el) => {
    el.setAttribute("tabindex", "0");
  });
});

// document.addEventListener("DOMContentLoaded", () => {});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// document.addEventListener("DOMContentLoaded", () => {
//   const items = document.querySelectorAll(".item");
//   items.forEach((item) => {
//     const iconPlus = item.querySelector(".icon-plus");
//     const iconMinus = item.querySelector(".icon-minus");
//     const hiddenBox = item.querySelector(".hidden-box");

//     iconPlus.addEventListener("click", () => {
//       hiddenBox.classList.toggle("closed");
//       iconPlus.classList.toggle("closed");
//       iconMinus.classList.toggle("closed");
//     });
//   });
// });
