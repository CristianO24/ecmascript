function* HelloWord(){
    if (true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World'
    }
};

const generatorHello = HelloWord();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);