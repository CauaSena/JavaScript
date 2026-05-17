//DESAFIO 01
/* 
let string = "Hello World!";

let stringInvertida ="";
for (let i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i];
}

console.log(`Frase normal: ${string}`);
console.log(`Frase invertida: ${stringInvertida}`); */

//DESAFIO 02
/* let a = [];

for (let i = 1; i <= 15; i++) {
    let multiplo = "";
    a[i] = i;
    
    if (a[i] %3 === 0) {
        multiplo += "Fizz";
    }
    if (a[i] %5 === 0) {
        multiplo += "Buzz";
    }

    console.log(multiplo || a[i]);
}*/

//DESAFIO 03
/* let b = [5, 10, 8, 1]

encotrarMaiorEMenor(b);

function encotrarMaiorEMenor(x) {
    let maior = x[0];
    let menor = x[0];
    
    for (let i = 0; i < x.length; i++) {
        if (x[i] > maior) {
            maior = x[i];
        }else if (x[i] < menor) {
            menor = x[i];
        }
    }

    console.log(`Maior: ${maior}`);
    console.log(`Menor: ${menor}`);
} */

//DESAFIO 04

/* let str = "Ana";
let isPalindromo;

str = str.replaceAll(" ","").toUpperCase();

let i = 0
do{
    str.charAt(i) === str.charAt((str.length-1)-i) ? isPalindromo = true : isPalindromo = false;
    i++
}
while (isPalindromo && i < str.length)

if (isPalindromo) {
    console.log(`${str} é um palindromo.`);
} else {
    console.log(`${str} NÃO é um palindromo.`);
} */

//DESAFIO 05
//PRECISO ESTUDAR

//DESAFIO 06
let g = 14;

calcFatorial(g);

function calcFatorial(x) {
    let fatorial = x;
    for (let i = x-1; i > 0; i--) {
        fatorial *= i;
    }
    console.log(`Fatorial de ${x} = ${fatorial}`);
    
}