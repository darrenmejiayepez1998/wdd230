// creates the display element variable
const visitsDisplay = document.querySelector(".visits");

// gets whatever is stored in the local storage if not it assigns it as zero
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// determines if this is the first visit to site or if it has been visited before
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
}   else {
        visitsDisplay.textContent = `Welcome! This is your first visit.`;
}

// increments the number of visits by 1
numVisits++;

// stores the new visit total to the localstorage
localStorage.setItem("numVisits-ls", numVisits);
