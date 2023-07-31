const ages = [1,2,3,4,5,6,7];

const sumofages = ages.reduce(function (age, acumulator) {
    return acumulator + age;
}, 0 );

console.log(sumofages);