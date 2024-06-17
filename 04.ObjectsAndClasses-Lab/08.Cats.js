function catCreator(catInfoArr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            return `Meow`;
        }
    }

    for (const cat of catInfoArr) {
        let currentCat = cat.split(' ');
        let name = currentCat[0];
        let age = currentCat[1];

        let cat1 = new Cat(name, age);
        console.log(`${cat1.name}, age ${cat1.age} says ${cat1.meow()}`);
    }
}

catCreator(['Mellow 2', 'Tom 5']);