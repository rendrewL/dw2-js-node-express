const listaClientes =  [


{
    nome: "Guilherme" ,
    endereco: "Rua 01, Nº 7, Bairro Longo" ,
    CPF: 12345678910 ,

},
{
    nome: "Lucas" ,
    endereco: "Rua 03, Nº 57, Bairro Novo" ,
    CPF: 14587690144 ,
    
},
{
    nome: "Isaac" ,
    endereco: "Rua 06, Nº 422, Bairro Agrocha" ,
    CPF: 76578954312 ,

}


];

listaClientes.forEach(clientes => {
    document.write(`
        nome: ${clientes.nome}<br>
        endereco: ${clientes.endereco}<br>
        CPF: ${clientes.CPF}<br> <br>
        `)
})

listaClientes.push ({ nome: "Carlos" ,
    endereco: "Rua 8, Nº 123, Bairro Vila Nova" ,
    CPF: 76548723901 });

document.write(`Array atualizado <br>`)

listaClientes.forEach(clientes => {
    document.write(`
        nome: ${clientes.nome}<br>
        endereco: ${clientes.endereco}<br>
        CPF: ${clientes.CPF}<br> <br>
        `)
})

listaClientes.unshift ({ nome: "Paulo" ,
    endereco: "Rua 11, Nº 1001, Bairro Laranjeiras" ,
    CPF: 87654309819 });

document.write(`Array atualizado pt2<br>`)

listaClientes.forEach(clientes => {
    document.write(`
        nome: ${clientes.nome}<br>
        endereco: ${clientes.endereco}<br>
        CPF: ${clientes.CPF}<br> <br>
        `)
})
