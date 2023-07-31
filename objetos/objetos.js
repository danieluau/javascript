const pessoa = {
    firstName: 'aonfa',
    lastName: 'rocha',
    age: '21',
    hobbies: ["tocar guitarra", "etc e tal","hahay"],
    dog: {
        name: 'ed motta',
        age: 4
    }
};

const firstName= pessoa.firstName;
const lastName= pessoa.lastName;
const age= pessoa.age;
const hobbies= pessoa.hobbies;


console.log('olá, meu nome é ' + firstName + ' '  + lastName + '. tenho ' + age + ' anos e gosto de ' + hobbies[2] + ".");


console.log('o nome do meu cachorro é: ' + pessoa.dog.name);
