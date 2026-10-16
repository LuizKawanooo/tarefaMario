# Doce Sabor — Loja Virtual (MySQL + Node + Sequelize + React)

Fluxo: MySQL → Model → Controller → Router → React

Relacionamento:

```
CATEGORIA 1 ─────── N PRODUTO
```

Uma categoria tem vários produtos, e cada produto pertence a uma categoria.

## Estrutura

```
loja
├── banco.sql
├── atualizar_imagens.sql
├── backend
│   ├── controllers
│   │   ├── categoriaController.js
│   │   ├── produtoController.js
│   │   └── contatoController.js
│   ├── models
│   │   ├── Categoria.js
│   │   ├── Produto.js
│   │   └── Contato.js
│   ├── routes
│   │   ├── categoriaRoutes.js
│   │   ├── produtoRoutes.js
│   │   └── contatoRoutes.js
│   ├── .env
│   ├── database.js
│   ├── app.js
│   └── package.json
└── frontend
    ├── public
    │   ├── chocolate.svg
    │   └── granulado.svg
    └── src
        ├── components
        │   ├── Header.jsx
        │   ├── Banner.jsx
        │   ├── CardProduto.jsx
        │   ├── ListaProdutos.jsx
        │   ├── Sobre.jsx
        │   └── Footer.jsx
        ├── pages
        │   ├── Home.jsx
        │   ├── Produtos.jsx
        │   ├── Contato.jsx
        │   ├── Painel.jsx
        │   ├── Categorias.jsx
        │   ├── CadastroCategoria.jsx
        │   ├── GerenciarProdutos.jsx
        │   ├── CadastroProduto.jsx
        │   ├── EditarProduto.jsx
        │   └── Mensagens.jsx
        ├── App.jsx
        ├── index.css
        └── main.jsx
```

## Como rodar

1. **Banco (hospedado no UOL Host):** abra o phpMyAdmin ou o MySQL Workbench conectado no banco
   `db_mariotask` e execute o `banco.sql`. O banco já existe na hospedagem, então o script só cria as tabelas.
2. **Backend:** os dados de acesso ao banco ficam no arquivo `backend/.env`
   (ele não vai para o GitHub; o `.env.example` mostra o formato).
   ```
   cd backend
   npm install
   npm run dev
   ```
   Deve aparecer `Conectado ao banco de dados` e `Servidor rodando na porta 3000`.
3. **Frontend:** em outro terminal:
   ```
   cd frontend
   npm install
   npm run dev
   ```
   Acesse http://localhost:5173

## Rotas da API (backend)

| Método | Rota | Função |
|---|---|---|
| GET | /categorias | lista categorias |
| POST | /categorias | cadastra categoria |
| PUT | /categorias/:id | altera categoria |
| DELETE | /categorias/:id | exclui categoria |
| GET | /produtos | lista produtos com a categoria (include) |
| POST | /produtos | cadastra produto |
| PUT | /produtos/:id | altera produto |
| DELETE | /produtos/:id | exclui produto |
| GET | /contatos | lista mensagens |
| POST | /contatos | salva mensagem |
| DELETE | /contatos/:id | exclui mensagem |

## Testando no Insomnia

**Categoria**

```
GET    http://localhost:3000/categorias

POST   http://localhost:3000/categorias
{ "nome": "Salgados" }

PUT    http://localhost:3000/categorias/4
{ "nome": "Salgados Especiais" }

DELETE http://localhost:3000/categorias/4
```

**Produto**

```
GET    http://localhost:3000/produtos

POST   http://localhost:3000/produtos
{
  "nome": "Pudim",
  "preco": 10.00,
  "imagem": "https://placehold.co/400x300?text=Pudim",
  "categoria_id": 1
}

PUT    http://localhost:3000/produtos/7
{
  "nome": "Pudim de Leite",
  "preco": 11.00,
  "imagem": "https://placehold.co/400x300?text=Pudim",
  "categoria_id": 1
}

DELETE http://localhost:3000/produtos/7
```

**Contato**

```
POST   http://localhost:3000/contatos
{ "nome": "Maria", "mensagem": "Vocês fazem encomenda?" }
```

O `GET /produtos` mostra o relacionamento:

```json
[
  {
    "id": 1,
    "nome": "Brigadeiro",
    "preco": "3.50",
    "imagem": "https://placehold.co/...",
    "categoria_id": 1,
    "Categoria": {
      "id": 1,
      "nome": "Doces"
    }
  }
]
```

## Rotas do site (frontend)

| Rota | Página |
|---|---|
| / | Home: Banner + ListaProdutos + Sobre |
| /produtos | Vitrine com os cards dos produtos |
| /contato | Formulário que salva a mensagem no banco |
| /gerenciar | Painel com os botões de gerenciamento |
| /gerenciar/categorias | Lista, edita e exclui categorias |
| /gerenciar/categorias/novo | Cadastra categoria |
| /gerenciar/categorias/editar/:id | Edita categoria (reaproveita o formulário de cadastro) |
| /gerenciar/produtos | Lista, edita e exclui produtos |
| /gerenciar/produtos/novo | Cadastra produto |
| /gerenciar/produtos/editar/:id | Edita produto |
| /gerenciar/mensagens | Mensagens recebidas pelo Contato |

## Componentes

| Componente | Função |
|---|---|
| **Header** | Nome da loja e menu com Início, Produtos, Contato e Gerenciar. |
| **Banner** | Chamada principal da loja com cor de fundo. |
| **CardProduto** | Componente reutilizável. Recebe `nome`, `imagem`, `preco` e `categoria` por props e mostra o card com o botão "Comprar". |
| **ListaProdutos** | Busca os produtos no banco com `axios.get` e cria um `CardProduto` para cada um com `map`. |
| **Sobre** | Texto curto explicando a loja. |
| **Footer** | Nome do aluno, ano e contatos/redes sociais fictícias. |

O `Header` e o `Footer` ficam no `App.jsx`, fora das `Routes`, então aparecem em todas as páginas.
