console.log("done");
const formEl = document.getElementById("formContainer");
const notification = document.getElementById("notification");

let hideTimeout = null;
let resetTimeout = null;

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData.entries());
  console.log(data);

  clearTimeout(hideTimeout);
  clearTimeout(resetTimeout);

  notification.classList.remove("hide");
  notification.classList.add("show");

  hideTimeout = setTimeout(() => {
    notification.classList.remove("show");
    notification.classList.add("hide");

    resetTimeout = setTimeout(() => {
      notification.classList.remove("hide");
    }, 300);
  }, 2000);
});
