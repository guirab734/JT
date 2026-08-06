# Jovem Tech 2026 — Processo Seletivo

Material de Guilherme Santos Rabelo para as duas etapas de avaliação do
Projeto Jovem Tech (INOVASE — Edital de Seleção Pública nº 01/2026).

## As duas avaliações

| | Instrutoria | Tutoria |
| --- | --- | --- |
| **Data** | 7 de agosto de 2026 (sexta) | 8 de agosto de 2026 (sábado) |
| **Horário** | 20h15 – 20h55 | 12h05 – 12h35 |
| **Formato** | Presencial — CAJU HUB | On-line — Google Meet |
| **Banca** | Banca Avaliadora 2 | Entrevista |
| **Trilha** | Básica | Básica |
| **Tema** | Lógica de Programação & Versionamento | — |
| **Pontos** | 30 (plano de aula) + 60 (aula prática) | 100 |

O tema foi sorteado em 03/08/2026: **Lógica de Programação & Versionamento
(Algoritmos JS, Estruturas de Dados, Git/GitHub, Abertura de Projetos)**.

## O que tem aqui

| Pasta | Conteúdo |
| --- | --- |
| `index.html` | O site da trilha — módulos, encontros, materiais e a turma. Publicado em `jovemtech.guirab.com.br`. |
| `apresentacao/` | A apresentação — 27 slides, com cronômetro, notas do apresentador e mapa de slides. Versão `.pptx` de backup. |
| `plano-de-aula/` | O plano de aula em PDF (A4, 4 páginas) — **documento obrigatório**, entregue à banca antes da exposição. |
| `codigo/` | O projeto Mural de Vagas: o algoritmo demonstrado ao vivo na aula. |
| `guia/` | Guia de execução: roteiro minuto a minuto, checklists e preparação da entrevista de tutoria. |

## Publicar em jovemtech.guirab.com.br

O site é servido da raiz do repositório, então todo o material já publicado
vira anexo do site sem duplicação: `/apresentacao/`, `/guia/`, `/codigo/`,
`/plano-de-aula/`.

**1. No provedor de DNS do `guirab.com.br`**, crie um registro:

```
Tipo    Nome         Valor
CNAME   jovemtech    guirab734.github.io.
```

**2. No GitHub**, em `Settings → Pages` do repositório `guirab734/JT`:
- *Source*: `Deploy from a branch`
- *Branch*: `main` (ou a branch que estiver usando) · pasta `/ (root)`
- *Custom domain*: `jovemtech.guirab.com.br` → marque **Enforce HTTPS**

O arquivo `CNAME` na raiz já está com o domínio, e o `.nojekyll` impede o
Jekyll de ignorar arquivos. A propagação do DNS leva de alguns minutos a
algumas horas; o certificado HTTPS é emitido pelo GitHub logo depois.

### A aula demonstrativa

O bloco da aula demonstrativa para a banca está marcado no `index.html` com um
comentário `AULA DEMONSTRATIVA`. Para removê-lo depois da seleção, apague a
`<div class="aula priv">` inteira — é um bloco só.

## Como usar

**A apresentação** — abra `apresentacao/index.html` no navegador e aperte `F`.

| Tecla | Ação |
| --- | --- |
| `→` / espaço | avança |
| `←` | volta |
| `T` | inicia/pausa o cronômetro |
| `R` | zera o cronômetro |
| `N` | notas do apresentador |
| `O` | mapa de slides |
| `F` | tela cheia |

O cronômetro mostra se você está adiantado ou atrasado em relação ao
orçamento de tempo de cada slide. Inicie-o no começo da **aula**, não do plano.

**O código:**

```bash
cd codigo
node gerar-dados.js   # cria dados.json com 120 vagas
node vagas.js         # mostra o Top 3
```

## Estrutura do tempo (Art. 40 do Edital)

A janela é de 40 minutos, mas apenas 20 são de aula:

```
~5 min preparação  │  5 min plano de aula  │  20 min AULA  │  10 min arguição
```

## Regra que elimina

Art. 35, §8º — **não entregar o plano de aula no início da apresentação resulta em nota zero
no plano**, e o Art. 38 elimina quem obtiver menos de 15 dos 30 pontos. Imprima 3 cópias
de `plano-de-aula/Plano-de-Aula-Guilherme-Santos-Rabelo.pdf` e entregue antes de falar.
