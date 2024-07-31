//async ou assincrona é uma promisse, forma de dizer que uma função depende da respota de algo que não está no escopo. Seja um retorno do banco de dados ou back-end
//await é onde vou informar que meu codigo vai parar e esperar o retorno da resposta requirida
const data = async () => { 

    //Somente exemplo, a sintaxe está incompleta e erra neste codigo.
    //demonstar que o clock espera receber de uma API(consumo de API), um parametro
    const clock = await fetch(/*adicione o endereço da API, AwesomeAPI cotação de moedas*/).then(response => response.json())
    //è usado no conversor de moeda
    console.log('async retorno')
}