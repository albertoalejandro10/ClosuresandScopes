const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
}

helloWorld();
console.log(hello);

//------------------------------------

/* Ambito lexico */
var scope = 'Soy absolutamente global';

const functionScope = () => {
    var scope = 'Soy solamente local';
    const func = () => {
        return scope;
    }
    console.log(func());
}

functionScope();
console.log(scope);