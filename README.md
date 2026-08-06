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
| `apresentacao/` | A apresentação — 27 slides, com cronômetro, notas do apresentador e mapa de slides. Versão `.pptx` de backup. |
| `plano-de-aula/` | O plano de aula em PDF (A4, 4 páginas) — **documento obrigatório**, entregue à banca antes da exposição. |
| `codigo/` | O projeto Mural de Vagas: o algoritmo demonstrado ao vivo na aula. |
| `guia/` | Guia de execução: roteiro minuto a minuto, checklists e preparação da entrevista de tutoria. |

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
