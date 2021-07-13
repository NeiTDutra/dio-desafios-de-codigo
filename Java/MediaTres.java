/*


Leia quatro números (N1, N2, N3, N4), cada um deles com uma casa decimal, correspondente às quatro notas de um aluno. Calcule a média com pesos 2, 3, 4 e 1, respectivamente, para cada uma destas notas e mostre esta média acompanhada pela mensagem "Media: ". Se esta média for maior ou igual a 7.0, imprima a mensagem "Aluno aprovado.". Se a média calculada for inferior a 5.0, imprima a mensagem "Aluno reprovado.". Se a média calculada for um valor entre 5.0 e 6.9, inclusive estas, o programa deve imprimir a mensagem "Aluno em exame.".

No caso do aluno estar em exame, leia um valor correspondente à nota do exame obtida pelo aluno. Imprima então a mensagem "Nota do exame: " acompanhada pela nota digitada. Recalcule a média (some a pontuação do exame com a média anteriormente calculada e divida por 2). e imprima a mensagem "Aluno aprovado." (caso a média final seja 5.0 ou mais ) ou "Aluno reprovado.", (caso a média tenha ficado 4.9 ou menos). Para estes dois casos (aprovado ou reprovado após ter pego exame) apresente na última linha uma mensagem "Media final: " seguido da média final para esse aluno.

Entrada

A entrada contém quatro números de ponto flutuante correspendentes as notas dos alunos.

Saída

Todas as respostas devem ser apresentadas com uma casa decimal. As mensagens devem ser impressas conforme a descrição do problema. Não esqueça de imprimir o enter após o final de cada linha, caso contrário obterá "Presentation Error"
*/
import java.io.IOException;
import java.util.Locale;
import java.util.Scanner;
import java.text.DecimalFormat;

// Minha implementação
/*
public class Desafio{

	public static void main(String[] args)  throws IOException {
	  
		Scanner sc = new Scanner(System.in);
		sc.useLocale(Locale.ENGLISH);
		Locale.setDefault(new Locale("en", "US"));
		DecimalFormat df = new DecimalFormat("0.0");
		
		float n1,n2,n3,n4,media,emexame,emexamefinal;
		
		n1 = sc.nextFloat();
		n2 = sc.nextFloat();
		n3 = sc.nextFloat();
		n4 = sc.nextFloat();

		media = ((n1*2) + (n2*3) + (n3*4) + n4) / 10;
		
		System.out.printf("Media: "+ df.format(media)+"\n");
		//continue a solucao de acordo com o enunciado
		if ( media > 7.0 ){
		  
			System.out.printf("Aluno aprovado.\n");
		} 
    else if(!df.format(media).equals("6.9") && media > 6.9 && media < 7) {
    } 
		else if ( media >= 5.0 && media <= 6.9 ){
		  
			System.out.printf("Aluno em exame.\n");
			emexame = sc.nextFloat();
			System.out.printf("Nota do exame: %.1f\n", emexame);
			
			emexamefinal = ( media + emexame ) / 2;
			
			if( emexamefinal >= 5.0 ){
			  
				System.out.printf("Aluno aprovado.\n");
				System.out.printf("Media final: %.1f\n", emexamefinal);
			}
			else{
			  
				System.out.printf("Aluno reprovado\n");
				System.out.printf("Media final: %.1f\n", emexamefinal);
			}
		}
		else{
		  
			System.out.printf("Aluno reprovado\n");
			System.out.printf("Media final: %.1f\n", media);
		}

		sc.close();
	}
}
*/

// Implementação https://discord.com/channels/@me/864251427991322685
public class Desafio {

    public static void main(String[] args)  throws IOException {
        Scanner sc = new Scanner(System.in);
        DecimalFormat decimalFormat = new DecimalFormat("0.0");

        double n1, n2, n3, n4, media, notaDoExame, notaFinalDoExame;

        n1 = sc.nextDouble();
        n2 = sc.nextDouble();
        n3 = sc.nextDouble();
        n4 = sc.nextDouble();

        media = ((n1*2) + (n2*3) + (n3*4) + n4) / 10;
        System.out.println("Media: " + decimalFormat.format(media));
        if (media > 7) {
            System.out.println("Aluno aprovado.");
        } 
        else if(!decimalFormat.format(media).equals("6.9") && media > 6.9 && media < 7) {
        } 
        else if (media >= 5) {
            System.out.println("Aluno em exame.");
            notaDoExame = sc.nextFloat();
            System.out.println("Nota do exame: " + decimalFormat.format(notaDoExame));
            media = (media + notaDoExame) / 2;
            if (media >= 5) {
                System.out.println("Aluno aprovado.");
            } 
            else {
                System.out.println("Aluno reprovado");
            }
            System.out.println("Media final: " + decimalFormat.format(media));
        } 
        else {
            System.out.println("Aluno reprovado.");
        }
    }
}
