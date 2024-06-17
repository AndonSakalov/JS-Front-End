function solve(input) { //6 maximum bullets
    let charactersCount = input.shift();
    let characters = [];
    for (let i = 0; i < charactersCount; i++) {
        currentCharInfo = input.shift().split(' ');
        let name = currentCharInfo[0];
        let HP = Number(currentCharInfo[1]);
        let bulletsCount = Number(currentCharInfo[2]);

        let currentCharacter = {
            name,
            HP,
            bulletsCount,
        };

        characters.push(currentCharacter);
    }
    let currentRow = input.shift();
    let charName;
    let target;
    let attacker;
    let damage;
    let amount = 0;
    while (currentRow !== 'Ride Off Into Sunset') {
        let splitRow = currentRow.split(' - ');
        let command = splitRow.shift();
        switch (command) {
            case 'FireShot':
                charName = splitRow.shift();
                target = splitRow.shift();
                characters.forEach(ch => {
                    if (ch.name === charName) {
                        if (ch.bulletsCount > 0) {
                            ch.bulletsCount--;
                            console.log(`${ch.name} has successfully hit ${target} and now has ${ch.bulletsCount} bullets!`);
                        } else {
                            console.log(`${ch.name} doesn't have enough bullets to shoot at ${target}!`);
                        }
                    }
                });
                break;
            case 'TakeHit':
                charName = splitRow.shift();
                damage = splitRow.shift();
                attacker = splitRow.shift();

                characters.forEach(ch => {
                    if (ch.name === charName) {
                        ch.HP -= damage;
                        if (ch.HP > 0) {
                            console.log(`${ch.name} took a hit for ${damage} HP from ${attacker} and now has ${ch.HP} HP!`)
                        } else {
                            console.log(`${ch.name} was gunned down by ${attacker}!`);
                            let index = characters.indexOf(ch);
                            characters.splice(index, 1);
                        }
                    }
                });
                break;
            case 'Reload':
                charName = splitRow.shift();
                characters.forEach(ch => {
                    if (ch.name === charName) {
                        if (ch.bulletsCount < 6) {
                            let reloadedBullets = 6 - ch.bulletsCount;
                            ch.bulletsCount = 6;
                            console.log(`${ch.name} reloaded ${reloadedBullets} bullets!`);
                        } else {
                            console.log(`${ch.name}'s pistol is fully loaded!`);
                        }
                    }
                });
                break;
            case 'PatchUp':
                charName = splitRow.shift();
                amount = Number(splitRow.shift());
                characters.forEach(ch => {
                    let initialHp = ch.HP;
                    let hpHealed = 0;
                    if (ch.name === charName) {
                        if (ch.HP < 100) {
                            ch.HP += amount;
                            hpHealed = Number(ch.HP - initialHp);
                            if (ch.HP > 100) {
                                ch.HP = 100;
                                hpHealed = 100 - initialHp;
                            }
    
                            console.log(`${ch.name} patched up and recovered ${hpHealed} HP!`);
                        } else {
                            console.log(`${ch.name} is in full health!`);
                        }
                    }
                });
                break;

            default:
                break;
        }
        currentRow = input.shift();
    }

    for (const character of characters) {
        console.log(character.name);
        console.log(` HP: ${character.HP}`);
        console.log(` Bullets: ${character.bulletsCount}`);
    }
}

solve((["2",
    "Gus 100 0",
    "Walt 100 6",
    "TakeHit - Gus - 80 - Bandit",
    "PatchUp - Gus - 20",
    "Ride Off Into Sunset"])
);