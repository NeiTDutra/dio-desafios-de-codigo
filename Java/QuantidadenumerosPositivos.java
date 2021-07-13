/*

Desafio

Crie um programa que leia 6 valores. Você poderá receber valores negativos e/ou positivos como entrada, devendo desconsiderar os valores nulos. Em seguida, apresente a quantidade de valores positivos digitados.

Entrada

Você receberá seis valores, negativos e/ou positivos.

Saída

Exiba uma mensagem dizendo quantos valores positivos foram lidos assim como é exibido abaixo no exemplo de saída. Não esqueça da mensagem "valores positivos" ao final.

*/

import java.io.InputStreamReader;
import java.io.IOException;
import java.io.BufferedReader;

public class Desafio {
	
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        Double x;
        int cont = 0;
        int vp = 0;

//continue a solucao de acordo com o solicitado no enunciado

        while (cont < 6) {
          x = Double.parseDouble(br.readLine());
        	if ( x > 0) {
        		vp++;
        	}
    		cont++;
        }
        System.out.println(vp+" valores positivos");
    }
	
}

