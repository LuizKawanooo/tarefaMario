import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import API from "../api";

function CadastroProduto() {

    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [imagem, setImagem] = useState("");
    const [categoriaId, setCategoriaId] = useState("");

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        axios.get(API + "/categorias")
            .then(res => setCategorias(res.data));
    }, []);

    function cadastrar() {

        const produto = {
            nome,
            preco,
            imagem,
            categoria_id: categoriaId
        };

        axios.post(API + "/produtos", produto)
            .then(() => navigate("/gerenciar/produtos"));
    }

    return (
        <div className="container pagina mb-5" style={{ maxWidth: "640px" }}>
            <div className="caixa p-4 p-md-5">

                <h2 className="titulo-pagina mb-4">Cadastrar Produto</h2>

                <input
                    className="form-control mb-3"
                    placeholder="Nome do produto"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />

                <input
                    type="number"
                    step="0.01"
                    className="form-control mb-3"
                    placeholder="Preço"
                    value={preco}
                    onChange={e => setPreco(e.target.value)}
                />

                <input
                    className="form-control mb-3"
                    placeholder="Link da imagem"
                    value={imagem}
                    onChange={e => setImagem(e.target.value)}
                />

                <select
                    className="form-select mb-4"
                    value={categoriaId}
                    onChange={e => setCategoriaId(e.target.value)}
                >
                    <option value="">Selecione a categoria</option>

                    {categorias.map(categoria => (
                        <option key={categoria.id} value={categoria.id}>
                            {categoria.nome}
                        </option>
                    ))}
                </select>

                <button
                    className="btn btn-success me-2"
                    onClick={cadastrar}
                >
                    Cadastrar
                </button>

                <Link to="/gerenciar/produtos" className="btn btn-secondary">
                    Voltar
                </Link>

            </div>
        </div>
    );
}

export default CadastroProduto;
