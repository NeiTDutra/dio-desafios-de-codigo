/*

Desafio

Elabore um programa que possuas as características abaixo:

    Leia os dados de um CPF no formato XXX.YYY.ZZZ-DD;
    Imprima os quatro grupos numéricos, sendo um valor por linha.

Entrada

A entrada consiste vários arquivos de teste e cada um possuindo uma linha com formato XXX.YYY.ZZZ-DD, onde XXX, YYY, ZZZ, DD são números inteiros.

Saída

Para cada arquivo da entrada, tem que ter um arquivo de saída com quatro linhas, e em cada linha um número inteiro de acordo com procedimento 2 descrito no Desafio. Confira o exemplo abaixo:

*/

import java.util.Scanner;
import java.util.Locale;
import java.io.IOException;

public class ClassCpf {

	public static void main(String[] args) throws IOException {
	  
		Scanner leitor = new Scanner(System.in);
		String STR = leitor.next();
		String A = STR.substring(0, 3);
		String B = STR.substring(4, 7);
		String C = STR.substring(8, 11);
		String D = STR.substring(12, 14);
		System.out.println(A);
		System.out.println(B);
		System.out.println(C);
		System.out.println(D);
	}
	
/*
public class Classe{
	public static void main(String[] args) throws IOException {

		Locale.setDefault(new Locale("en", "US"));

		Scanner sc = new Scanner(System.in);
		
		String[] cpf = new String[4]; 

                //continue a solucao

		cpf = sc.nextLine().split(".,-","");
		
    for(int i = 0; i < 4; i++) {

			System.out.printf("%s\n",cpf[i]);
    }

		sc.close();
	}
	*/
}
