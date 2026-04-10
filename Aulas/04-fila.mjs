import Queue from "./lib/Queue.mjs";

let fila = new Queue()
console.log(fila.print())
console.log("Está vazia?",fila.isEmpty)

//inserções na fila 
fila.enqueue("Alexandre")
fila.enqueue("João")
fila.enqueue("Kaique")
fila.enqueue("Filipe")
fila.enqueue("Hélio")

console.log(fila.print())

//quem sera atendido
let proximo = fila.peek()
console.log({proximo})


//remoção da fila
let remover = fila.dequeue



//quem foi atendido
let atendido = fila.dequeue()
console.log({atendido})
console.log(fila.print())
