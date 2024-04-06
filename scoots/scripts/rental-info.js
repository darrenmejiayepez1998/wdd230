document.addEventListener('DOMContentLoaded', function() {
    // Generate the rental summary 
    generateRentalSummary();
});

function generateRentalSummary() {
    const rentalList = document.getElementById('rental-list');
    const rentalData = [
        {type: 'Honda Metro Scooter', maxPersons: 1, halfDayReservation: '$20', fullDayReservation: '$30', halfDayWalkIn: '$25', fullDayWalkIn: '$35'},
        {type: 'Honda Dio Scooter', maxPersons: 2, halfDayReservation: '$30', fullDayReservation: '$40', halfDayWalkIn: '$35', fullDayWalkIn: '$45'},
        {type: 'Honda PCX150 Scooter', maxPersons: 2, halfDayReservation: '$40', fullDayReservation: '$50', halfDayWalkIn: '$45', fullDayWalkIn: '$55'},
        {tyoe: 'Honda Pioneer ATV', maxPersons: 4, halfDayReservation: '$50', fullDayReservation: '$70', halfDayWalkIn: '$60', fullDayWalkIn: '80'},
        {type: 'Jeep Wrangler - 4 door with A/C', maxPersons: 5, halfDayReservation: '$70', fullDayReservation: '$100', halfDayWalkIn: '$85', fullDayWalkIn: '$125'},
        {type: 'Jeep Wrangler - 2 door', maxPersons: 4, halfDayReservation: '$60', fullDayReservation: '$85', halfDayWalkIn: '$70', fullDayWalkIn: '$90'}
    ];

    rentalData.forEach(rental => {
        const rentalItem = document.createElement('li');
        rentalItem.innerHTML = `
            <strong>${rental.type}</strong> - Max. Persons: ${rental.maxPersons}<br>
            Half Day (3hrs) - Reservations: ${rental.halfDayReservation}, Walk-In: ${rental.halfDayWalkIn}<br>
            Full Day - Reservation: ${rental.fullDayReservation}, Walk-In: ${rental.fullDayWalkIn}
            `;
            rentalList.appendChild(rentalItem);          
    });
}