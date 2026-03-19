class Node {
    constructor(val) {
        this.data = val
        this.next = null
    }
}

export default class LinkedList {
    #head // inicio da lista (cabeça)
    #tail // fim da lista (cauda)
    #count // quantidade de nodos da lista

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
    }

    // Getter que retorna se a lista encadeada está vazia ou não
    get isEmpty() {
        return this.#count === 0
    }

    // Getter que retorna a quantidade de elementos da lista
    get count() {
        return this.#count
    }

    // Método de inserir em qualquer posição 
    insert(pos, val) {
        // Cria o nodo para armazenar o valor pretendido 
        const inserted = new Node(val)

        //1 caso: a lista está vazia
        if (this.isEmpty) {
            this.#head = inserted
            this.#tail = inserted
        } // 2 caso: lista não vazia, inserção na primeira posição 
        else if (pos === 0) {
            inserted.next = this.#head
            this.#head = inserted
        }
        // 3 caso: inserção no final da lista
        else if (pos >= this.#count) {
            this.#tail.next = inserted
            this.#tail = inserted
        }
        // 4 caso: inserção em uma posição intermediária
        else {
            let before = this.#head
            for (let i = 1; i < pos; i++) {
                before = before.next
            }
            let after = before.next

            inserted.next = after
            before.next = inserted

        }

        this.#count++

    }

    //metodo para inserção na primeira posição (atalho)
    insertHead(val) {
        this.insert(0, val)
    }

    //metodo para inserção na última posição (atalho)
    insertTail(val) {
        this.insert(this.#count, val)
    }

    //metodo para remoção de um nodo na lista
    remove(pos) {
        //1 caso: lista vazia ou a posição informada esta fora dos limites da lista
        if (this.isEmpty || pos < 0 || pos >= this.#count - 1) {
            return undefined
        }
        let removed

        //2 caso: remoção do inicio da fila
        if (pos === 0) {
            removed = this.#head
            this.#head = this.#head.next
        }
    }

} 