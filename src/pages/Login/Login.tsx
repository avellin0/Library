import "./Login.css"
import back from "../../assets/icons/back.png"
import { useNavigate } from "react-router-dom"

export function Login() {
    const navigate = useNavigate();

    return (
        <>
            <div id="login-body">
                <div id="login-welcome-scope">
                    <div id="login-welcome">

                        <div id="login-back-scope">
                            <img src={back} alt="" id="login-back" onClick={() => navigate("/")} />
                        </div>

                        <div id="login-welcome-scope-title">
                            <h2>Library.ex</h2>
                        </div>

                        <div id="login-welcome-scope-text">
                            <h1><span>Bem vindo</span> ao seu próprio mundo, onde a <span>criatividade</span> não tem limites!</h1>
                        </div>
                    </div>
                </div>

                <div id="login-welcome-scope-input">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <div id="login-welcome-scope-input-actions">
                        <button id="login-welcome-scope-input-action-login" onClick={() => alert("Oooi! 😅 Estamos arrumando a bagunça, em breve poderá entrar")}>Entrar</button>
                        <p onClick={() => alert("🥳 Bem-vindo a nossa comunidade! Estamos organizando tudo para você!")}>Cadastra-se</p>
                    </div>
                </div>
            </div>
        </>
    )
}