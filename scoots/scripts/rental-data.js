fetch('data/rentals.json')
    .then(response => response.json())
    .then(data => {
        const rentalTableBody = document.getElementById('rental-table-body');
        data.rentals.forEach(rental => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${rental.type}</td>
            <td>${rental.max_persons}</td>
            <td>${rental.half_day_reservations}</td>
            <td>${rental.full_day_reservations}</td>
            <td>${rental.half_day_walk_in}</td>
            <td>${rental.full_day_walk_in}</td>
            <td><img src="${rental.image}" alt="${rental.type}"></td>
            `;
            rentalTableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching rental data:', error));