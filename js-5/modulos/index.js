/*
    Usar recursos de uma arquivo dentro de outro arquivo. Isso é o que chamamos de MODULOS.

*/

//Estou importando ou melhor, requerindo uma função que está dentro do modulo person
const person = require('./person')
const multi = require('./multi')
// const { sum, sub} = require('./sum)
const obeject = require('./sum')

console.log(person)
console.log(multi(2,3))
console.log(obeject.sum(2,3))
console.log(obeject.sub(2,3))