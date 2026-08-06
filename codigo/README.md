# Mural de Vagas

Projeto da aula de **Lógica de Programação & Versionamento** — Trilha Básica, Projeto Jovem Tech.

## O problema

Você abre um site de vagas e encontra 120 anúncios. Quais são realmente para você?
Ler os 120 na mão não escala. Este projeto ensina o computador a ler por nós.

> **Problema gerador:** como transformar uma lista bagunçada de 120 vagas na resposta
> "estas aqui são pra mim" — e construir isso em squad, sem ninguém sobrescrever
> o trabalho do outro?

## Como rodar

```bash
node gerar-dados.js   # cria o dados.json com as 120 vagas
node vagas.js         # mostra as vagas que servem pra você
```

Saída esperada:

```
De 120 vagas, 24 sao pra voce:

  Assistente de Dados Junior - Farol Tecnologia - R$ 2350
  Dev Full-Stack Junior - Farol Tecnologia - R$ 2700
  Dev Full-Stack Junior - Atalaia Systems - R$ 2150
  ...
```

## O que tem dentro

| Arquivo | O que faz |
| --- | --- |
| `gerar-dados.js` | Cria as 120 vagas fictícias. Usa semente fixa, então o resultado é sempre o mesmo. |
| `dados.json` | A lista de 120 vagas — nossa estrutura de dados: um **array de objetos**. Cada vaga tem só 4 campos. |
| `vagas.js` | A lógica: percorre as 120 vagas e guarda as que servem. |

## Os conceitos, na ordem em que aparecem

1. **Variáveis e tipos** — `string` (texto, com aspas) e `number` (número, sem aspas)
2. **Objeto** — vários valores que descrevem a mesma coisa
3. **Array de objetos** — a estrutura de dados mais comum da web
4. **Condicional** — `if`, `else`, `===`, `>=` e `&&`: a pergunta que o código faz
5. **Repetição** — o `for` percorrendo a lista item por item
6. **Funções** — dar nome a um pedaço de código para reusar quantas vezes quiser

O código usa só `if`, `for`, `push` e uma função com nome. Nada de `filter`, `map` ou
arrow function: esses entram no encontro 06, depois que o aluno já entendeu o `for` na mão.

## Sua entrega

- [ ] Repositório público no GitHub com este `README`
- [ ] O algoritmo rodando e mostrando as vagas que servem
- [ ] No mínimo 3 commits com mensagem descritiva
- [ ] Uma branch por integrante do squad + um Pull Request revisado por um colega

Mensagem de commit ruim: `ajustes`
Mensagem de commit boa: `feat: filtra vagas por nível júnior`
