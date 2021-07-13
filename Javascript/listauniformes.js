/*

Desafio

O professor Girafales organizou a confecção de um uniforme para as turmas da escola para comemorar o final do ano. Após algumas conversas, ficou decidido com os alunos que eles poderiam escolher a cor do uniforme entre branco ou vermelho. Assim sendo, Girafales precisa de sua ajuda para organizar as listas de quem quer o uniforme em cada uma das turmas, relacionando estas camisetas pela cor, tamanho (P, M ou G) e por último pelo nome.

Entrada

Cada caso de teste inicia com um valor N, (1 ≤ N ≤ 60) inteiro e positivo, que indica a quantidade de uniformes a serem feitas para aquela turma. As próximas N*2 linhas contém informações de cada um dos uniformes (serão duas linhas de informação para cada uniforme). A primeira linha irá conter o nome do estudante e a segunda linha irá conter a cor do uniforme ("branco" ou "vermelho") seguido por um espaço e pelo tamanho do uniforme "P" "M" ou "G". A entrada termina quando o valor de N for igual a zero (0) e esta valor não deverá ser processado.

Saída

Para cada caso de entrada deverão ser impressas as informações ordenadas pela cor em ordem ascendente, seguido pelos tamanhos em ordem descendente e por último por ordem ascendente de nome,

*/

//Declaração de variáveis
//#############################################################

let lines = 5;//gets();
let list_un = [];
let list_ord = [];
let arr_l = [];
let cor = ['branco', 'vermelho'];
let tam = ['P', 'M', 'G'];

//Elementos de entrada:
//#############################################################

let l_names = ['Jntids Proclam', 'Dantic Genetc', 'Elldras Backlane Jesty', 'Aackla novoux', 'Blauser Vousht', 'Gotlass Juntry', 'Albrim Blanck Masdr', 'Antome Hostf'];
let l_unif = ['vermelho P', 'branco M', 'branco P', 'vermelho G', 'branco P', 'branco G', 'branco M', 'vermelho P'];

//Monta a lista cores/tamanhos com nomes:
//#############################################################

for(let i = 0; i < l_names.length; i ++) {  
  
  list_name = l_names[i];//gets();
  list_unfm = l_unif[i];//gets();
  
  arr_list_unfm = list_unfm.split(' ').concat(list_name);
  
  arr_l.push(arr_list_unfm);
  
}

//Função que ordena os nomes ascendentes:
//#############################################################

function ordena_nome(a, b) {

    return a[2].substr(0,1).localeCompare(b[2].substr(0,1));
}

//Laços que retornam a lista ordenada:
//#############################################################

for(let c = 0; c < cor.length; c ++) {

    for(let t = 0; t < tam.length; t ++) {
    
        list_ord = arr_l.map( (el) => {

            if(el[0] === cor[c] && el[1] === tam[t]) {
        
                return el;
            }
        }).filter(Boolean).sort(ordena_nome);
    
        list_ord.map( (el) => {

            console.log(el.join(' '));
        });
        
    }
}

//#############################################################
//OUTRA FORMA ENCONTRADA EM (https://github.com/RenatoBrito81/
//BootcampNodejs-Desafios/blob/master/03-Ordena%C3%A7%C3%A3o%
//20e%20Filtros%20em%20JavaScript/Desafio-3.js)
//#############################################################

//Falta ajustes na saída

let alunos = l_names.length;//gets();
let dadosAlunos = [];

for(let i=0; i<alunos; i++){
  let nomeAluno = l_names;//gets();
  let dadosUniforme = l_unif;//gets().split(" ");
  
  dadosAlunos.push({
    nome: nomeAluno,
    cor: dadosUniforme[0],
    tamanho: dadosUniforme[1]
  });
}

let dadosOrdenados = dadosAlunos.sort((a, b) => {
  if(a.cor > b.cor){
    return 1;
  }
  else{
    if(a.cor === b.cor){
      if(a.tamanho < b.tamanho){
        return 1;
      }
      else{
        if(a.cor === b.cor && a.tamanho === b.tamanho){
          if(a.nome > b.nome){
            return 1;
          }
          else{
            return -1;
          }
        }
        else{
          return -1;
        }
      }
    }
    else{
      return -1;
    }
  }
});

dadosOrdenados.map(aluno => console.log(aluno.cor, aluno.tamanho, aluno.nome));



