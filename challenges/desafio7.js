// Retorne o nome e vendidos dos lanches que tenham sido vendidos uma quantidade diferente de 50 e que o campo tags não exista.

db.produtos.find({ $and: [{ vendidos: { $not: { $eq: 50 } }, tags: { $exists: false } }] }, { nome: 1, vendidos: 1, _id: 0 });