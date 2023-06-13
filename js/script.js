const formRef = document.querySelector(".form");
const nameRef = document.querySelector('[name="name"]');
const phoneRef = document.querySelector('[name="phone"]');

formRef.addEventListener("submit", (event) => {
  event.preventDefault();
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

  formRef.reset();
  console.log("Ім'я:", name);
  console.log("Номер телефону:", phone);
});
