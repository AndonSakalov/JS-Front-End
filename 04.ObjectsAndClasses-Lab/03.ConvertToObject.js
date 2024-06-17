function solve(jsonString){
    const obj = JSON.parse(jsonString);
    Object.keys(obj).forEach(propName => console.log(`${propName}: ${obj[propName]}`));
}

