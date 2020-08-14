/* Scope global ejemplo */
var hello = "Hello World";
let world = "Hello World";
const earth = "Hello World";

const anotherFunction = () =>{
    console.log(hello);
    console.log(world);
    console.log(earth);
}

anotherFunction();

//------------------------------------

const helloWorld = () => {
    globalVar = "Soy global";
}

helloWorld();
console.log(globalVar);

//------------------------------------

const addFunction = () => {
    var localVar = globalVar = "Soy mas que global, soy omnipresente jaja";
}

addFunction();
console.log(globalVar);