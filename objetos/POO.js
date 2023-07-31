class Person {
    constructor(primeiroNome, sobrenome, idade) {
        this.primeiroNome = primeiroNome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    getFullName() {
        console.log(`${this.primeiroNome} ${this.sobrenome}`);
    }

    static speak() {
        console.log("Hello World!");
    }
}

const person = new Person('daniel', 'leal', 40);

Person.speak();
console.log(person);
person.getFullName();

