import Stack from "./Aulas/lib/Stack.mjs";

let TorreA = new Stack()
let TorreB = new Stack()
let TorreC = new Stack()

console.log(TorreA.print())
console.log(TorreB.print())
console.log(TorreC.print())

TorreB.push(1)
TorreB.push(2)
TorreB.push(3)
TorreB.push(4)
console.log(TorreB.print())

TorreB.pop()
TorreC.push(4)

TorreB.pop()
TorreA.push(3)

TorreC.pop()
TorreA.push(4)

TorreB.pop()
TorreC.push(2)

TorreA.pop()
TorreB.push(4)

TorreA.pop()
TorreC.push(3)

TorreB.pop()
TorreC.push(4)

TorreB.pop()
TorreA.push(1)

TorreC.pop()
TorreA.push(4)

TorreC.pop()
TorreB.push(3)

TorreA.pop()
TorreB.push(4)

TorreC.pop()
TorreA.push(2)

TorreB.pop()
TorreC.push(4)

TorreB.pop()
TorreA.push(3)

TorreC.pop()
TorreA.push(4)

console.log(TorreA.print())
console.log(TorreB.print())
console.log(TorreC.print())