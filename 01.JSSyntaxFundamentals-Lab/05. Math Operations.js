function solve(a, b, operator){
  switch(operator){
    case '+':
        return a + b;
    case '-': 
         return a - b;
    case '*': 
         return a * b;
    case '/': 
         return a / b;
    case '%': 
         return a % b;
    case '**': 
         return a ** b;
  }
}

console.log(solve(3, 5, '*'));