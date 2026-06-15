import Queue from "./lib/Queue.mjs"

const grafo = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: [],
    F: [],
}

// implementação da busca em largura (BFS)

function bfs(grafo, inicio){

    //O set é uma estrutura de dados nativa do JS (como se fosse um array), mas com duas regras:
    //Não permite elementos duplicados: Se você tentar adicionar o valor "A" 3 vezes, ele guarda apenas uma.
    //Busca instantânea: o método .has() desconbre se um elemento está lá desntro muito mais rápido do que fazer um indexOf ou includes
    const visitados = new Set();

    //cria uma nova instancia da fila em LIB
    const fila = new Queue();

    
    fila.enqueue(inicio)

    //criar um laço que vai rodar enquanto a fila NÃO estiver vazia 
    while(!fila.isEmpty){
        // remove o primeiro elemento da fila (o mais antigo) e guarda na variável 'no'
        const no = fila.dequeue()

        //checa se o nó atual não esta dentro do conjunto de visitados
        if(!visitados.has(no)){

            //imprimi o nó no console
            console.log(no)

            //metodo de adicionar o nó atual no conjunto para marcar que ele ja foi processado
            visitados.add(no)

            //percorre cada um dos vizinhos do nó atual da lista de adjacentes
            for (const vizinho of grafo[no]) {
                //checa se o vizinho em questão ainda não foi visitado, se não foi visitado coloca esse vizinho no final da fila para ser processado depois
                if(!visitados.has(vizinho)){
                    fila.enqueue(vizinho)
                }
            }
        }
    }
}

bfs(grafo, "A")