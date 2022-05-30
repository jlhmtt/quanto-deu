//variaveis

let total = document.getElementById("total");
let totalValor = total.value;

let pessoasBotaoMenos = document.getElementById("botaoPessoasMenos");
let pessoasBotaoMais = document.getElementById("botaoPessoasMais");
let pessoas = document.getElementById("pessoas");

let taxaBotaoMenos = document.getElementById("botaoTaxaMenos");
let taxaBotaoMais = document.getElementById("botaoTaxaMais");
let taxa = document.getElementById("taxa");

let botaoCalcular = document.getElementById("botaoCalcular");

// formatar e adicionar um R$ no inicio do total (tentar de novo depois)

// function adicionarR$() {
//   if (total.value.contains("R$")) {
//     return;
//   } else {
//     total.addEventListener("input", function () {
//       total.value = `R$${total.value}`;
//     });
//   }
// }

// let formatador = new Intl.NumberFormat();

// total.addEventListener("input", function () {
//   formatador.format(totalValor);
// });

// adicionar um % no fim da taxa de serviço

// fazer os botoes mudarem o que ta escrito no input

pessoasBotaoMais.onclick = function () {
  pessoas.stepUp(1);
};

pessoasBotaoMenos.onclick = function () {
  pessoas.stepDown(1);
};

taxaBotaoMais.onclick = function () {
  taxa.stepUp(1);
};

taxaBotaoMenos.onclick = function () {
  taxa.stepDown(1);
};

// calcular -> pegar o total, adicionar a taxa e dividir pelo numero de pessoas -> mandar isso pra pagina de resultado
