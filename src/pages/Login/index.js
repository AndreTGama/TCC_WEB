import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import api from "../../services/api";
import "./style.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState("");
    const [disableButton, setDisableButton] = useState(false);
    const [buttonLogin, setButtonLogin] = useState("Entrar");
    const history = useHistory();

    function handleLogin(event) {
        setButtonLogin("Carregando...");
        setDisableButton(true);
        event.preventDefault();
        setErrorLogin("");
        (async function() {
            const response = await api.post("/login", {
                login: email,
                password: password,
            });
            console.log(response);
            if (response.data.error === false) {
                history.push("/usuario_admin");
                localStorage.setItem("@token", response.data.data);
                alert(response.data.data);
            } else {
                alert(`${response.data.message}`);
                setErrorLogin(response.data.message);
            }
            setButtonLogin("Entrar");
            setDisableButton(false);
        })();
    }

    return ( <
        section className = "background_page_form" >
        <
        div className = "container" >
        <
        div className = "row justify-content-center" >
        <
        div className = "col-12 col-lg-7 col-md-9" >
        <
        div className = "card"
        id = "login-card" >
        <
        div className = "card-body" >
        <
        form className = "login_page_form"
        onSubmit = { handleLogin } >
        <
        div className = "row justify-content-center text-center" >
        <
        div className = "form-group col-10" >
        <
        label htmlFor = "loginEmail" >
        <
        b > Login < /b> < /
        label > <
        input type = "text"
        name = "loginEmail"
        id = "loginEmail"
        placeholder = "Digite seu login"
        className = "form-control"
        onChange = {
            (event) =>
            setEmail(event.target.value)
        }
        required /
        >
        <
        /div> < /
        div > <
        div className = "row justify-content-center text-center" >
        <
        div className = "form-group col-10" >
        <
        label htmlFor = "passwordLogin" >
        <
        b > Senha < /b> < /
        label > <
        input type = "password"
        name = "passwordLogin"
        id = "passwordLogin"
        placeholder = "Digite a sua senha"
        className = "form-control"
        onChange = {
            (event) =>
            setPassword(
                event.target.value
            )
        }
        required /
        >
        <
        /div> < /
        div > <
        div className = "row justify-content-center" >
        <
        div className = "form-group col-10" >
        <
        span className = "errorLogin" > { errorLogin } <
        /span> < /
        div > <
        /div> <
        div className = "row justify-content-center text-center" >
        <
        div className = "col-10 form-group" >
        <
        button type = "submit"
        disabled = { disableButton }
        className = "btn btn-primary btn-block"
        id = "loginBtn" > { buttonLogin } <
        /button> < /
        div > <
        /div> <
        div className = "row justify-content-center text-center" >
        <
        div className = "col-10 form-group" >
        <
        Link to = { "/esqueceu-senha" }
        id = "forgotpassword" >
        Esqueceu a Senha ?
        <
        /Link> < /
        div > <
        /div> <
        div className = "row justify-content-center text-center" >
        <
        div className = "col-10 form-group" >
        <
        Link to = { "/registro" }
        id = "forgotpassword" >
        Cadastrar - se <
        /Link> < /
        div > <
        /div> < /
        form > <
        div className = "row justify-content-center text-center" >
        <
        div className = "col-10 form-group" > < /div> < /
        div > <
        /div> < /
        div > <
        /div> < /
        div > <
        /div> < /
        section >
    );
}