import SmoothScroll from 'smooth-scroll';

new SmoothScroll('a[href*="#"]');

import "./font.css";
import "./app.css";

console.log("bubu");

const headerEl = document.getElementsByTagName("header")[0];

document.getElementById("menuBtn").addEventListener("click", () => {
    headerEl.classList.toggle("header--menu-open");
});

document.querySelectorAll("header a").forEach(el => {
    el.addEventListener("click", () => {
        headerEl.classList.remove("header--menu-open");
    });
})