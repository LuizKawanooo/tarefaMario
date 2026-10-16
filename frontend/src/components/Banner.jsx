import { Link } from "react-router-dom";

function Banner() {
    return (
        <section className="banner text-center">
            {/* Círculos verdes de decoração, como os da parede */}
            <div className="circulo" style={{ top: "140px", left: "6%" }}></div>
            <div className="circulo" style={{ top: "250px", left: "11%" }}></div>
            <div className="circulo" style={{ top: "360px", left: "5%" }}></div>
            <div className="circulo" style={{ top: "160px", right: "7%" }}></div>
            <div className="circulo" style={{ top: "280px", right: "12%" }}></div>

            <div className="container">
                <div className="arco">
                    <span className="selo mb-3">Doces artesanais feitos todos os dias</span>

                    <h1 className="mt-3 mb-3">
                        Os doces mais gostosos <br /> da cidade
                    </h1>

                    <p className="lead mx-auto mb-4" style={{ maxWidth: "520px" }}>
                        Brigadeiros, bolos e tortas feitos à mão, com ingredientes selecionados
                        e muito carinho.
                    </p>

                    <Link to="/produtos" className="btn btn-success btn-lg me-2 mb-2">
                        Ver Produtos
                    </Link>
                    <Link to="/contato" className="btn btn-chocolate btn-lg mb-2">
                        Fale Conosco
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Banner;
