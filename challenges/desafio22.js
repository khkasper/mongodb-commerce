// Adicione a quantidade de vendas dos sanduíches por dia da semana.
// 1. Crie uma query que inclua um campo vendasPorDia em todos os sanduíches.O valor deste campo deverá ser um array com sete posições.Cada uma delas representará um dia da semana, e cada posição iniciará em 0.
// 1.1 O primeiro item desse array representa as vendas no domingo, o segundo item representa as vendas na segunda-feira, e assim até chegar ao último item, que representa as vendas no sábado.
db.produtos.updateMany({}, { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });
// 2. Crie uma query que incremente as vendas de Big Mac às quartas - feiras em 60.
db.produtos.updateOne({ nome: "Big Mac" }, { $inc: { "vendasPorDia.3": 60 } });
// 3. Crie uma query que incremente as vendas de todos os sanduíches de carne do tipo bovino aos sábados em 120.
db.produtos.updateMany({ tags: { $in: [/bovino/i] } }, { $inc: { "vendasPorDia.6": 120 } });
// 4. Crie uma query que retorne o nome e vendasPorDia de todos os documentos.
db.produtos.find({}, { nome: 1, vendasPorDia: 1, _id: 0 });