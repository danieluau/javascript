let index = 0;

while (index < 10) {
    console.log("esse index eh igual a " + index);
    index = index + 1;
}

const person = {
    name: "Jane",
    age : 21
};

for (property in person) {
    console.log(person[property]);
}
 