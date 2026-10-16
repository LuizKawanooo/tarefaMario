import { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";

function EditarProduto() {

    const navigate = useNavigate();
    const { id } = useParams();
    const location = useLocation();

    const produto = location.state.produto;

    const [nome, setNome] = useState(produto.nome);
    const [preco, setPreco] = useState(produto.preco);
    const [imagem, setImagem] = useState(produto.imagem);
    const [categoriaId, setCategoriaId] = useState(produto.categoria_id);

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/categorias")
            .then(res => setCategorias(res.data));
    }, []);

    function alterar() {

        const dados = {
            nome,
            preco,
            imagem,
            categoria_id: categoriaId
        };

        axios.put("http://localhost:3000/produtos/" + id, dados)
            .then(() => navigate("/gerenciar/produtos"));
    }

    return (
        <div className="container pagina mb-5" style={{ maxWidth: "640px" }}>
            <div className="caixa p-4 p-md-5">

                <h2 className="titulo-pagina mb-4">Editar Produto</h2>

                <input
                    className="form-control mb-3"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />

                <input
                    type="number"
                    step="0.01"
                    className="form-control mb-3"
                    value={preco}
                    onChange={e => setPreco(e.target.value)}
                />

                <input
                    className="form-control mb-3"
                    value={imagem}
                    onChange={e => setImagem(e.target.value)}
                />

                <select
                    className="form-select mb-4"
                    value={categoriaId}
                    onChange={e => setCategoriaId(e.target.value)}
                >
                    {categorias.map(categoria => (
                        <option key={categoria.id} value={categoria.id}>
                            {categoria.nome}
                        </option>
                    ))}
                </select>

                <button
                    className="btn btn-warning me-2"
                    onClick={alterar}
                >
                    Salvar Alteração
                </button>

                <Link to="/gerenciar/produtos" className="btn btn-secondary">
                    Voltar
                </Link>

            </div>
        </div>
    );
}

export default EditarProduto;
