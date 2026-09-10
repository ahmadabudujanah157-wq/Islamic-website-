function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("open");
}

document.querySelectorAll("nav a").forEach(function(a) {
  a.addEventListener("click", function() {
    document.getElementById("navMenu").classList.remove("open");
  });
});

function showMessage(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.style.display = "block";

  setTimeout(function() {
    toast.style.display = "none";
  }, 2600);
}

function sendMessage(e) {
  e.preventDefault();
  showMessage("ستاسو پیغام په بریالیتوب سره ثبت شو.");
  e.target.reset();
}

document.getElementById("year").textContent =
  new Date().getFullYear();
