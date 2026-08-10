export default class Queue{

#data //vetor private 

constructor(){
    this.#data = []
}
    //método para inserir na fila
    enqueue(val){
        this.#data.push(val)
    }

    //método para remoção na fila 
    dequeue(){
        return this.#data.shift()
    }

    //método para consultar o inicio da fila sem remover o elemento
    peek(){
        return this.#data[0]
    }
    
    //a fial está vazia 
    get isEmpty(){
        return this.#data.length === 0
    }

    //método de impressão (para efeitos de depuração)
    print(){
        let output = "[ "
        for(let i = 0; i < this.#data.length; i++){
            if(output !== "[ "){
                output += ", "
            }
            output += `(${i+1}): ${this.#data[i]}`
        }
        return output + " ]"
    }

}