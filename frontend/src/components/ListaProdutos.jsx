import { useEffect, useState } from "react";
import axios from "axios";
import CardProduto from "./CardProduto";

function ListaProdutos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/produtos")
            .then(res => setProdutos(res.data));
    }, []);

    return (
        <section className="secao-produtos">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="titulo-pagina">Nossos Produtos</h2>
                    <p className="texto-suave">Escolha o seu favorito</p>
                </div>

                <div className="row g-4">
                    {produtos.map(produto => (
                        <div className="col-12 col-sm-6 col-lg-4" key={produto.id}>
                            <CardProduto
                                nome={produto.nome}
                                imagem={produto.imagem}
                                preco={produto.preco}
                                categoria={produto.Categoria?.nome}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ListaProdutos;
