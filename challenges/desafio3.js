// Retorne o lanche mais vendido e mostre apenas o nome e quantidade de lanches vendidos.

db.produtos.find({}, { nome: 1, vendidos: 1, _id: 0 }).sort({ vendidos: -1 }).limit(1);