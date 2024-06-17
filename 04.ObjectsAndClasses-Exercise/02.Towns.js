function solve(input) {
    let towns = [];

    let inputSplit = String(input).split(',');
    for (const currentTown of inputSplit) {
        let currentTownInfo = currentTown.split(' | ');
        [townName, latitude, longitude] = [currentTownInfo[0], currentTownInfo[1], currentTownInfo[2]];
        let town = {
            town: townName,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        }
        towns.push(town);
    }

    for (const townObj of towns) {
        console.log(townObj);
    }
}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);