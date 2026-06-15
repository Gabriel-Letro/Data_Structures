import Stack from "./Lib/Stack.mjs";

function detectarCiclo(grafo, inicio) {
  const visitados = new Set();
  const pilha = new Stack();
 
  // Empilhamos pares [nó, pai]: o "pai" é quem descobriu o nó.
  pilha.push([inicio, null]);
 
  while (!pilha.isEmpty) {
    const [atual, pai] = pilha.pop();
 
    // Se já foi processado por outro caminho, ignora (evita reprocessar)
    if (visitados.has(atual)) continue;
    visitados.add(atual);
 
    for (const vizinho of grafo[atual] || []) {
      if (!visitados.has(vizinho)) {
        pilha.push([vizinho, atual]);
      } else if (vizinho !== pai) {
        // Vizinho já visitado que NÃO é o pai direto => aresta de retorno => ciclo
        return true;
      }
    }
  }
 
  return false;
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

// Grafo Conexo com Ciclo
const grafoComCiclo = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B", "E"], // Conexão extra D-E que fecha um ciclo
  E: ["B", "D"],
  F: ["C"]
};
console.log("\n--- TESTANDO EXERCÍCIO 2 (DFS - Ciclo) ---");
console.log("Grafo Árvore tem ciclo?", detectarCiclo(grafoArvore, "A")); // Esperado: false
console.log("Grafo com Ciclo tem ciclo?", detectarCiclo(grafoComCiclo, "A"));