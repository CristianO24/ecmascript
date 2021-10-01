function newFuction(name,age,country){
    var name = name ||'cristian';
    var age = age || '26';
    var country = country || 'COL';
    console.log(name,age,country);
}

//es6 (se pueden asignar valores desde la deifinicion)

function newFuction2(name = 'cristian',age = '26',country = 'COL'){
    console.log(name,age,country);
}

newFuction2();
newFuction2('Paola','24','COL');

//Imprrmir con template literals
let hello = 'Hello';
let World = 'World';
let epicPharse = hello + ' ' + World;
console.log(epicPharse);
let epicPharse2 = `${hello} ${World}`;
console.log(epicPharse2);

//Multilienea

let lorem1 = "Esta es una frase epica \n"
+ "Otra frase epica.";

//es6 con template litreals
let lorem2 = `Esta es una frase epica con es6
Otra frase epica`;

console.log(lorem1);
console.log(lorem2);

//Destructuracion de elementos 

let person = {
    'name':'Cristian',
    'age': 26,
    'country': 'COL'
}

console.log(person.name,person.age,person.country);

let {name ,age, country} = person;
console.log(age, country);

//operador de propagacion
let team1 = ['Paola','Sara','Cristian'];
let team2 = ['Karen','Janneth','Juan'];

let education = ['David',...team1,...team2];

console.log(education);

//declaracion de atributos

let name = 'Cristian';
let age = 26;

obj = {name: name, age: age};
obj2 = {name, age};

console.log(obj2);