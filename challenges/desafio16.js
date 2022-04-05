// Adicione o campo ultimaModificacao com a data corrente somente no sanduíche Big Mac.
// 1. Crie uma query que inclua o campo ultimaModificacao somente ao sanduíche Big Mac.
// 2. Crie uma query que atribua a data corrente ao campo ultimaModificacao no sanduíche Big Mac.Para a data corrente faça uso do tipo Date.
db.produtos.updateOne({ nome: "Big Mac" }, { $set: { ultimaModificacao: Date() } });
// 3. Crie uma query que retorne o nome de todos os documentos em que o campo ultimaModificacao existe.
db.produtos.find({ ultimaModificacao: { $exists: true } }, { nome: 1, _id: 0 });