function newFuction(name,age,country){
    var name = name ||'cristian';
    var age = age || '26';
    var country = country || 'COL';
    console.log(name,age,country);
}

//es6

function newFuction2(name = 'cristian',age = '26',country = 'COL'){
    console.log(name,age,country);
}

newFuction2();
newFuction2('Paola','24','COL');
