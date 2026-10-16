function Sobre() {
    return (
        <section className="secao-sobre">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <h2 className="titulo-pagina mb-3">Sobre a Doce Sabor</h2>
                        <p className="mb-0" style={{ color: "#33493a" }}>
                            A Doce Sabor é uma loja de doces artesanais criada para adoçar o seu dia.
                            Trabalhamos com ingredientes de qualidade e receitas caseiras, fazendo
                            brigadeiros, bolos, tortas e muito mais para festas ou para aquele
                            momento especial.
                        </p>
                    </div>

                    <div className="col-lg-6">
                        <div className="row g-3 text-center">
                            <div className="col-4">
                                <div className="caixa p-3">
                                    <h3 className="numero mb-0">100%</h3>
                                    <small className="texto-suave">Artesanal</small>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="caixa p-3">
                                    <h3 className="numero mb-0">+30</h3>
                                    <small className="texto-suave">Receitas</small>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="caixa p-3">
                                    <h3 className="numero mb-0">das 6h as 20h</h3>
                                    <small className="texto-suave">Entrega</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sobre;
