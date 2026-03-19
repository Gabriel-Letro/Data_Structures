import Queue from "./Aulas/lib/Queue.mjs";

let filaAeroporto = new Queue()

filaAeroporto.enqueue("Passageiro A")
filaAeroporto.enqueue("Passageiro B")
filaAeroporto.enqueue("Passageiro C")
filaAeroporto.enqueue("Passageiro D")
filaAeroporto.enqueue("Passageiro E")

console.log(filaAeroporto.print())

let proximoEmbarque = filaAeroporto.peek()
console.log({proximoEmbarque})

let embarcado = filaAeroporto.dequeue()
console.log({embarcado})
console.log(filaAeroporto.print())

filaAeroporto.enqueue("Passageiro F")
filaAeroporto.enqueue("Passageiro G")
filaAeroporto.enqueue("Passageiro H")

console.log(filaAeroporto.print())

let proximoEmbarque2 = filaAeroporto.peek()
console.log({proximoEmbarque2})

let embarcado2 = filaAeroporto.dequeue()
console.log({embarcado2})
console.log(filaAeroporto.print())