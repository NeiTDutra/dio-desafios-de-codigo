// Jogo da força

const palavra = 'oceano';// chama a função criaCaixaDeLetra(palavra) ao receber valor por input
let letra = 'z';// chama a função testtaLetra(letra) ao receber  valor por input
let res = '';
var count = 1;

function criaCaixaDeLetra(p) {
    //let p = document.getElementById('in_word').value;
    for(let w = 0; w < p.length; w++) {
        
        //document.getElementById('palavra').style.display = 'none';
        //document.getElementById('letra').style.display = 'block';
        document.getElementById('div_word').innerHTML = '<div class="letter" id="div_l_'+w+'"></div>';
        //var l_digitada = [];
        //return l_digitada;
    }
    
}

/*
function testaLetra(letra) {
    let testa_digito = l_digitada.split('').map( (l) => { 
        if(letra === l) {
            alert('Esta letra já foi digitada!!');
            return;
        } 
        else {
            l_digitada += letra;
            next();
        }
    });
    return testa_digito;
}
*/

let teste = palavra.split('').filter( (w) => { return letra === w });

if(teste != '') {
    for(let i = 0; i < palavra.length; i++) {
        if(letra === palavra[i]){
            res += letra;
            //document.getElementById('div_l_'+i).innerHtml = '<h3>'+letra.toUpperCase()+'</h3>';
        }else{
            res += ' _ ';
        }
    }
    console.log(res);
}
else{
    count ++;
/*
    document.getElementById('forca'+count).style.display = 'block';
    if(count == 7) {
        alert('Acabou o jogo, o boneco está na forca!!!');
    }
*/
    let l = letra.toUpperCase();
    console.log(`letra ${l} não está na palavra - ${count} erro(s)`);
}

