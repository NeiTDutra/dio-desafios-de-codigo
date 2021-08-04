/*

Desafio

O calendário escolar está passando bem rápido, devido a isso, as professoras de uma escola estão com dificuldade para calcular as notas dos alunos. Visando em resolver a situação, a diretora da escola contratou você para desenvolver um programa que leia as notas da primeira e da segunda avaliação de um aluno. Calcule e imprima a média semestral.

O programa só aceitará notas válidas (uma nota válida deve pertencer ao intervalo [0,10]). Cada nota deve ser validada separadamente.

No final deve ser impressa a mensagem “novo calculo (1-sim 2-nao)”, solicitando as professoras que informe um código (1 ou 2) indicando se ele deseja ou não executar o algoritmo novamente, (aceitar apenas os código 1 ou 2). Se for informado o código 1 deve ser repetida a execução de todo o programa para permitir um novo cálculo, caso contrário o programa deve ser encerrado.

Entrada

O arquivo de entrada contém vários valores reais, positivos ou negativos. Quando forem lidas duas notas válidas, deve ser lido um valor inteiro X . O programa deve parar quando o valor lido para este X for igual a 2.

Saída

Se uma nota inválida for lida, deve ser impressa a mensagem “nota invalida”. Quando duas notas válidas forem lidas, deve ser impressa a mensagem “media = ” seguido do valor do cálculo.

Antes da leitura de X deve ser impressa a mensagem "novo calculo (1-sim 2-nao)" e esta mensagem deve ser apresentada novamente se o valor da entrada padrão para X for menor do que 1 ou maior do que 2, conforme o exemplo abaixo.

A média deve ser impressa com dois dígitos após o ponto decimal.

*/

using System;

class Desafio {
    static void Main() {
    //declare suas variaveis corretamente
        int leia = 0;
        bool op;
        double x = 0;

        //continue a solução ou implemente da sua maneira

        while (leia < 2) {
          
          op = true;
          double n = double.Parse(Console.ReadLine());
        
          if (n < 0 || n > 10) {
            
            Console.WriteLine("nota invalida");
            
          } else if (leia == 0) {
            
            x = n;
            leia ++;
           
          } else if (leia == 1) {
            
            double media = (x + n) / 2;

            Console.Write("media = ");
            Console.WriteLine(media.ToString("N2"));
            
            while (op == true){
              
              Console.WriteLine("novo calculo (1-sim 2-nao)");
              double res = double.Parse(Console.ReadLine());
	
              if (res == 1) {
                
                op = false;
                leia = 0;
              
              } else if (res == 2) {
                
                op = false;
                leia ++;
                                 
              }
            }
          } 
        }
    }
}

