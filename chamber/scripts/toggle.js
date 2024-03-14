document.getElementById("toggleButton").addEventListener("click", function() {
    const container = document.getElementById("membersContainer");
    container.classList.toggle("grid");
    container.classList.toggle("list");
});