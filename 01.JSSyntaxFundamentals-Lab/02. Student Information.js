function studentInfo(name, age, grade){
    return `Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`;
}

console.log(studentInfo('John', 15, 5.54678));