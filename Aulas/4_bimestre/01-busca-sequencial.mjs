const frutas = ['Laranja', 'Maça', 'Uva', 'Pera', 'Jabuticaba', 'Limão', 'Mamão', 'Tangerina']
const numeros = [1,5,7,10,2,24,15]

function buscaSequencial (vetor, valorBusca){
    //percurso do vetor com for tradicional
    for(let i=0; i < vetor.length; i++){
        if (vetor[i] === valorBusca) return i
            
    }
    return -1  //valorBusca não existe no vetor
}

console.log("Buscando Tangerina: ", buscaSequencial(frutas, 'Tangerina'))
console.log("Buscando Limão: ", buscaSequencial(frutas, 'Limão'))
console.log("Buscando Morango: ", buscaSequencial(frutas, 'Morango'))
console.log("Buscando 5: ", buscaSequencial(numeros, 5))
console.log("Buscando 50: ", buscaSequencial(numeros, 50))