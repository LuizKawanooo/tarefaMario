USE db_mariotask;

#Tabela categoria
CREATE TABLE categoria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100)
);

#Tabela produto
CREATE TABLE produto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    preco DECIMAL(10,2),
    imagem VARCHAR(255),
    categoria_id INT,

    FOREIGN KEY (categoria_id)
    REFERENCES categoria(id)
);

#Tabela contato
CREATE TABLE contato (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    mensagem VARCHAR(500)
);

#Primeiro as categorias
INSERT INTO categoria (nome)
VALUES
('Doces'),
('Bolos'),
('Tortas');

#Depois os produtos
INSERT INTO produto (nome, preco, imagem, categoria_id)
VALUES
('Brigadeiro', 3.50, 'https://placehold.co/400x300/f4c9d1/4a2a1f?text=Brigadeiro', 1),
('Beijinho', 3.50, 'https://placehold.co/400x300/f4c9d1/4a2a1f?text=Beijinho', 1),
('Brownie', 8.00, 'https://placehold.co/400x300/f4c9d1/4a2a1f?text=Brownie', 1),
('Bolo de Pote', 12.00, 'https://placehold.co/400x300/b7d3b0/3d6145?text=Bolo+de+Pote', 2),
('Cupcake', 9.50, 'https://placehold.co/400x300/b7d3b0/3d6145?text=Cupcake', 2),
('Torta de Limão', 15.00, 'https://placehold.co/400x300/ead7c7/4a2a1f?text=Torta+de+Limão', 3),
('Brigadeirão', 34.98, 'https://docepedia.com/_next/image?url=https%3A%2F%2Fadmin.docepedia.com%2Fsite%2Fuploads%2F2021%2F04%2FBolo-brigadeirao-receitas_selectachocolates_mixingredientes-1-768x768-1.jpg&w=1080&q=75', 1);

#Mensagem de teste
INSERT INTO contato (nome, mensagem)
VALUES
('Luiz', 'Mensagem boa de teste!');

#Testando
SELECT * FROM categoria;
SELECT * FROM produto;
SELECT * FROM contato;

#JOIN entre produto e categoria
SELECT produto.nome, produto.preco, categoria.nome
FROM produto
INNER JOIN categoria
ON produto.categoria_id = categoria.id;
