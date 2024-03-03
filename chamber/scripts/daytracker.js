// Timestamp when the form.html is loaded
const timestampInput = document.getElementById("timestamp");
timestampInput.value = Date.now();

document.addEventListener("DOMContentLoaded", function () {
    // Function to get latest visit from local storage
    function getLatestVisitDate() {
        return localStorage.getItem("lastVisit");
    }

    // Function to set the lastest visit date in local storage
    function setLatestVisitDate() {
        localStorage.setItem("lastVisit", new Date().toISOString());
    }

    // Function to calculate the number of days between last two dates
    function calculateDaysBetweenDates(date1, date2){
        const oneDay = 24 * 60 * 60 * 1000; //hours minutes seconds and milliseconds
        const firstDate = new Date(date1);
        const secondDate = new Date(date2);
        
        const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
        return diffDays;
    }

    // Function to display welcome messages

    function displayWelcomeMessage() {
        const lastVisit = getLatestVisitDate();

        if (!lastVisit) {
            // first visit
            return "Welcome! Let us know if you have any questions.";
        } else {
            const currentDate = new Date().toISOString();
            const daysBetween = calculateDaysBetweenDates(currentDate, lastVisit);

            if (daysBetween < 1) {
                // Visited within a day
                return "Back so soon! Awesome!";
            } else {
                // visited more than a day ago
                const pluralSuffix = daysBetween === 1 ? "" : "s";
                return `You last visited ${daysBetween} day${pluralSuffix} ago.`;
            }
        }
    }

    // Function to update sidebar with the appropiate message
    function updateSidebarContent () {
        const sidebar = document.querySelector(".welcome-message");
        sidebar.textContent = displayWelcomeMessage();
    }

    // check and update latest visit date on page load
    setLatestVisitDate();
    updateSidebarContent();
});