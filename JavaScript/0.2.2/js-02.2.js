let vetor = ['Laranja' , 'Maçã' , 'Banana']
document.write(`<p>Nosso vetor é o : ${vetor}</p>`)

vetor[3] = 'Morango'
document.write(`<p>Nosso vetor agora é o : ${vetor}</p>`)

//PUSH insere um novo elemnto no final do vetor:

vetor.push('Abacaxi')
document.write(`<p>Nosso vetor é o : ${vetor}</p>`)   

vetor[0] = 'Pera'
document.write(`<p>Nosso vetor é o : ${vetor}</p>`)

//UNSHIFT insere novo elemento no inicio do vetor

vetor.unshift('Laranja')
document.write(`<p>Nosso vetor é o : ${vetor}</p>`)

//LENGTH retorna numeros de elementos no vetor

let number = [6, 8, 2, 9, 3, 800, 200]
document.write(`<p>Nosso novo vetor é o : ${number}</p>`)
document.write(`<p>O numero de elementos nesse vetor é : ${number.length}</p>`)

//SORT ordena o vetor 
document.write(`<p>O primeiro elemento do vetor é : ${number[0]}</p>`)

let numberOrdenado = number.sort()
document.write(`<p>O primeiro elemento do vetor é : ${numberOrdenado}</p>`)

document.write(`<p>A lista de frutas ordenada é: ${vetor.sort()}</p>`)

//Ordenando um vetor numerico em ordem crescente
document.write(number.sort((a, b) => a - b))
//Ordenando um vetor numerico em ordem decrescente
document.write(`<p>${number.sort((a, b) => a - b)}</p>`) 
