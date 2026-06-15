import Queue from "./lib/Queue.mjs";
import Stack from "./lib/Stack.mjs";


function obterDistanciasEBFS(grafo, inicio) {
  const distancias = { [inicio]: 0 };       // distância em arestas + marca de "visitado"
  const predecessores = { [inicio]: null }; // quem descobriu cada nó (para reconstruir o caminho)

  const fila = new Queue();
  fila.enqueue(inicio);

  while (!fila.isEmpty) {
    const atual = fila.dequeue();

    for (const vizinho of grafo[atual] || []) {
      // Primeira vez que alcançamos o vizinho => caminho mais curto (propriedade da BFS)
      if (!(vizinho in distancias)) {
        distancias[vizinho] = distancias[atual] + 1;
        predecessores[vizinho] = atual;
        fila.enqueue(vizinho);
      }
    }
  }

  // Reconstrói o caminho de cada nó voltando pelos predecessores até a origem
  const caminhos = {};
  for (const vertice of Object.keys(distancias)) {
    const caminho = [];
    let v = vertice;
    while (v !== null) {
      caminho.unshift(v); // insere no início para ficar na ordem origem -> destino
      v = predecessores[v];
    }
    caminhos[vertice] = caminho;
  }

  return { distancias, caminhos };
}

const grafoArvore = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B"],
  F: ["C"],
};
console.log("--- TESTANDO EXERCÍCIO 1 (BFS) ---");
console.log(JSON.stringify(obterDistanciasEBFS(grafoArvore, "A"), null, 2));