// Remova o campo curtidas do item Big Mac.
// 1. Crie uma query que faça a remoção do campo curtidas do item Big Mac.
db.produtos.updateOne({ nome: "Big Mac" }, { $unset: { curtidas: 1 } });
// 2. Crie uma query que retorne o nome e curtidas de todos os documentos.
db.produtos.find({}, { nome: 1, curtidas: 1, _id: 0 });