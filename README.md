# Doce Sabor — Loja Virtual

Site de uma loja virtual de doces artesanais, desenvolvido em **React** com componentes separados e reutilizáveis, ligado a um **backend em Node.js** que guarda os dados em um banco **MySQL** hospedado.

Tecnologias: React + Vite, Bootstrap, React Router, Axios, Node.js, Express, Sequelize e MySQL.


![Prévia do menu](https://raw.githubusercontent.com/LuizKawanooo/tarefaMario/main/docs/pre1.png)


![Prévia do menu](https://raw.githubusercontent.com/LuizKawanooo/tarefaMario/main/docs/pre2.png)

## O que foi desenvolvido

### Site da loja

- **Página inicial** com Header, Banner, lista de produtos, seção Sobre e Footer.
- **Vitrine de produtos** com 7 produtos vindos do banco de dados, cada um com nome, imagem, preço, categoria e botão "Comprar".
- **Página de contato** com formulário; a mensagem enviada fica salva no banco.

### Área de gerenciamento

Além da loja, foi criada uma área para administrar o conteúdo do site sem mexer no código:

- **Categorias:** cadastrar, listar, editar e excluir. O mesmo formulário é usado para cadastrar e editar.
- **Produtos:** cadastrar, listar, editar e excluir, escolhendo a categoria em uma lista.
- **Mensagens:** ver e excluir as mensagens enviadas pela página de contato.

### Banco de dados

Três tabelas no MySQL:

- **categoria:** Doces, Bolos e Tortas.
- **produto:** nome, preço, imagem e a categoria a que pertence.
- **contato:** mensagens enviadas pelo site.

As tabelas `categoria` e `produto` têm um relacionamento **1 para N**:

```
CATEGORIA 1 ─────── N PRODUTO
```

Uma categoria tem vários produtos, e cada produto pertence a uma categoria. No backend esse relacionamento é feito com `hasMany` e `belongsTo` do Sequelize, e a listagem de produtos usa `include` para trazer junto o nome da categoria.

### Backend (API)

Organizado no padrão **Model → Controller → Router**:

| Método | Rota | Função |
|---|---|---|
| GET / POST | /categorias | lista e cadastra categorias |
| PUT / DELETE | /categorias/:id | altera e exclui categoria |
| GET / POST | /produtos | lista (com a categoria) e cadastra produtos |
| PUT / DELETE | /produtos/:id | altera e exclui produto |
| GET / POST | /contatos | lista e salva mensagens |
| DELETE | /contatos/:id | exclui mensagem |

Os dados de acesso ao banco ficam em um arquivo `.env`, fora do código e fora do GitHub.

### Visual

Tema inspirado em uma doceria, com cada parte do site em uma cor:

- **Menu:** chocolate com granulado e chocolate escorrendo na parte de baixo.
- **Banner:** parede rosa com um arco verde-sálvia e círculos decorativos.
- **Produtos:** fundo creme com cards brancos; a cor da imagem muda conforme a categoria.
- **Sobre:** faixa verde-sálvia.
- **Rodapé:** chocolate com granulado.

O layout é responsivo e funciona no computador e no celular.

## Imagens

Imagens usadas no site. Juntas, elas formam o menu assim:

| Imagem | Arquivo | Onde é usada |
|---|---|---|
| ![Chocolate escorrendo](https://raw.githubusercontent.com/LuizKawanooo/tarefaMario/main/frontend/public/chocolate.svg) | `frontend/public/chocolate.svg` | Chocolate escorrendo embaixo do menu. Feita em SVG e repetida na horizontal com CSS (`repeat-x`). |
| ![Granulado](https://raw.githubusercontent.com/LuizKawanooo/tarefaMario/main/frontend/public/granulado.svg) | `frontend/public/granulado.svg` | Granulado colorido no fundo do menu e do rodapé, por cima da cor de chocolate. |

As imagens dos produtos ficam salvas no banco, na coluna `imagem` da tabela `produto`, como um link:

- **Brigadeiro, Beijinho, Brownie, Bolo de Pote, Cupcake e Torta de Limão:** imagens geradas pelo site placehold.co, com a cor de fundo conforme a categoria (rosa para Doces, verde para Bolos e bege para Tortas).
- **Brigadeirão:** foto do site Docepedia.

Para trocar a imagem de um produto, basta editar o link na tela de gerenciar produtos.

## Componentes

| Componente | Função |
|---|---|
| **Header** | Nome da loja e menu com Início, Produtos, Contato e Gerenciar. Destaca a página atual. |
| **Banner** | Chamada principal da loja, com o arco verde sobre o fundo rosa e botões para os produtos e o contato. |
| **CardProduto** | Componente reutilizável. Recebe `nome`, `imagem`, `preco` e `categoria` por props e mostra o card com o botão "Comprar". |
| **ListaProdutos** | Busca os produtos no banco com `axios.get` e cria um `CardProduto` para cada um com `map`. |
| **Sobre** | Texto explicando a loja e destaques (artesanal, receitas, entrega). |
| **Footer** | Nome do aluno, ano, contato e redes sociais fictícias. |

O `Header` e o `Footer` ficam no `App.jsx`, fora das `Routes`, então aparecem em todas as páginas.

---

Desenvolvido por Luiz — 2026
