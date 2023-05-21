import styled from "styled-components"
import Navbar from "../components/Navbar"
import Logo from "../components/Logo";
import Input from "../components/Input"
import { useState } from "react";
import Button from "../components/Button";
import Infolink from "../components/Infolink"

export default function LogedHome() {

    const [link, setLink] = useState()

    return (
        <Main>
            <Navbar />
            <Logo />
            <Flex>
                <InputDiv>
                    <Input type="text" placeholder="Links que cabem no bolso" value={link} setValue={setLink} />
                </InputDiv>
                <ButtonDiv>
                    <Button text="Encurtar link" />
                </ButtonDiv>
            </Flex>
            <Infolink link="www.google.com.br" shorturl="asd79s" visitors="12"/>
            <Infolink link="www.google.com.br" shorturl="asd79s" visitors="12"/>
            <Infolink link="www.google.com.br" shorturl="asd79s" visitors="12" />

        </Main>
    )
}

const Main = styled.main`
    width: 1000px;
    margin: auto;
`
const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 40px;
`
const InputDiv = styled.div`
width: 650px;
`
const ButtonDiv = styled.div`
width: 180px;
`