const todos = [
    {
        id: 1,
        description: 'estudar',
        iscompleted: false,
    },
 
    {
        id: 2,
        description: 'ler',
        iscompleted: true,
    },
    
    {
        id: 3,
        description: 'treinar',
        iscompleted: true,
    },
    
]

const descriptionOfLastTdos = todos[1].description;

console.log(descriptionOfLastTdos)

const todosJSON = JSON.stringify(todos);
const todosList = JSON.parse(todosJSON);

console.log(todosJSON)
console.log(todosList)