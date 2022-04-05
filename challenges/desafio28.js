// Conte quantos produtos têm 4 ingredientes.

db.produtos.find({ ingredientes: { $size: 4 } }, { nome: 1, _id: 0 }).count();