import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import API from "../api";

function GerenciarProdutos() {

    const [produtos, setProdutos] = useState([]);

    function listar() {
        axios.get(API + "/produtos")
            .then(res => setProdutos(res.data));
    }

    function excluir(id) {
        axios.delete(API + "/produtos/" + id)
            .then(() => listar());
    }

    useEffect(() => {
        listar();
    }, []);

    return (
        <div className="container pagina mb-5">

            <h2 className="titulo-pagina mb-4">Gerenciar Produtos</h2>

            <Link to="/gerenciar/produtos/novo" className="btn btn-success mb-3">
                Cadastrar Produto
            </Link>

            <div className="caixa p-3 mb-4 table-responsive">
                <table className="table table-hover align-middle tabela">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Categoria</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {produtos.map(produto => (
                            <tr key={produto.id}>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.preco}</td>
                                <td>{produto.Categoria?.nome}</td>
                                <td>
                                    <Link
                                        to={"/gerenciar/produtos/editar/" + produto.id}
                                        state={{ produto }}
                                        className="btn btn-warning btn-sm me-2"
                                    >
                                        Editar
                                    </Link>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => excluir(produto.id)}
                                    >
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Link to="/gerenciar" className="btn btn-secondary">
                Voltar
            </Link>

        </div>
    );
}

export default GerenciarProdutos;
