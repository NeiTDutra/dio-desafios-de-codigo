/*
Não funciona aqui, somente no teste da dio funcionou


Desafio

Pedro trabalha sempre até tarde todos os dias, com isso tem pouco tempo tempo para as tarefas doméstica. Para economizar tempo ele faz a lista de compras do supermercado em um aplicativo e costuma anotar cada item na mesma hora que percebe a falta dele em casa.

O problema é que o aplicativo não exclui itens duplicados, como Pedro anota o mesmo item mais de uma vez e a lista acaba ficando extensa. Sua tarefa é melhorar o aplicativo de notas desenvolvendo um código que exclua os itens duplicados da lista de compras e que os ordene alfabeticamente.

Entrada

A primeira linha de entrada contém um inteiro N (N < 100) com a quantidade de casos de teste que vem a seguir, ou melhor, a quantidade de listas de compras para organizar. Cada lista de compra consiste de uma única linha que contém de 1 a 1000 itens ou palavras compostas apenas de letras minúsculas (de 1 a 20 letras), sem acentos e separadas por um espaço.

*/

let lines = 0;//gets();
let list = ['feijão arroz detergente', 'leite café pão detergente', 'tempero alface batata arroz'];
let list_compare = []; 


for(let i = 0; i < list.length; i ++) {
  
  //list = gets();
  
  let arr_list = list[i];
  list_compare.push(arr_list).split(' ');
  console.log(list_compare);
  
    let list_uni = list_compare.filter( (item, index) => arr_list.indexOf(item) === index).sort().join(' ');
    
    console.log(list_uni);
  
}
