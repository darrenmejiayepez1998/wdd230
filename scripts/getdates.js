// function to get current year
function getCurrentYear() {
    return new Date().getFullYear();
}

// function to get the last modified date of the document 
function getLastModifiedDate() {
    const lastModified = document.lastModified;
    return new Date(lastModified).toLocaleDateString();
}

// function to update footer content
function updateFooterContent() {
    // This updates the copyright year
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = getCurrentYear();
    }

    // this updates last modified date
    const lastModifiedParagraph = document.getElementById('lastModified');
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modified: ${getLastModifiedDate()}`;
    }
}

// This calls the updated footer content when the document loads
document.addEventListener('DOMContentLoaded', updateFooterContent);