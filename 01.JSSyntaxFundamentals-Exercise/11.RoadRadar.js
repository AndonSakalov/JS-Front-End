function solve(speed, typeOfstreet) {
    let speedLimit;
    let speedDiff;
    let status;
    switch (typeOfstreet) {
        case 'motorway':
            speedLimit = 130;
            speedDiff = Math.abs(speedLimit - speed);
            if (speed > speedLimit) {
                if (speedDiff <= 20) {
                    status = 'speeding';
                } else if (speedDiff <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            }
            break;
        case 'interstate':
            speedLimit = 90;
            speedDiff = Math.abs(speedLimit - speed);
            if (speed > speedLimit) {
                if (speedDiff <= 20) {
                    status = 'speeding';
                } else if (speedDiff <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            }
            break;
        case 'city':
            speedLimit = 50;
            speedDiff = Math.abs(speedLimit - speed);
            if (speed > speedLimit) {
                if (speedDiff <= 20) {
                    status = 'speeding';
                } else if (speedDiff <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            }
            break;
        case 'residential':
            speedLimit = 20;
            speedDiff = Math.abs(speedLimit - speed);
            if (speed > speedLimit) {
                if (speedDiff <= 20) {
                    status = 'speeding';
                } else if (speedDiff <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            }
            break;

        default:
            break;
    }
}

console.log(3);