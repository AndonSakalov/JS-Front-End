function solve() {
    class Vehicle {
        constructor(type, model, parts, fuel) {
            this.type = type;
            this.model = model;
            this.fuel = fuel;
            this.parts = {
                engine: parts.engine,
                power: parts.power,
                quality: parts.engine * parts.power,
            };
        }

        drive(fuelLoss) {
            this.fuel -= fuelLoss;
        }
    }

    let parts = { engine: 6, power: 100 };
    let vehicle = new Vehicle('a', 'b', parts, 200);
    vehicle.drive(100);
}

solve();