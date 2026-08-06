# Mural de Vagas

Projeto da aula de **Lógica de Programação & Versionamento** — Trilha Básica, Projeto Jovem Tech.

## O problema

Você abre um site de vagas e encontra 120 anúncios. Quais são realmente para você?
Ler os 120 na mão não escala. Este projeto ensina o computador a ler por nós.

> **Problema gerador:** como transformar uma lista bagunçada de 120 vagas em uma resposta
> curta — "estas 3 são pra você" — e construir isso em squad, sem ninguém sobrescrever
> o trabalho do outro?

## Como rodar

```bash
node gerar-dados.js   # cria o dados.json com as 120 vagas
node vagas.js         # mostra as 3 melhores vagas para o seu perfil
```

Saída esperada:

```
De 120 vagas, 10 combinam com você.
Top 3 por salário:

  1. Dev Front-End Junior · Sergipe Log............ R$ 2.600,00
  2. Analista de QA Junior · Tech Aracaju.......... R$ 2.450,00
  3. Suporte Web Junior · Orla Digital............. R$ 2.400,00
```

## O que tem dentro

| Arquivo | O que faz |
| --- | --- |
| `gerar-dados.js` | Cria as 120 vagas fictícias. Usa semente fixa, então o resultado é sempre o mesmo. |
| `dados.json` | A lista de vagas — nossa estrutura de dados: um **array de objetos**. |
| `vagas.js` | A lógica: filtra, ordena e corta as 3 primeiras. |

## Os conceitos, na ordem em que aparecem

1. **Variáveis e tipos** — `string`, `number`, `boolean`, `array`
2. **Objeto** — vários valores que descrevem a mesma coisa
3. **Array de objetos** — a estrutura de dados mais comum da web
4. **Condicional** — `===`, `&&`, `||`: a pergunta que o código faz
5. **Repetição** — o `for` percorrendo a lista item por item
6. **Funções** — dar nome a uma ideia, e a versão curta com `filter`/`sort`/`slice`

O `vagas.js` traz as duas versões da mesma solução de propósito: `filtrarComFor()` é a que
o aluno escreve primeiro, com o índice à vista; `top3ParaMim()` é a versão madura. A segunda
só faz sentido depois da primeira.

## Sua entrega

- [ ] Repositório público no GitHub com este `README`
- [ ] O algoritmo rodando e devolvendo o Top 3
- [ ] No mínimo 3 commits com mensagem descritiva
- [ ] Uma branch por integrante do squad + um Pull Request revisado por um colega

Mensagem de commit ruim: `ajustes`
Mensagem de commit boa: `feat: filtra vagas por nível júnior`
