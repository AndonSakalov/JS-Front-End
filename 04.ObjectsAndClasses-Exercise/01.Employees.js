function solve(input){
    let employees = {};
    for (const name of input) {
        employees[name] = name.length;
    }

    for (const emplyee in employees) {
        [emplyeeName, personalNum] = [emplyee, employees[emplyee]];
        console.log(`Name: ${emplyeeName} -- Personal Number: ${personalNum}`);
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );