import Queue from "./Aulas/lib/Queue.mjs";

let filaPlantao = new Queue()

filaPlantao.enqueue("José")
filaPlantao.enqueue("Sérgio")
filaPlantao.enqueue("Joaquim")
filaPlantao.enqueue("Maria")
filaPlantao.enqueue("João")
filaPlantao.enqueue("Samuel")
filaPlantao.enqueue("Vicente")
filaPlantao.enqueue("Terezinha")
filaPlantao.enqueue("Firmino")
filaPlantao.enqueue("Toninho")
filaPlantao.enqueue("Alexandre")

console.log(filaPlantao.print())

let proximoAtendimento = filaPlantao.peek()
console.log({proximoAtendimento})

let atendido = filaPlantao.dequeue()
console.log({atendido})
console.log(filaPlantao.print())

filaPlantao.enqueue("Rafael")
filaPlantao.enqueue("Isabela")
filaPlantao.enqueue("Cauã")
console.log(filaPlantao.print())

let proximoAtendimento2 = filaPlantao.peek()
console.log({proximoAtendimento2})

let atendido2 = filaPlantao.dequeue()
console.log({atendido2})
console.log(filaPlantao.print())
