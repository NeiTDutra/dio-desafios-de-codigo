/*


Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

Entrada

O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

Saída

Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

Obs: Utilize ponto (.) para separar a parte decimal.

*/

using System; 

class minhaClasse {

    static void Main(string[] args) { 

            decimal inteiro;
            //int inteiro, auxNotas, auxMoedas;

            
            inteiro = decimal.Parse(Console.ReadLine());//Convert.ToDouble(Console.ReadLine());

            //inteiro = (int)valor;
            //valor *= 100;
            //auxMoedas = (int)valor;


            Console.WriteLine("NOTAS:");
            
            Console.WriteLine("{0} nota(s) de R$ 100.00", (int) inteiro / 100);
            
            inteiro = inteiro % 100;
            Console.WriteLine("{0} nota(s) de R$ 50.00", (int) inteiro / 50);
            
            inteiro = inteiro % 50;
            Console.WriteLine("{0} nota(s) de R$ 20.00", (int) inteiro / 20);
            
            inteiro = inteiro % 20;
            Console.WriteLine("{0} nota(s) de R$ 10.00", (int) inteiro / 10);
            
            inteiro = inteiro % 10;
            Console.WriteLine("{0} nota(s) de R$ 5.00", (int) inteiro / 5);
            
            inteiro = inteiro % 5;
            Console.WriteLine("{0} nota(s) de R$ 2.00", (int) inteiro / 2);
            
            inteiro = inteiro % 2;
            inteiro = inteiro * 100;
            //complete o código

            Console.WriteLine("MOEDAS:");
            Console.WriteLine("{0} moeda(s) de R$ 1.00", (int) inteiro / 100);
            
            inteiro = inteiro % 100;
            Console.WriteLine("{0} moeda(s) de R$ 0.50", (int) inteiro / 50);
            
            inteiro = inteiro % 50;
            Console.WriteLine("{0} moeda(s) de R$ 0.25", (int) inteiro / 25);
            
            inteiro = inteiro % 25;
            Console.WriteLine("{0} moeda(s) de R$ 0.10", (int) inteiro / 10);
            
            inteiro = inteiro % 10;
            Console.WriteLine("{0} moeda(s) de R$ 0.05", (int) inteiro / 5);
            
            inteiro = inteiro % 5;
            Console.WriteLine("{0} moeda(s) de R$ 0.01", (int) inteiro);
            //complete o codigo

    }

}
