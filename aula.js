// let pessoa = { 
//     nome: 'Luis',
//     idade: 23,
//     estaAprovado: true,
//     sobrenome: 'Felipe',
// };

// console.log(pessoa)


//arrays

// let familia = [26, 45, 50, 18];

// console.log(familia[1])
// let i;
// let nomeColega = ["Patrick", 21, "São Paulo"];
// for(i = 0; i < nomeColega.length; i++){
//     console.log(nomeColega[i]);
// }

// let corSite = "Azul";

// function resetaCor(cor, tonalidade) {
//     corSite = cor + tonalidade;
// };

// console.log(corSite);
// resetaCor("verde", " claro");
// console.log(corSite);

// function dizerNome(){
//     console.log('Luis');
// };

// dizerNome();

// function MultiplicarPorDois(valor){
//     return valor * 2;
// };

// console.log(MultiplicarPorDois(5));



//operação ternaria 
// let pontos = 200;
// let tipo = pontos > 100 ? 'premiun' : 'comum';
// console.log(tipo);

// let a = 'vermelho';
// let b = 'azul';
// let c;

// console.log(a);
// console.log(b);
// c = a;
// a = b;
// b = c; 

// console.log(a);

// console.log(b);

// let hora = 16;

// if (hora > 6 && hora < 12){
//     console.log("Bom dia!");
// }else if(hora > 12 && hora < 18){
//     console.log("Boa tarde!");
// }else{
//     console.log("Boa noite!");
// }


// let permissao;

// switch(permissao){

//     case 'comum':
//         console.log("Usuário comum");
//         break;

//     case 'gerente':
//         console.log("Usuário Gerente");
//         break;

//     case 'diretor':
//         console.log("Usuário Diretor");
//         break;

//     default:
//         console.log("Usuário não reconhecido!");
// }

// for(let i=0; i<=5; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

// let i = 5;

// while(i >= 1){
//     if(i % 2 !== 0){
//      console.log(i);
//     }
//     i--;
// }

// let i = 0;

// do {
//     console.log("digitando!", i + 1);
//     i++;
// }while(i < 10)


// const pessoa = {
//     nome: 'Luis',
//     idade: 23
// };

// for(let chave in pessoa){
//     console.log(chave, pessoa[chave]);
// }

// const cores = ['vermelho', 'azul', 'verde'];

// for(let indice in cores){
//     console.log(indice, cores[indice]);
// }

// for (let cor of cores){
//     console.log(cor);
// }
// let numero1 = 105;
// let numero2 = 105;

// let resultado = maiorE(numero1, numero2);
// console.log(resultado);

// function maiorE(valor1, valor2){
//     let r = 0;
//     if(valor1 > valor2){
//         r = valor1;
//     }else{
//         r = valor2;
//     }
//     return r;
// }


// // FizzBuzz teste*****************************************************************
// const resultado = fizzBuzz(15);
// console.log(resultado);

// function fizzBuzz(entrada){
//     if(typeof entrada !== 'number'){
//         return "Não é um número";
//     }

//     if(entrada % 3 === 0 && entrada % 5 === 0){
//         return "FizzBuzz";
//     }else if(entrada % 5 === 0){
//         return "Buzz";
//     }else if(entrada % 3 === 0){
//         return "Fizz";
//     }else if(entrada % 3 > 0 || entrada % 5 > 0){
//         return entrada;
//     }
// }


// medidor de velocidade

// verificarVelocidade(90);

// function verificarVelocidade(velocidade){
//     const vMax = 70;
//     const vPonto = 5;

//     if(velocidade <= vMax)
//         console.log("Ok");
//     else {
//        const pontos = Math.floor(((velocidade - vMax) / vPonto)); //Math.floor() arredonda os valores quebrados, vc tira 70 que é a velocidade maxima e dividi por 5.
//        if(pontos >= 12)
//             console.log('carteira suspensa');
//         else
//             console.log('Pontos', pontos);
//     }
// }


// par ou impar

// exibirTipo(3);

// function exibirTipo(limite){
//     let valor = [limite];
//     for (let i = 0; i <= limite; i++){
//         if (i % 2 === 0)
//             console.log(`${i} PAR`);
//         else
//             console.log(`${i} IMPAR`);
//     }
    
// }

// 1 hora : 59 minutos




