"use strict";
let = menu {
let Drinks = [
  "Coke",
  "Sprite",
  "Water",
  "Sweet Tea",
  "Coffee",
  "Strawberry Fanta",
  "Hot CoCo",
  "Fiji Water",
];
entrees: [
  "Hamburger w/ Fries",
  "Fried fish w/ Fries",
  "Fried Chicken w/ Fries",
  "Chicken Fried Rice w/ Egg Roll",
  "Shrimp Fried Rice w/ Egg Roll",
  "Ugali w/ Nyamachoma w/ Kachumbari",
  "Pilau w/ Stew",
]
};

const categoryList = document.getElementById("categoryList");
const itemList = document.getElementById("itemList");

function loadItemList() {
  //clear all list items
  itemList.options.length = 0;
  const selectedValue = categoryList.value;
  for (const item of options[selectedValue]) {
    addOptionToList(item, item, itemList);
  }
}

function addOptionToList(text, value, list) {
  let option = new menu(text, value);
  list.appendChild(option);
}

window.onload = function () {};