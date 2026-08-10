export default class Deque {

    #data

    constructor() {
        this.#data = []
    }

    //metodo para inserção no inicio da estrutura
    insertFront(val) {
        this.#data.unshift(val)
    }
    //metodo para inserção no final da estrutura
    insertBack(val) {
        this.#data.push(val)
    }

    //metodo para remoção do inicio da estrutura
    removeFront() {
        return this.#data.shift()
    }
    //metodo para remoção no final da estrutura
    removeBack() {
        return this.#data.pop
    }
    //metodo para consultar o inicio da estrutura
    peekFront() {
        return this.#data[0]
    }
    //metodo para consultar o final da estrutura
    peekBack() {
        return this.#data[this.#data.length - 1]
    }
    //metodo para verificar se esta vazio
    get isEmpty() {
        return this.#data.length === 0 ? "Sim, está vazia!" : "Não"
    }
    //método de impressão (para efeitos de depuração)
    print() {
        let output = "[ "
        for (let i = 0; i < this.#data.length; i++) {
            if (output !== "[ ") {
                output += ", "
            }
            output += `(${i + 1}): ${this.#data[i]}`
        }
        return output + " ]"
    }
}