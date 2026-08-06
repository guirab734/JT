/*
 * Mural de Vagas — Projeto Jovem Tech, Trilha Básica
 * Módulo: Lógica de Programação & Versionamento
 *
 * Problema gerador:
 *   "Como transformar uma lista bagunçada de 120 vagas na resposta
 *    'estas aqui são pra mim'?"
 *
 * Execute com:  node vagas.js
 */

const vagas = require("./dados.json");

// ---------------------------------------------------------------
// 1. VARIÁVEIS
//    Uma variável é um nome para um valor guardado.
// ---------------------------------------------------------------
const meuNivel = "junior";
const salarioMinimo = 2000;

// ---------------------------------------------------------------
// 2. UMA LISTA VAZIA
//    É aqui que vamos guardar as vagas que servem.
// ---------------------------------------------------------------
const minhasVagas = [];

// ---------------------------------------------------------------
// 3. REPETIÇÃO + CONDICIONAL
//    O for passa por todas as vagas, uma de cada vez.
//    O if decide se aquela vaga entra na lista.
// ---------------------------------------------------------------
for (let i = 0; i < vagas.length; i++) {
  const vaga = vagas[i];

  if (vaga.nivel === meuNivel && vaga.salario >= salarioMinimo) {
    minhasVagas.push(vaga);
  }
}

// ---------------------------------------------------------------
// 4. MOSTRAR O RESULTADO
// ---------------------------------------------------------------
console.log("");
console.log("De " + vagas.length + " vagas, " + minhasVagas.length + " sao pra voce:");
console.log("");

for (let i = 0; i < minhasVagas.length; i++) {
  const vaga = minhasVagas[i];
  console.log("  " + vaga.titulo + " - " + vaga.empresa + " - R$ " + vaga.salario);
}

console.log("");
