import { initBackToTopButton } from "./modules/backToTopButton.js";
import { createIndex } from "./modules/createIndex.js";
import { createPieChart } from "./modules/createPieChart.js";
import { reverseArray } from "./modules/reverseArray.js";

window.addEventListener("DOMContentLoaded", function () {
  // 1. Reverse the array and log it
  console.log(reverseArray([1, 2, 3]));

  // 2. Create an index
  createIndex("#index", "h2");

  // 3. Create a pie chart
  createPieChart("#chart-football");
  createPieChart("#chart-basketball");

  // 4. Add the back to top btn
  initBackToTopButton({ distanceScrolled: 500, delay: 200 });
});
