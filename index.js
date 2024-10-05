const prompt = require('prompt-sync')();

let nome = prompt("Qual o nome do herói ou, para terminar, tecle a palavra: fim  ? ");
let xp = parseInt(prompt("Qual o xp do herói? (Valor inteiro) "))
do {
  if (nome === 'fim') {
    break;
  }
  console.log('\n');
  
  if (xp <= 1000) {
    console.log(`O Herói de nome **{${nome}}** está no nível de **{Ferro}**`);
  } else if (xp <= 2000) {
    console.log(`O Herói de nome **{${nome}}** está no nível de **{Bronze}**`);
  } else if (xp <= 5000) {
    console.log(`O Herói de nome **{${nome}}** está no nível de **{Prata}**`);
  } else if (xp <= 7000) {
    console.log(`O Herói de nome **{${nome}}** está no nível de **{Ouro}**`);
  } else if (xp <= 8000) {
    console.log(`O Herói de nome **{${nome}}** está no nível de **{Platina}**`);
  } else if (xp <= 9000) {
    console.log(`O Herói de nome **{${nome}}** está no nível de **{Ascendente}**`);
  } else if (xp <= 10000) {
    console.log(`O Herói de nome **{${nome}}** está no nível de **{Imortal}**`);
  } else {
    console.log(`O Herói de nome **{${nome}}** está no nível de **{Radiante}**`);
  }
  console.log('\n');
  
  nome = prompt("Qual o nome do herói ou, para terminar, tecle a palavra: fim  ? ");
  if (nome === 'fim') {
    break;
  }
  xp = parseInt(prompt("Qual o xp do herói? (Valor inteiro) "))
} while (nome !== 'fim');

console.log("Fim");
