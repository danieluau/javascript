const ages = [10,22,14,48,28,11,13];

const filterages = ages.filter(function (age) {
    return age % 2 == 0
} )

console.log(filterages)