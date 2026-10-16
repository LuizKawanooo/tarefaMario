import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <nav className="menu">
            <div className="container d-flex flex-wrap align-items-center justify-content-between py-3 gap-2">
                <Link to="/" className="logo">
                    Doce Sabor
                </Link>

                <div className="d-flex flex-wrap gap-1">
                    <NavLink to="/" end className="link-menu">Início</NavLink>
                    <NavLink to="/produtos" className="link-menu">Produtos</NavLink>
                    <NavLink to="/contato" className="link-menu">Contato</NavLink>
                    <NavLink to="/gerenciar" className="link-menu">Gerenciar</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Header;
