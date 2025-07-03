const menu = document.getElementById("menu");
const nav = document.querySelector(".links");

menu.onclick = () => {
  nav.classList.toggle("active");

  if (menu.classList.contains("bx-menu-right")) {
    menu.classList.remove("bx-menu-right");
    menu.classList.add("bx-x");
  } else {
    menu.classList.remove("bx-x");
    menu.classList.add("bx-menu-right");
  }
};

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_j16ec7v", "template_5tv418h", this)
    .then(function(response) {
      alert("Message sent successfully!");
      document.getElementById("contact-form").reset();
    }, function(error) {
      alert("FAILED TO SEND: " + JSON.stringify(error));
    });
});
