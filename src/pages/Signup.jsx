import styled from "styled-components"
import Navbar from "../components/Navbar"
import Logo from "../components/Logo"
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate()
    const [textmsg, setTextmsg] = useState("")
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    function createAccount(e) {
        e.preventDefault()
        axios
            .post(`${process.env.REACT_APP_BASE_URL}/signup`, inputs)
            .then(navigate("/login"))
            .catch(err => setTextmsg(err.response.data))
    }

    return (
        <Main>
            <Navbar />
            <Logo />

            <Form onSubmit={createAccount}>
                <p>{textmsg}</p>
                <Input placeholder="Nome" type="text" value={inputs.name} setValue={(value) => setInputs({ ...inputs, name: value })} />
                <Input placeholder="E-mail" type="email" value={inputs.email} setValue={(value) => setInputs({ ...inputs, email: value })} />
                <Input placeholder="Senha" type="password" value={inputs.password} setValue={(value) => setInputs({ ...inputs, password: value })} />
                <Input placeholder="Confirmar senha" type="password" value={inputs.confirmPassword} setValue={(value) => setInputs({ ...inputs, confirmPassword: value })} />

                <Button text="Criar conta" type="submit" />
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
    &>:last-child{
        margin-top: 30px;
    }
`