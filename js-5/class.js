/*
    CLASSES

    Classe é como uma forma de bolo, para ter um padrão em todos os bolos, no mesmo formato tendo um padrão
    Se eu quero criar um obejeto que se repita, usamos CLASSES

    class tem de usar com a primeira letra maiuscula
    dentro da minha classe posso criar um método (não é uma função, é um método neste caso, tendo de usar o this para se referir algo dentro da classe mesmo fora do metodo)
    classe precimamos instânciar, não chamar como uma função;

    Uma classe pode ter o metódo constructor
*/

class Person {
    constructor(name, age){
        console.log(`my name ${name} and I'm ${age}`)

        this.name = name
        this.age = age
    }

    name;
    age;

    talk(){
        console.log(`Hellou, my name ${this.name} and I'm ${this.age} years old`)
    }
}

//Estou pedindo ao JS criar uma nova pessoa com esse parametro
const newPerson = new Person()
//Instânciei
//Toda vez que instâciar minha variavel, minha calsse vai executar primeiro o modo constructor, dentro de uma classe.


newPerson.name = 'Alex'
newPerson.age = 26
newPerson.talk()

const newNewPerson = new Person('Rodolfo', 28)
newPerson.talk()