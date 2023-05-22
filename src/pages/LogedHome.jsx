import styled from "styled-components"
import Logo from "../components/Logo";
import Input from "../components/Input"
import { useContext, useEffect, useState } from "react";
import Button from "../components/Button";
import Infolink from "../components/Infolink"
import axios from "axios";
import { getToken } from "../functions/auth.function.js"
import LogedNav from "../components/LogedNav";
import Contextapi from "../context/Contextapi";

export default function LogedHome() {

    const token = getToken("token")
    const { setUsername } = useContext(Contextapi)
    const [shorturls, setShorturls] = useState([])
    const [errormsg, setErrormsg] = useState([])
    const [link, setLink] = useState("")


    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_BASE_URL}/users/me`, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => { setUsername(res.data.name); setShorturls(res.data.shortenedUrls) })
            .catch(error => setErrormsg(error.responde.data))
    })

    function postShorturl(linkurl) {
        console.log(token)
        axios
            .post(`${process.env.REACT_APP_BASE_URL}/urls/shorten`, { url: linkurl }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            .then(res => console.log(res))
            .catch(error => { setErrormsg(error.response.data); console.log(error) })
        console.log(linkurl)
    }

    return (
        <Main>
            <LogedNav />
            <Logo />
            <p>{errormsg}</p>
            {shorturls}
            <Flex>
                <InputDiv>
                    <Input type="text" placeholder="Links que cabem no bolso" value={link} setValue={setLink} />
                </InputDiv>
                <ButtonDiv onClick={() => postShorturl(link)}>
                    <Button text="Encurtar link" />
                </ButtonDiv>
            </Flex>
            <Infolink link="www.google.com.br" shorturl="asd79s" visitors="12" />
            <Infolink link="www.google.com.br" shorturl="asd79s" visitors="12" />
            <Infolink link="www.google.com.br" shorturl="asd79s" visitors="12" />
        </Main>
    )
}

const Main = styled.main`
        width: 1000px;
        margin: auto;
        >p{
            color: red;
        }
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