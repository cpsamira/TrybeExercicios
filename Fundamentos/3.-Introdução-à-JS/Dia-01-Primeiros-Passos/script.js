let a = 19;
let b = 7;
let c = 13;

console.log('soma: ' + (a+b));
console.log('subtração: ' + (a-b));
console.log('Multiplicação: ' + (a*b));
console.log('Divisão: ' + (a/b));
console.log('Módulo: ' + (a%b));

// 2- Utilize if/else para escrever um código que retorne o maior de dois números.

if (a > b) {
  console.log("'a' é maior que 'b'");
} else {
  console.log("'a' não é maior que 'b'");
}

// 3- Utilize if/else para escrever um código que retorne o maior de três números.

if (a > b && a > c) {
  console.log('O maior número é: ' + a + ' (a)');
} else if (b > a && b > c){
  console.log('O maior número é: ' + b + ' (b)');
} else {
  console.log('O maior número é: ' + c + ' (c)');
};

// 4- Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo.

if (a > 0) {
  console.log('positive');
} else if (a < 0) {
  console.log('negative');
} else {
  console.log('zero');
}

// 5- três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

let angleA = 65;
let angleB = 100;
let angleC = 15;

let sumOfAngles = angleA + angleB + angleC;

let allAnglesArePositives = angleA > 0 && angleB > 0 && angleC > 0;

if (allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log('Erro: ângulo inválido!');
}

let chessPiece = 'bispo';

switch (chessPiece.toLowerCase()){
  case 'rei':
    console.log('Rei -> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo -> Diagonal.');
    break;
  case 'Rainha':
    console.log('Rainha -> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log('Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.');
    break
  default:
    console.log('Erro, peça inválida!');
};

// 7- Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras:

let grade = 76;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}

//três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.

let first = 1;
let second = 3;
let third = 5;

let isEven = false

if ((first % 2 === 0 || second % 2 === 0 || third % 2 === 0)) {
  isEven = true;
};
console.log(isEven);

//9 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código deve retornar false.

let Na = 3;
let Nb = 7;
let Nc = 9;

let isOdd = false;

if ((Na % 2 !== 0 || Nb % 2 !== 0 || Nc % 2 !== 0)) {
  isOdd = true;
};
console.log(isOdd);

//10 - Utilize if/else para escrever um código que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, o código deve calcular o lucro (ou seja, o valor de venda menos o custo do produto) da empresa ao vender mil produtos.


let costOfProduct = 1;
let saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  let totalCostOfProduct = costOfProduct * 1.2;
  let totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos!");
};

