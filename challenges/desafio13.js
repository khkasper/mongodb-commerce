// Inclua o campo criadoPor em todos os documentos, colocando Ronald McDonald no valor desse campo.
// 1. Crie uma query que adicione o campo criadoPor em todos os documentos, colocando "Ronald McDonald" no valor desse campo.
db.produtos.updateMany({}, { $set: { criadoPor: "Ronald McDonald" } });
// 2. Crie uma query que retorne o nome e criadoPor de todos os produtos.
db.produtos.find({}, { nome: 1, criadoPor: 1, _id: 0 });