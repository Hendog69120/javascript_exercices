// différences entre const / let / var

//const

const Pi = 3.14;
//Pi = 1; error car const a une valeur qui ne peut etre modifer par la suite
console.log(Pi);

// let

for (let i = 0; i < 3; i++) {
    console.log(i) ;
}
//console.log(Pi) en dehors de la boucle cela ne fonctionnera pas avec let

// var
console.log(j);
for (var j = 4; j < 6; j++) {
    console.log(j);
};
console.log(j);

