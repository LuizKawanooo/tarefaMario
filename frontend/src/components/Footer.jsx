function Footer() {
    return (
        <footer className="rodape py-5">
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-4">
                        <h5 className="logo">Doce Sabor</h5>
                        <p className="texto-suave small mb-0">
                            Doces artesanais feitos com carinho.
                        </p>
                    </div>

                    <div className="col-md-4">
                        <h6 className="fw-bold">Contato</h6>
                        <p className="small mb-1"><a href="#">doces@doces.com.br</a></p>
                        <p className="small mb-0"><a href="#">(11) 91234-5678</a></p>
                    </div>

                    <div className="col-md-4">
                        <h6 className="fw-bold">Redes sociais</h6>
                        <p className="small mb-1"><a href="#">Instagram @doce_doces</a></p>
                        <p className="small mb-0"><a href="#">Facebook /docedoces</a></p>
                    </div>
                </div>

                <hr className="my-4" />

                <p className="texto-suave small text-center mb-0">
                    Desenvolvido por Luiz Cavano em 2026.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
