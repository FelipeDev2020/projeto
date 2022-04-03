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

// const filme = {
//     titulo: 'vingadores',
//     ano: 2018,
//     diretor: 'Robin',
//     personagem: 'Thor'
// }

// exibirPropriedades(filme);

// function exibirPropriedades(obj){
//     for (prop in obj)
//         if(typeof obj[prop] === 'string')
//             console.log(prop, obj[prop])
// }

// somar(10);

// function somar(limite){
//     let r = 0;
//     for(let i=1; i<=limite; i++)
//         if(i % 3 === 0)
//             r += i;
//         else if(i % 5 === 0)
//             r += i;
//     console.log(r)
// }

// const array = [70, 70, 80];

// console.log(mediaDoAluno(array));

// function mediaDoAluno(notas){
//     const total = calcularMedia(notas);
//    if (total < 59) return 'F';
//    if (total < 69) return 'D';
//    if (total < 79) return 'C';
//    if (total < 89) return 'B';
//    return 'A'
// }

// function calcularMedia(array){
//     let total = 0;
//     for(let valor in array){
//         total += array[valor];
//     }
//     return  total / array.length ;
// }

// exibirAsteriscos(5);

// function exibirAsteriscos(linhas){
//     // let estrela = ' ';
//     // for(let i=0; i < linhas; i++){
//     //     estrela = estrela + '*';
//     //     console.log(estrela);
//     // }

//     //outra maneira de fazer
//     for(let linha = 1; linha <= linhas; linha++){
//         let padrao = '';
//         for(let i = 0; i < linha; i++){
//             padrao += '*';
//         }
//         console.log(padrao);
//     }
// }


// exibirNumerosPrimos(15);

// function exibirNumerosPrimos(limite){
//     for(let numero = 2; numero <= limite; numero++){
//         let primo = true;

//         for(let divisor = 2; divisor < numero; divisor++){
//             if(numero % divisor === 0){
//                 primo = false;
//                 break;
//             }
//         }

//         if(primo) console.log(numero);
//     }
// }


// const celular = {
//     marcaCelular: 'asus',
//     tamanhoTela: {
//         vertical: 155,
//         horizontal: 75
//     },
//     capacidadeBateria: 5000,
//     ligar: function() {
//         console.log("Fazendo ligação...");
//     }
// }

// //* **Factory Function  (Função de Fábrica) */
// function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
//     return {
//         marcaCelular,
//         tamanhoTela,
//         capacidadeBateria,
//         ligar() {
//             console.log("Fazendo ligação...");
//         }
//     }
// }

// const celular1 = criarCelular('Zenfone', 5.5, 6000);

// console.log(celular1);


// function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
//     this.marcaCelular = marcaCelular,
//     this.tamanhoTela = tamanhoTela,
//     this.capacidadeBateria = capacidadeBateria,
//     this.ligar = function() {
//         console.log("Fazendo Ligação...");
//     }
// }

// const celular = new Celular('asus', 5.5, 5000);

// console.log(celular);


// function Historia(nome, hist, perigocidade){
//     this.nome = nome,
//     this.hist = hist,
//     this.perigocidade = perigocidade,
//     this.mostrar  = function(){
//         console.log(`Titulo: ${this.nome} Nivel: ${this.perigocidade}`);
//     }
// }


// const historia = new Historia('Sleeman', 'Monstro terrivel que persegue crianças na rua', 'altamente perigoso');
// console.log(historia);


// const mouse = {
//     cor: 'red',
//     marcar: 'dazz'
// }

// mouse.velocidade = 5000;
// mouse.trocarDpi = function(){
//     console.log('mudando DPI');
// }

// delete mouse.velocidade;
// delete mouse.trocarDpi;
// console.log(mouse);


// const celular = {
//     marcaCelular: 'asus',
//     tamanhoTela: {
//         vertical: 155,
//         horizontal: 75
//     },
//     ligar: function (){
//         console.log('Fazendo Ligação...');
//     }
// }

// const novoObjeto = Object.assign({
//     bateria: 5000
// }, celular);
// console.log(novoObjeto)

// let objeto2 = [5];

// objeto2[1] = {...celular};
// objeto2[2] = {...celular};
// console.log(objeto2[1], objeto2[2]);

numero = 5
for(let i=0; i <= 10; i++){
    console.log(`${numero} X ${i} = ${(numero * i)}`)
}





