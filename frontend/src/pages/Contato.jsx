import { useState } from "react";
import axios from "axios";
import API from "../api";

function Contato() {
    const [nome, setNome] = useState("");
    const [mensagem, setMensagem] = useState("");

    function enviar() {
        const contato = { nome, mensagem };

        axios.post(API + "/contatos", contato)
            .then(() => {
                alert("Obrigado, " + nome + "! Sua mensagem foi enviada.");
                setNome("");
                setMensagem("");
            });
    }

    return (
        <div className="container pagina mb-5" style={{ maxWidth: "640px" }}>
            <div className="caixa p-4 p-md-5">
                <h2 className="titulo-pagina">Contato</h2>
                <p className="texto-suave mb-4">Mande sua dúvida ou encomenda que respondemos rapidinho.</p>

                <input
                    className="form-control mb-3"
                    placeholder="Seu nome"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />

                <textarea
                    className="form-control mb-4"
                    placeholder="Sua mensagem"
                    rows="5"
                    value={mensagem}
                    onChange={e => setMensagem(e.target.value)}
                />

                <button className="btn btn-success w-100" onClick={enviar}>
                    Enviar
                </button>
            </div>
        </div>
    );
}

export default Contato;
