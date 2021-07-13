/*
Entrada

A entrada contém vários casos de teste. A primeira linha de cada caso contém os inteiros N e D (1 ≤ N, D ≤ 50), o número de pessoas e o número de datas consideradas, respectivamente. As pessoas são numeradas de 1 a N. As próximas D linhas descrevem uma data considerada. Cada linha começa com a data na forma dia∕mes∕ano. A linha é seguida de N inteiros p1,p2,...,pN. O inteiro pi é 1 se a pessoa i pode comparecer na data considerada, ou 0 caso contrário. É garantido que as datas são sempre válidas, e não há zeros à esquerda. Além disso, as datas são dadas em ordem, do dia mais cedo para o dia mais tarde.

Saída

Para cada caso de teste, imprima uma linha contendo a data que o evento deve ocorrer, na forma dia∕mes∕ano, de maneira idêntica à da entrada. Caso não seja possível realizar o evento, imprima “Pizza antes de FdA” (sem aspas).

*/

using System;

//continue a solução

public class pizzaria
{
  public static void Main()
  {
    string[] line = Console.ReadLine().Split(" ");
    int totalDePessoas = int.Parse(line[0]);
    int totalDeDatas = int.Parse(line[1]);
    
    string dataConsiderada = " ";
    
    //int qtd = 0;
    bool achou = false;
    
    for (int i = 0; i < totalDeDatas; i++)
    {
      int totalDePessoasQuePodemComparecer =  0;
      
      string[] entradaDataConfirmacao = Console.ReadLine().Split(" ");
      dataConsiderada = entradaDataConfirmacao[0];
      
      for (int j = 1; j < totalDePessoas + 1; j++)
      {
        totalDePessoasQuePodemComparecer += int.Parse(entradaDataConfirmacao[j]);
      }
      
      achou = (totalDePessoasQuePodemComparecer == totalDePessoas);
      
      if (achou)
      {
        break;
      }
    }
      
    if (achou)
    {
      Console.WriteLine(dataConsiderada);
    } 
    else
    {
      Console.WriteLine("Pizza antes de FdA");
    }
  }
}
