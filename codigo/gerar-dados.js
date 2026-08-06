/*
 * Gera o arquivo dados.json com 120 vagas fictícias.
 * Uso pedagógico: o instrutor entrega o dados.json pronto aos alunos;
 * este script existe para regerar o conjunto quando necessário.
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
  "Tech Aracaju", "Sergipe Log", "Orla Digital", "Vale do Cotinguiba Software",
  "Atalaia Systems", "Caju Hub Labs", "Rio Sergipe Dados", "Aracaju Cloud",
  "Farol Tecnologia", "Sertão Digital",
];
const NIVEIS = ["estagio", "junior", "pleno", "senior"];
const SKILLS = ["html", "css", "js", "sql", "react", "node", "python", "docker"];

// Gerador pseudoaleatório com semente fixa: o dataset é sempre o mesmo,
// para que a aula seja reproduzível e os números batam com o slide.
let semente = 20261029;
function rand() {
  semente = (semente * 1103515245 + 12345) % 2147483648;
  return semente / 2147483648;
}
const escolhe = (lista) => lista[Math.floor(rand() * lista.length)];

const FAIXA = { estagio: [800, 1400], junior: [1600, 2600], pleno: [3500, 6000], senior: [7000, 15000] };

const vagas = [];
for (let i = 0; i < 120; i++) {
  const nivel = escolhe(NIVEIS);
  const [min, max] = FAIXA[nivel];

  // júnior pede de 1 a 3 requisitos; níveis acima pedem mais
  const qtd = nivel === "estagio" ? 1 : nivel === "junior" ? 1 + Math.floor(rand() * 3) : 3 + Math.floor(rand() * 4);
  const requisitos = [];
  while (requisitos.length < qtd) {
    const s = escolhe(SKILLS);
    if (!requisitos.includes(s)) requisitos.push(s);
  }

  vagas.push({
    titulo: `${escolhe(CARGOS)} ${nivel.charAt(0).toUpperCase() + nivel.slice(1)}`,
    empresa: escolhe(EMPRESAS),
    nivel,
    salario: Math.round((min + rand() * (max - min)) / 50) * 50,
    remoto: rand() > 0.5,
    requisitos,
  });
}

fs.writeFileSync(__dirname + "/dados.json", JSON.stringify(vagas, null, 2));
console.log(`dados.json gerado com ${vagas.length} vagas.`);
