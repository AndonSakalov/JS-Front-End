function solve(input){
    let parkingLot = {};

    for (const currentRow of input) {
        [direction, carNumber] = currentRow.split(', ');

        if (direction === 'IN') {
            parkingLot[carNumber] = true;
        }else if( direction === 'OUT'){
            parkingLot[carNumber] = false;
        }
    }
    
    let sortedParkingLot = Object.entries(parkingLot).filter((a => a[1] )).sort((a,b) => a[0].localeCompare(b[0]));

    if (sortedParkingLot.length === 0) {
        return;
    }

    for (const currentCar of sortedParkingLot) {
        console.log(currentCar[0]);
    }
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);