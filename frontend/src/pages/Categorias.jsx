import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Categorias() {

    const [categorias, setCategorias] = useState([]);

    function listar() {
        axios.get("http://localhost:3000/categorias")
            .then(res => setCategorias(res.data));
    }

    function excluir(id) {
        axios.delete("http://localhost:3000/categorias/" + id)
            .then(() => listar());
    }

    useEffect(() => {
        listar();
    }, []);

    return (
        <div className="container pagina mb-5">

            <h2 className="titulo-pagina mb-4">Gerenciar Categorias</h2>

            <Link
                to="/gerenciar/categorias/novo"
                className="btn btn-success mb-3"
            >
                Cadastrar Categoria
            </Link>

            <div className="caixa p-3 mb-4 table-responsive">
                <table className="table table-hover align-middle tabela">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categorias.map(categoria => (
                            <tr key={categoria.id}>
                                <td>{categoria.id}</td>
                                <td>{categoria.nome}</td>
                                <td>
                                    <Link
                                        to={"/gerenciar/categorias/editar/" + categoria.id}
                                        state={{ categoria }}
                                        className="btn btn-warning btn-sm me-2"
                                    >
                                        Editar
                                    </Link>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => excluir(categoria.id)}
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

export default Categorias;
