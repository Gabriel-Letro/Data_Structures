import Stack from "./Lib/Stack.mjs";

const grafo = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: [],
    F: [],
};

//implementação da busca em profundidade (DFS)
function dfs(grafo, inicio){

    const visitados = new Set();

    // cria uma nova instancia da pilha em LIB
    const pilha = new Stack();

    pilha.push(inicio)

    while(!pilha.isEmpty){
        const no = pilha.pop()

        if(!visitados.has(no)){
            console.log(no)
            visitados.add(no)

            //guarda o vetor de vizinhos do nó atual em uma variável para facilitar o acesso por indice
            const vizinho = grafo[no] 

            for(let i = vizinho.length - 1; i >= 0; i--){
                if(!visitados.has(vizinho[i])){
                    pilha.push(vizinho[i])
                }
            }
        }

    }
}

dfs(grafo, "A")