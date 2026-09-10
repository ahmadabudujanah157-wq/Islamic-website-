function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("open");
}


document.querySelectorAll("#navMenu a").forEach(function(link) {
  link.addEventListener("click", function() {
    document.getElementById("navMenu").classList.remove("open");
  });
});


function showMessage(message) {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.style.display = "block";

  setTimeout(function() {
    toast.style.display = "none";
  }, 2600);
}


function sendMessage(event) {
  event.preventDefault();

  showMessage("ستاسو پیغام په بریالیتوب سره ثبت شو.");

  event.target.reset();
}


document.getElementById("year").textContent =
  new Date().getFullYear();
