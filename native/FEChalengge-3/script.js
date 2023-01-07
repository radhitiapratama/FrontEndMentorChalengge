const input = document.querySelectorAll(".form input");
const erorr = document.querySelectorAll(".erorr");
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  input.forEach((input) => {
    if (
      input.value === "" ||
      input.value === null ||
      input.value === undefined
    ) {
      erorr.forEach((err) => {
        err.innerHTML = "Empty Value !";
      });
    } else if (
      input.value != "" ||
      input.value != null ||
      input.value != undefined
    ) {
      erorr.forEach((err) => {
        err.innerHTML = "";
      });
    }
  });
});
