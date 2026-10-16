import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Mensagens() {

    const [mensagens, setMensagens] = useState([]);

    function listar() {
        axios.get("http://localhost:3000/contatos")
            .then(res => setMensagens(res.data));
    }

    function excluir(id) {
        axios.delete("http://localhost:3000/contatos/" + id)
            .then(() => listar());
    }

    useEffect(() => {
        listar();
    }, []);

    return (
        <div className="container pagina mb-5">

            <h2 className="titulo-pagina mb-4">Mensagens Recebidas</h2>

            <div className="caixa p-3 mb-4 table-responsive">
                <table className="table table-hover align-middle tabela">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Mensagem</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mensagens.map(mensagem => (
                            <tr key={mensagem.id}>
                                <td>{mensagem.id}</td>
                                <td>{mensagem.nome}</td>
                                <td>{mensagem.mensagem}</td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => excluir(mensagem.id)}
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

export default Mensagens;
