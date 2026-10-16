import { useState } from "react";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";
import axios from "axios";
import API from "../api";

function CadastroCategoria() {

    const navigate = useNavigate();
    const { id } = useParams();
    const location = useLocation();

    const categoria = location.state?.categoria;

    const [nome, setNome] = useState(categoria?.nome || "");

    // Se tiver id na rota, altera; senão, cadastra
    function salvar() {

        const dados = { nome };

        if (id) {
            axios.put(API + "/categorias/" + id, dados)
                .then(() => navigate("/gerenciar/categorias"));
        } else {
            axios.post(API + "/categorias", dados)
                .then(() => navigate("/gerenciar/categorias"));
        }
    }

    return (
        <div className="container pagina mb-5" style={{ maxWidth: "640px" }}>
            <div className="caixa p-4 p-md-5">
                <h2 className="titulo-pagina mb-4">{id ? "Editar Categoria" : "Cadastrar Categoria"}</h2>

                <input
                    className="form-control mb-3"
                    placeholder="Nome da categoria"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />

                <button
                    className="btn btn-success me-2"
                    onClick={salvar}
                >
                    {id ? "Salvar Alteração" : "Cadastrar"}
                </button>

                <Link
                    to="/gerenciar/categorias"
                    className="btn btn-secondary"
                >
                    Voltar
                </Link>
            </div>
        </div>
    );
}

export default CadastroCategoria;
