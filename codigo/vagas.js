/*
 * Mural de Vagas — Projeto Jovem Tech, Trilha Básica
 * Módulo: Lógica de Programação & Versionamento
 *
 * Problema gerador:
 *   "Como transformar uma lista bagunçada de 120 vagas em uma resposta
 *    curta — 'estas 3 são pra você'?"
 *
 * Execute com:  node vagas.js
 */

const vagas = require("./dados.json");

// ---------------------------------------------------------------
// 1. VARIÁVEIS E TIPOS
//    Cada vaga é um OBJETO: vários valores que descrevem a mesma coisa.
// ---------------------------------------------------------------
const minhasSkills = ["html", "css", "js"];

// ---------------------------------------------------------------
// 2. CONDICIONAL
//    Uma pergunta que só responde true ou false.
// ---------------------------------------------------------------
function serveParaMim(vaga, skills) {
  const nivelOk = vaga.nivel === "junior";
  const temTudo = vaga.requisitos.every((req) => skills.includes(req));
  return nivelOk && temTudo;
}

// ---------------------------------------------------------------
// 3. REPETIÇÃO — a versão que o aluno escreve primeiro.
//    Percorre a lista item por item, com o índice à vista.
// ---------------------------------------------------------------
function filtrarComFor(vagas, skills) {
  const encontradas = [];
  for (let i = 0; i < vagas.length; i++) {
    if (serveParaMim(vagas[i], skills)) {
      encontradas.push(vagas[i]);
    }
  }
  return encontradas;
}

// ---------------------------------------------------------------
// 4. FUNÇÕES — a versão madura: o mesmo for, escrito curto.
//    Só entra depois que o aluno entendeu o de cima.
// ---------------------------------------------------------------
function top3ParaMim(vagas, skills) {
  return vagas
    .filter((v) => serveParaMim(v, skills))
    .sort((a, b) => b.salario - a.salario)
    .slice(0, 3);
}

// ---------------------------------------------------------------
// 5. SAÍDA
// ---------------------------------------------------------------
function reais(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

const compativeis = filtrarComFor(vagas, minhasSkills);
const top3 = top3ParaMim(vagas, minhasSkills);

console.log(`\nDe ${vagas.length} vagas, ${compativeis.length} combinam com você.`);
console.log("Top 3 por salário:\n");

top3.forEach((vaga, i) => {
  const linha = `${vaga.titulo} · ${vaga.empresa}`.padEnd(46, ".");
  console.log(`  ${i + 1}. ${linha} ${reais(vaga.salario)}`);
});

console.log("");
