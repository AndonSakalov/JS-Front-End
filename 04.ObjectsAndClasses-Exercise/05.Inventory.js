function solve(heroesInfoArr) {
    let heroes = [];

    for (const currentHero of heroesInfoArr) {
        let currentRow = currentHero.split(' / ');
        [currentHeroName, currentHeroLevel] = [currentRow[0], currentRow[1]];
        let currentHeroItems = currentRow[2].split(', ');

        let hero = {
            name: currentHeroName,
            level: Number(currentHeroLevel),
            inventory: currentHeroItems.map(item => item),
        };

        heroes.push(hero);
    }

    heroes.sort((a, b) => (a.level > b.level) ? 1 : (a.level < b.level) ? -1 : 0);

    for (const sortedHero of heroes) {
        console.log(`Hero: ${sortedHero.name}`);
        console.log(`level => ${sortedHero.level}`);
        console.log(`items => ${sortedHero.inventory.join(', ')}`);
    }
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);