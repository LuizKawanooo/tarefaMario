import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Contato from "./pages/Contato";

import Painel from "./pages/Painel";
import Categorias from "./pages/Categorias";
import CadastroCategoria from "./pages/CadastroCategoria";
import GerenciarProdutos from "./pages/GerenciarProdutos";
import CadastroProduto from "./pages/CadastroProduto";
import EditarProduto from "./pages/EditarProduto";
import Mensagens from "./pages/Mensagens";

function App() {
    return (
        <BrowserRouter>
            <Header />

            <main className="flex-grow-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/produtos" element={<Produtos />} />
                    <Route path="/contato" element={<Contato />} />

                    <Route path="/gerenciar" element={<Painel />} />

                    <Route path="/gerenciar/categorias" element={<Categorias />} />
                    <Route path="/gerenciar/categorias/novo" element={<CadastroCategoria />} />
                    <Route path="/gerenciar/categorias/editar/:id" element={<CadastroCategoria />} />

                    <Route path="/gerenciar/produtos" element={<GerenciarProdutos />} />
                    <Route path="/gerenciar/produtos/novo" element={<CadastroProduto />} />
                    <Route path="/gerenciar/produtos/editar/:id" element={<EditarProduto />} />

                    <Route path="/gerenciar/mensagens" element={<Mensagens />} />
                </Routes>
            </main>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
