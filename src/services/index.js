const changeThemeBtn = document.querySelector("#change-theme");

// Mudar para DarkMode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
  }
}

loadTheme();

changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();

  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});
