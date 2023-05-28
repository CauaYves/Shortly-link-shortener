import styled from "styled-components";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import trophy from "../imgs/Thophy.png"
import { MoonLoader } from 'react-spinners';
import { useEffect, useState } from "react";
import axios from "axios";
import COLORS from "../constants/styles";

export default function Homepage() {

    const [links, setLinks] = useState([])

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_BASE_URL}/ranking`)
            .then(res => setLinks(res.data))
            .catch(error => console.log(error))
    },[])
    return (
        <Main>
            <Navbar />
            <Logo />
            <Ranking>
                <img src={trophy} alt="trophy" />
                <h1><strong>Ranking</strong></h1>
            </Ranking>
                {links.length === 0 ? (
                    <AnimationBox><h1>carregando</h1><MoonLoader size={50} color={COLORS.PRIMARY} loading={true} /></AnimationBox>
                ) : (
                    <Toplinks>
                        {links.map((link) => (
                            <p key={link.id}>
                                {link.id}. {link.name} - {link.linksCount} links - {link.visitCount} visualizações
                            </p>
                        ))}
                    </Toplinks>
                )}

            <h1>Crie sua conta para usar nosso serviço!</h1>
        </Main>
    )
}

const Main = styled.main`
    width: 1000px;
    margin: auto;

    h1{
        text-align: center;
    }
`
const Ranking = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 55px;

    display: flex;
    align-items: center;
    justify-content: center;
`
const AnimationBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 70px 0px;
`
const Toplinks = styled.div`
    width: 100%;
    min-height: 235px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 24px 24px 0px 0px;
    padding: 10px 40px;
    margin-bottom: 80px;

    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    p{
        font-size: 22px;
        line-height: 40px;
    }
`