const membersContainer = document.getElementById("membersContainer");

fetch("data/members.json")
.then(response => response.json())
.then(data => {
    data.companies.forEach(company => {

        // These are for the html 
        const companyDiv = document.createElement("div");
        const nameElement = document.createElement("h2");
        const addressElement = document.createElement("p");
        const phoneElement = document.createElement("p");
        const websiteElement = document.createElement("a");
        const imageElement = document.createElement("img");
        const levelElement = document.createElement("p");
        const otherInfoElement = document.createElement("p");


        // this is information from the JSON file
        nameElement.textContent = company.name;
        addressElement.textContent = `Address: ${company.phone}`;
        phoneElement.textContent = `Phone: ${company.phone}`;
        websiteElement.textContent = "Website";
        websiteElement.href = company.website;
        imageElement.src = company.image;
        imageElement.alt = company.name;
        levelElement.textContent = `Membership Level: ${company.membership_level}`;
        otherInfoElement.textContent = `Other Info: ${company.other_info}`;

        companyDiv.appendChild(nameElement);
        companyDiv.appendChild(addressElement);
        companyDiv.appendChild(phoneElement);
        companyDiv.appendChild(websiteElement);
        companyDiv.appendChild(imageElement);
        companyDiv.appendChild(levelElement);
        companyDiv.appendChild(otherInfoElement);

        membersContainer.appendChild(companyDiv);
    });
})
.catch(error => {
    console.error("Error Fetching data:", error);
});


function displayMembers(data) {
    membersContainer.innerHTML = '';
    data.companies.forEach(company => {
        const card = document.createElement('div');
        card.classList.add('member-card');

        const html = `
            <h2>${company.name}</h2>
            <p><strong>Address:</strong> ${company.address}</p>
            <p><strong>Phone:</strong> ${company.phone}</p>
            <p><strong>Website:</strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
            <img src="${company.image}" alt="${company.name} Logo">
            <p><strong>Membership Level:</strong> ${company.membership_level}</p>
            <p>${company.other_info}</p>`;
        card.innerHTML = html;
        membersContainer.appendChild(card);
    });
}

function toggleView() {
    membersContainer.classList.toggle('grid');
    membersContainer.classList.toggle('list');
}

// Assuming you have your JSON data stored in a variable named jsonData
displayMembers(jsonData);
