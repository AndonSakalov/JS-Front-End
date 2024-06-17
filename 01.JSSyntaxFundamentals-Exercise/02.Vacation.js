function solve(peopleCount, type, day) {
    let ticketPrice = 0;
    switch (type) {
        case 'Students':
            if (day === 'Friday') {
                ticketPrice = 8.45;
            } else if (day === 'Saturday') {
                ticketPrice = 9.80;
            } else if (day === 'Sunday') {
                ticketPrice = 10.46;
            }
            break;
        case 'Business':
            if (day === 'Friday') {
                ticketPrice = 10.90;
            } else if (day === 'Saturday') {
                ticketPrice = 15.60;
            } else if (day === 'Sunday') {
                ticketPrice = 16;
            }
            break;
        case 'Regular':
            if (day === 'Friday') {
                ticketPrice = 15;
            } else if (day === 'Saturday') {
                ticketPrice = 20;
            } else if (day === 'Sunday') {
                ticketPrice = 22.50;
            }
            break;
        default:
            break;
    }

    let totalPrice = peopleCount * ticketPrice;
    if (peopleCount >= 30 && type === 'Students') {
        totalPrice *= 0.85;
    }

    if (peopleCount >= 100 && type === 'Business' ) {
        totalPrice -= ticketPrice * 10;
    }

    if (peopleCount >= 10 && peopleCount <= 20 && type === 'Regular') {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(30,
    "Students",
    "Sunday");

solve(40,
    "Regular",
    "Saturday");