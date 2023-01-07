const content = document.querySelector(".content");
const shareBtn = document.querySelector(".share");
shareBtn.addEventListener("click", () => {
  content.classList.toggle("active");
});
