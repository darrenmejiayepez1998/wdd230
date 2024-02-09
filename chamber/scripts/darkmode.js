const darkModeToggle = document.querySelector("#darkModeToggle");
const body = document.body;

darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        // activate dark mode
        body.classList.add("dark-mode")
    } else {
        // activate light mode
        body.classList.remove("dark-mode")
    }
});