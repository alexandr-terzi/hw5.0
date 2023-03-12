let a = +prompt('Enter number a');
let b = +prompt('Enter number b, more than a');

while (b <= a) {
    b = +prompt('Enter number b, more than a, please!');
    if (b > a) break;
}

console.log('a = ', a);
console.log('b = ', b);

let h = +prompt('Enter number h, more than 0');

while (h <= 0) {
    h = +prompt('Enter number h, more than 0');
    if (h > 0) break;
}

console.log('h = ', h);

let sumOfFactorials = 0;

function factorial(i) {
    return (i != 1) ? i * factorial(i - 1) : 1;
}

for (let i = a; i <= b; i += h) {
    console.log('i = ', i);
    let iFact = (factorial(i));
    console.log('i! = ', iFact);

    for (let j = 0; j <= iFact; j += iFact) {
        j = iFact + j;
        sumOfFactorials += j;
        console.log('sum of factorials =', sumOfFactorials);
    }
    
}

