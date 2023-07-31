const names = ['lari', 'ju', 'etc e tal', false, true];

const ju = names[1];

//names.push('vit');


names.unshift('etc e tal')

names.pop();
names.pop();

names[3] = 'daniel';

console.log(names.indexOf("daniel"));

const sortedNames = names.sort();

console.log(names.length)
console.log(names)