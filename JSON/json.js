/* JSON - JavaScript Object Notation

-Padrão de troca de armazenamento e informações
-Padrão lógico simples
-Leve para ser enviado e recebido
-Simples e fácil de entender
-Derivado do JavaScript
-Utiliza o formato chave / valor

Forma de transitar dados e informações entre linguagem e outra, JSON é o inglês da comunicação mundial.

*/

const user = {
    nome: "Alex",
    idade: 26,
    filhos: null,
    hobbies: ["Codar", "Jogar", "Tocar"],
    casado: true,
    empresas: {
        devclub: {
            fundada: 2021,
            colaboradores: 40
        }
    }
}



//Estou convertendo um obejeto JS em um arquivo Json, parse seria uma arquivo json para obejeto e stringify um obj js para json
const userJson = JSON.stringify(user)

const userJsonToJS = JSON.parse(userJson)

console.log(userJsonToJS)