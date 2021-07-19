const btn = document.querySelector(".fas");
const nav = document.querySelector("nav .links");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
