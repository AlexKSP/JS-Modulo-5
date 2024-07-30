//Try Catch é um validador de erro para não querer o server e interromper o funcionamento dele, retornando um erro.
//Podemos gerar erros, por exemplo se a idade for menor que 18 durante o request de um formulario, dara erro e entrara no catch
//temos o Finally ainda para finalizar, porem esse é opcional. Err é erro.

app.post('/users', (request, response) => {
    try {
        const { name, age} = request.body

        const user {id: uuid.v4(), name, age}

        users.push(userR)

        return response.status(201).json(user)
    } catch(err){
        return response.status(500).jason({error:err.message})
    }
})