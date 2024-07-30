/*
No Javascript, o this faz referência:

Node => module.exports
Web => window

Escopo:
    => Global -> QUando começamos a escrever nossa aplicação.
    No contexto global, o this faz referência ao obejeto global,
    que é o obejeto window no navegador de internet ou ao objeto global no Node.js.

    => Local -> Por exemplo, dentro de uma função!

*/

//console.log(this === module.exports)

const newPerson = {
    name: 'Kya',
    age: 26,
    talk: function(){
        console.log(this.name)
        console.log('Olá')
    }
}

function myFunction(){
    console.log(this)
}

myFunction()
//newPerson.talk()