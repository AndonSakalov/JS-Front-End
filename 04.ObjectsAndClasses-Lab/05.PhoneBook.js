function solve(phonebookArray) {

    function addPhoneNumber(name, number) {
        phoneBook[name] = number;
    }

    function printPhoneBook(phoneBook){
        for (const key in phoneBook) {
            console.log(`${key} -> ${phoneBook[key]}`);
        }
    }

    let phoneBook = {

    };

    for (const personNum of phonebookArray) {
        let currentPair = personNum.split(' ');
        addPhoneNumber(currentPair[0], currentPair[1]);
    }

    printPhoneBook(phoneBook);
}

solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);