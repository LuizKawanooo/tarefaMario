import { Link } from "react-router-dom";

function Painel() {
    return (
        <div className="container pagina mb-5 text-center">

            <h1 className="titulo-pagina">
                Gerenciar <span className="destaque">Loja</span>
            </h1>
            <p className="texto-suave mb-5">Gerenciamento de Produtos, Categorias e Mensagens</p>

            <div className="row g-4">
                <div className="col-md-4">
                    <Link to="/gerenciar/categorias" className="caixa card-painel rosa">
                        <h4 className="fw-bold">Categorias</h4>
                        <p className="texto-suave mb-0">Cadastrar, editar e excluir categorias</p>
                    </Link>
                </div>

                <div className="col-md-4">
                    <Link to="/gerenciar/produtos" className="caixa card-painel verde">
                        <h4 className="fw-bold">Produtos</h4>
                        <p className="texto-suave mb-0">Cadastrar, editar e excluir produtos</p>
                    </Link>
                </div>

                <div className="col-md-4">
                    <Link to="/gerenciar/mensagens" className="caixa card-painel rosa">
                        <h4 className="fw-bold">Mensagens</h4>
                        <p className="texto-suave mb-0">Ver mensagens enviadas pelo site</p>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Painel;
