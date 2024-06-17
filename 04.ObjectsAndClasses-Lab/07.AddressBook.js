function storePeopleInfo(peopleInfo){
    let personAdress ={

    };

    function printPhoneBook(sortedKeys){
        for (const key of sortedKeys) {
            console.log(`${key} -> ${personAdress[key]}`);
        }
    }

    for (const personAdressPair of peopleInfo) {
        let currentPair = personAdressPair.split(':');
        let currentPersonName = currentPair[0];
        let currentPersonAdress = currentPair[1];

        personAdress[currentPersonName] = currentPersonAdress;
    }

    let sortedKeys = Object.keys(personAdress).sort();
   //let sortedKeys = Object.entries(personAdress).sort((a,b) => a[0].localeCompare(b[0]));

    printPhoneBook(sortedKeys);
}

storePeopleInfo(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);