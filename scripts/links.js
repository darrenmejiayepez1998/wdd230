const baseURL = "https://darrenmejiayepez1998.github.io/wdd230/";
const linksURL = "https://darrenmejiayepez1998.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(weeks) {
    const linkContainer = document.getElementById("linksContainer");

    weeks.lessons.forEach((lesson) => {
        const weekTitle = document.createElement("h3");
        weekTitle.textContent = `Week ${lesson.lesson}`;

        const weekLinks = document.createElement("ul");

        lesson.links.forEach((link) => {
            const linkItem = document.createElement("li");
            const linkElement = document.createElement("a");

            linkElement.href = baseURL + link.url;
            linkElement.textContent = link.title;

            linkItem.appendChild(linkElement);
            weekLinks.appendChild(linkItem);
        });

        linksContainer.appendChild(weekTitle);
        linksContainer.appendChild(weekLinks);
    });
}

getLinks();