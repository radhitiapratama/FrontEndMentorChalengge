const box = document.querySelectorAll(".box");
const boxContent = document.querySelector(".box-content");
box.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("active");
  });
});
