//Arrow functions

const names = [
    {'name':'Cristian','age': 26},
    {'name':'Paola','age': 24}
]

let listofnames = names.map(function (item){
    console.log(item.name)
});

let listofnames2 = names.map(item => console.log(item.name));

const listofnames3 = (name, age) => {  
}

const listofnames1 = name => {
}

let num = 2
const square = num => num * num;

//Promesas

const Hellopromise = () => {
    return new Promise ((resolve,reject) =>{
        if (false) {
            resolve('Hey!')
        }else{
            reject('Ups!')
        }
    }); 
}

Hellopromise()
.then(response => console.log(response))
.catch(error => console.log(error))