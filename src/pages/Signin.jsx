import styled from "styled-components";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import axios from "axios";

export default function Signin() {

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    })

    function login(e) {
        e.preventDefault()
        axios
            .post(`${process.env.REACT_APP_BASE_URL}/signin`, inputs)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <Main>
            <Navbar />
            <Logo />
            <Form onSubmit={login}>
                <Input placeholder="E-mail" type="email" value={inputs.email} setValue={(value) => setInputs({ ...inputs, email: value })} />
                <Input placeholder="Senha" type="password" value={inputs.password} setValue={(value) => setInputs({ ...inputs, password: value })} />
                <Button text="Entrar" />
            </Form>
        </Main>
    )
}
const Main = styled.div`
    width: 1000px;
    margin: auto;
`
const Form = styled.form`
    margin-bottom: 50px;
`
