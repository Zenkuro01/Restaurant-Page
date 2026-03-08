import "./styles.css";
import { pageLoadHome } from "./home.js";
import { pageLoadMenu } from "./menu.js";
import { pageLoadAbout } from "./about.js";

const content = document.querySelector("#content");
const navButtons = document.querySelectorAll(`.nav-btn`);

pageLoadHome();

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tab = button.dataset.tab;

    // clear content
    content.textContent = "";

    switch (tab) {
      case "home":
        pageLoadHome();
        break;
      case "menu":
        pageLoadMenu();
        break;
      case "about":
        pageLoadAbout();
        break;
    }
  });
});
