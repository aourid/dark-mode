const body = document.querySelector("body");
const toggleMode = document.querySelector(".toggle-mode");
const list = document.querySelectorAll(".list");

toggleMode.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggleMode.name =
    toggleMode.name == "moon-outline" ? "sunny-outline" : "moon-outline";
});

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));
