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