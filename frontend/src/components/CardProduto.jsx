// Componente reutilizável: recebe os dados do produto por props
function CardProduto({ nome, imagem, preco, categoria }) {

    function comprar() {
        alert(nome + " adicionado ao carrinho!");
    }

    return (
        <div className="caixa card-produto h-100 d-flex flex-column">
            <img src={imagem} alt={nome} />

            <div className="p-4 d-flex flex-column flex-grow-1">
                <span className="categoria align-self-start mb-2">{categoria}</span>
                <h5 className="fw-bold mb-3">{nome}</h5>

                <div className="d-flex align-items-center justify-content-between mt-auto">
                    <span className="preco">R$ {Number(preco).toFixed(2).replace(".", ",")}</span>

                    <button className="btn btn-success" onClick={comprar}>
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardProduto;
