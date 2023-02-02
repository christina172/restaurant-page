import './styles.css';
import { initial } from "./initial";
import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";

initial();
home();

const main = document.querySelector(".main");

const homeTab = document.querySelector(".home-tab");
homeTab.addEventListener("click", () => {
    main.innerHTML = "";
    home();
});
const menuTab = document.querySelector(".menu-tab");
menuTab.addEventListener("click", () => {
    main.innerHTML = "";
    menu();
});
const contactTab = document.querySelector(".contact-tab");
contactTab.addEventListener("click", () => {
    main.innerHTML = "";
    contact();
});