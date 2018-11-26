function calc(n) {
    let doubleN = n * 2;
    
    let result = 1;

    for (let i = n; i <= doubleN; i++)
        result *= i;
   
    return result;
}

var n = 3;
let sum = 0;

for (let index = 1; index <= n; index++) {
    let result = calc(index);
    console.info("Result:" + result);
    sum += result;
}

console.info("Sum: " + sum);