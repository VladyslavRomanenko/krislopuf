const formsRef = document.querySelectorAll(".form");
const backdropRef = document.querySelector(".backdrop");
const backRef = document.querySelector(".thanks-link");

formsRef.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameRef = form.elements["name"];
    const phoneRef = form.elements["phone"];

    const name = nameRef.value.trim();
    const phone = phoneRef.value.trim();

    if (name === "") {
      alert("Будь ласка, введіть ваше ім'я.");
      return;
    }

    if (phone.length < 10) {
      alert("Будь ласка, введіть коректний номер телефону");
      return;
    }

    backdropRef.classList.remove("is-hidden");

    form.reset();
  });
});

backRef.addEventListener("click", (event) => {
  backdropRef.classList.add("is-hidden");
});
