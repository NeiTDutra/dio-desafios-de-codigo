/*


Ler um número inteiro N e calcular todos os seus divisores.

Entrada

O arquivo de entrada contém um valor inteiro.

Saída

Escreva todos os divisores positivos de N, um valor por linha.

*/

import java.util.*;

public class Problem {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        int n;
        int nn;
        ArrayList<Integer> l = new ArrayList<>();
        n = input.nextInt();

        for (int i = 1; i <= n; i++) {

            if (n % i == 0) {

                nn = n / i;
                l.add(nn);
            }
        }

        Collections.reverse(l);

        l.forEach( ll -> {
            System.out.println(ll);
        });
    }
}
