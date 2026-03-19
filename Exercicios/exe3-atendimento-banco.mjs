import Queue from "./Aulas/lib/Queue.mjs";

let filaBanco = new Queue()

filaBanco.enqueue("Cliente 101")
filaBanco.enqueue("Cliente 102")
filaBanco.enqueue("Cliente 103")
filaBanco.enqueue("Cliente 104")
filaBanco.enqueue("Cliente 105")

console.log(filaBanco.print())

let proximo = filaBanco.peek()
console.log({proximo})

let atendido = filaBanco.dequeue()
console.log({atendido})

console.log(filaBanco.print())

filaBanco.enqueue("Cliente 106")
filaBanco.enqueue("Cliente 107")

console.log(filaBanco)

let proximo2 = filaBanco.peek()
console.log({proximo2})

let atendido2 = filaBanco.dequeue()
console.log({atendido2})

console.log(filaBanco.print())