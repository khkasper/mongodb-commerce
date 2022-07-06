# Habilidades

Buscar documentos no banco
Usar filtros na busca
Deletar documentos conforme filtro
Contar documentos compreendidos nos filtros pedidos
Inserir documentos no banco
Utilizar o método `updateOne()` e `updateMany()`
Utilizar os operadores `$set`, `$mul`, `$inc`, `$min`, `$max` e `$currentDate`
Renomear campos e remover campos
Incorporar dados aos documentos através de arrays
Utilizar os operadores `$pop`, `$pull` e `$push`
Utilizar o operador `$addToSet`
Utilizar os operadores `$each`, `$slice` e `$sort`
Utilizar o operador `$all` para filtrar documentos
Utilizar o operador `$elemMatch` para filtrar documentos
Utilizar o operador `$size` para filtrar documentos pelo tamanho de arrays
Utilizar o operador `$expr` para criar expressões de agregação
Utilizar expressões regulares e o operador `$regex` para buscar documentos
Utilizar o operador `$mod`

# Requisitos do projeto

## Obrigatórios

- [x] 1 - Retorne a quantidade de documentos inseridos na coleção `produtos`.

- [x] 2 - Ordene a coleção `produtos` pela quantidade de lanches vendidos em ordem crescente e mostre apenas o nome e quantidade de lanches vendidos.

- [x] 3 - Retorne o lanche mais vendido e mostre apenas o nome e quantidade de lanches vendidos.

- [x] 4 - Retorne os lanches que tiveram vendas maiores que `50` e menores que `100`. Mostre apenas o nome e quantidade de lanches vendidos. Ordene por quantidade de lanches vendidos em ordem crescente.

- [x] 5 - Retorne o `nome`, as `curtidas` e `vendidos` dos lanches que tiveram quantidade de `curtidas` igual a `36` ou tenham a quantidade de vendas igual a `85`.

- [x] 6 - Retorne o `nome` e `curtidas` dos lanches que tiveram curtidas maiores que `10` e menores que `100`.

- [x] 7 - Retorne o `nome` e `vendidos` dos lanches que tenham sido `vendidos` uma quantidade diferente de `50` e que o campo `tags` não exista.

- [x] 8 - Delete os lanches que tenham menos de `50` `curtidas` e retorne o `nome` dos lanches que restaram no banco.

- [x] 9 - Retorne o `nome` de todos os lanches que possuam `calorias` abaixo de `500`.

- [x] 10 - Retorne o `nome` de todos os lanches que tenham o percentual de `proteínas` maior ou igual a `30` e menor ou igual a `40`.

- [x] 11 - Retorne o `nome` do produto, a quantidade de `curtidas` e quantos itens foram `vendidos` dos produtos que não sejam iguais a `Big Mac` e `McChicken`.

- [x] 12 - Adicione `ketchup` aos `ingredientes` para todos os sanduíches menos o `McChicken`, garantindo que não haja duplicidade nos `ingredientes`.

- [x] 13 - Inclua o campo `criadoPor` em todos os documentos, colocando `Ronald McDonald` no valor desse campo.

- [x] 14 - Crie uma query que retorne todos os lanches que possuem *picles* em seus ingredientes e mostre apenas os `3` primeiros itens contidos no array `valoresNutricionais`.

- [x] 15 - Adicione o campo `avaliacao` em todos os documentos da coleção e efetue alterações nesse campo.

- [x] 16 - Adicione o campo `ultimaModificacao` com a data corrente somente no sanduíche `Big Mac`.

- [x] 17 - Retorne a quantidade total de produtos em uma nova coleção chamada `resumoProdutos`.

- [x] 18 - Inclua `bacon` no final da lista de `ingredientes` dos sanduíches `Big Mac` e `Quarteirão com Queijo`.

- [x] 19 - Remova o item `cebola` de todos os sanduíches.

- [x] 20 - Remova o **primeiro** `ingrediente` do sanduíche `Quarteirão com Queijo`.

- [x] 21 - Remova o **último** `ingrediente` do sanduíche `Cheddar McMelt`.

- [x] 22 - Adicione a quantidade de vendas dos sanduíches por dia da semana.

- [x] 23 - Insira os elementos `combo` e `tasty` no _array_ `tags` de todos os sanduíches e aproveite para deixar os elementos em ordem alfabética ascendente.

- [x] 24 - Ordene em todos os documentos os elementos do _array_ `valoresNutricionais` pelo campo `percentual` de forma descendente.

- [x] 25 - Adicione o elemento `muito sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior ou igual a `40`.

- [x] 26 - Adicione o elemento `contém sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior do que `20` e menor do que `40`.

- [x] 27 - Conte quantos produtos contêm `Mc` no nome, sem considerar letras maiúsculas ou minúsculas.

- [x] 28 - Conte quantos produtos têm `4` ingredientes.

- [x] 29 - Renomeie o campo `descricao` para `descricaoSite` em todos os documentos.

- [x] 30 - Remova o campo `curtidas` do item `Big Mac`.

- [x] 31 - Retorne o `nome` dos sanduíches em que o número de `curtidas` é maior que o número de sanduíches `vendidos`.

- [x] 32 - Retorne o `nome` e a quantidade de vendas (`vendidos`) dos sanduíches em que o número de vendas é múltiplo de `5`.
