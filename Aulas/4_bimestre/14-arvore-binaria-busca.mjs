import BinarySearchTree from './lib/BinarySearchTree.mjs';

const arvore = new BinarySearchTree();

arvore.insert (48);
arvore.insert (71);
arvore.insert (15);
arvore.insert (29);
arvore.insert (57);
arvore.insert (1);
arvore.insert (80);
arvore.insert (14);
arvore.insert (19);
arvore.insert (37);
arvore.insert (23);
arvore.insert (21);
arvore.insert (25);
arvore.insert (51);
arvore.insert (64);

//Percurso em ordem
let percurso = []
arvore.inOrderTraversal(val => percurso.push(val));
console.log('percurso em ordem: ', percurso);

//Percurso pré-ordem
let percursoPRE = [];
arvore.preOrderTraversal(val => percursoPRE.push(val));
console.log('percurso pré-ordem: ', percursoPRE);

//Percurso pós-ordem
let percursoPOS = [];
arvore.postOrderTraversal(val => percursoPOS.push(val));
console.log('percurso pós-ordem: ', percursoPOS);

