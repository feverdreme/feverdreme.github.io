"use strict";

const filters = document.querySelector(".filters");
const buttons = [...document.querySelectorAll("[data-filter]")];
const projects = [...document.querySelectorAll("[data-category]")];
const count = document.querySelector("#project-count");

function filterProjects(category) {
  let visible = 0;
  for (const project of projects) {
    const matches = category === "all" || project.dataset.category.split(" ").includes(category);
    project.hidden = !matches;
    if (matches) visible += 1;
  }
  for (const button of buttons) {
    button.setAttribute("aria-pressed", String(button.dataset.filter === category));
  }
  count.textContent = `${visible} ${visible === 1 ? "project" : "projects"}`;
}

for (const button of buttons) {
  button.addEventListener("click", () => filterProjects(button.dataset.filter));
}
filters.hidden = false;
filterProjects("all");
