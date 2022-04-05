// Conte quantos produtos contêm Mc no nome, sem considerar letras maiúsculas ou minúsculas.

db.produtos.find({ nome: /Mc/i }, { nome: 1, _id: 0 }).count();