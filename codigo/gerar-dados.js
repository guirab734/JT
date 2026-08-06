/*
 * Gera o arquivo dados.json com 120 vagas fictícias.
 * O instrutor entrega o dados.json pronto aos alunos; este script existe
 * para regerar o conjunto quando necessário.
 *
 * Execute com:  node gerar-dados.js
 */
const fs = require("fs");

const CARGOS = [
  "Dev Front-End", "Dev Back-End", "Suporte Web", "Assistente de Dados",
  "Analista de QA", "Dev Mobile", "Analista de Infra", "Designer de Produto",
  "Analista de Sistemas", "Dev Full-Stack",
];
const EMPRESAS = [
  "Tech Aracaju", "Sergipe Log", "Orla Digital", "Atalaia Systems",
  "Caju Hub Labs", "Rio Sergipe Dados", "Aracaju Cloud", "Farol Tecnologia",
  "Sertao Digital", "Vale Software",
];
const NIVEIS = ["estagio", "junior", "pleno", "senior"];
const FAIXA = {
  estagio: [800, 1400],
  junior: [1600, 2800],
  pleno: [3500, 6000],
  senior: [7000, 15000],
};

// Gerador com semente fixa: o dataset é sempre o mesmo, para que a aula
// seja reproduzível e os números batam com os slides.
let semente = 20261029;
function rand() {
  semente = (semente * 1103515245 + 12345) % 2147483648;
  return semente / 2147483648;
}
const escolhe = (lista) => lista[Math.floor(rand() * lista.length)];

const vagas = [];
for (let i = 0; i < 120; i++) {
  const nivel = escolhe(NIVEIS);
  const [min, max] = FAIXA[nivel];
  const cargo = escolhe(CARGOS);

  // Cada vaga tem só quatro campos, todos de tipos simples.
  vagas.push({
    titulo: cargo + " " + nivel.charAt(0).toUpperCase() + nivel.slice(1),
    empresa: escolhe(EMPRESAS),
    nivel: nivel,
    salario: Math.round((min + rand() * (max - min)) / 50) * 50,
  });
}

fs.writeFileSync(__dirname + "/dados.json", JSON.stringify(vagas, null, 2));
console.log("dados.json gerado com " + vagas.length + " vagas.");
