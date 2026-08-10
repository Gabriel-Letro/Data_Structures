import Queue from "./Lib/Queue.mjs";

function contarComponentesConexos(grafo) {
  const visitados = new Set();
  let componentes = 0;
 
  // Percorre TODOS os vértices, inclusive ilhas isoladas
  for (const vertice of Object.keys(grafo)) {
    if (!visitados.has(vertice)) {
      componentes++; // achamos uma nova "ilha"
 
      // BFS que marca todos os nós alcançáveis a partir deste vértice
      const fila = new Queue();
      fila.enqueue(vertice);
      visitados.add(vertice);
 
      while (!fila.isEmpty) {
        const atual = fila.dequeue();
        for (const vizinho of grafo[atual] || []) {
          if (!visitados.has(vizinho)) {
            visitados.add(vizinho);
            fila.enqueue(vizinho);
          }
        }
      }
    }
  }
 
  return componentes;
}
// Grafo Conexo e Acíclico (Árvore)
const grafoArvore = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B"],
  F: ["C"]
};
// Grafo Desconexo (com nós isolados)
const grafoDesconexo = {
  A: ["B"],
  B: ["A"],
  C: ["D"],
  D: ["C"],
  E: [] // Nó totalmente isolado
};
console.log("\n--- TESTANDO EXERCÍCIO 3 (Componentes Conexos) ---");
console.log("Qtd Componentes grafoArvore:", contarComponentesConexos(grafoArvore)); // Saída esperada: 1
console.log("Qtd Componentes grafoDesconexo:", contarComponentesConexos(grafoDesconexo)); // Saída esperada: 3
