import Stack from "./lib/Stack.mjs"

let pilha = new Stack()
console.log(pilha.print())
console.log("Está vazia ?: ",pilha.isEmpty)



pilha.Inserir(35)
pilha.Inserir(77)
pilha.Inserir(19)

console.log(pilha.print())
console.log("Está vazia ?: ",pilha.isEmpty)

let removido = pilha.remover()
console.log({removido}, pilha.print())

let ultimo = pilha.peek()
console.log({ultimo},pilha.print())

