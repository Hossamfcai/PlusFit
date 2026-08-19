emailjs.init("0Ne1LTKR2ABJISp_e");
const formEl = document.getElementById("formContainer");
const notification = document.getElementById("notification");

let hideTimeout = null;
let resetTimeout = null;

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData.entries());
  console.log(data);

  emailjs
    .sendForm("service_1lqy2ak", "template_54ei0qb", formEl)
    .then(() => {
      displayNotification({
        message: "Submitted successfully!",

        iconType: "check-circle",
      });
      formEl.reset();
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
      displayNotification({
        message: "Failed to send email try again later",

        iconType: "x-circle",
      });
    });
});

function displayNotification(notificationData) {
  clearTimeout(hideTimeout);
  clearTimeout(resetTimeout);
  const icon = document.createElement("i");
  icon.classList.add(
    notificationData.iconType == "x-circle" ? "text-red-600" : "text-green-600",
    "mx-2",
    "bi",
    `bi-${notificationData.iconType}-fill`,
  );

  const messageEL = document.createElement("span");
  messageEL.innerHTML = notificationData.message;

  notification.append(icon, messageEL);
  notification.classList.remove("hide");
  notification.classList.add("show");

  hideTimeout = setTimeout(() => {
    notification.classList.remove("show");
    notification.classList.add("hide");

    resetTimeout = setTimeout(() => {
      notification.classList.remove("hide");
      notification.replaceChildren();
    }, 300);
  }, 2000);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target
          .querySelectorAll(".fade-scroll")
          .forEach((el) => el.classList.add("in-view"));
        observer.unobserve(entry.target); // Runs animation once on scroll arrival
      }
    });
  },
  { threshold: 0.15 },
);

document
  .querySelectorAll(".philosophy-section")
  .forEach((sec) => observer.observe(sec));

function openMapModal(mapUrl) {
  const modal = document.getElementById("mapModal");
  const iframe = document.getElementById("mapIframe");
  iframe.src = mapUrl;
  modal.classList.remove("hidden");
}

function closeMapModal() {
  const modal = document.getElementById("mapModal");
  const iframe = document.getElementById("mapIframe");
  iframe.src = "";
  modal.classList.add("hidden");
}
