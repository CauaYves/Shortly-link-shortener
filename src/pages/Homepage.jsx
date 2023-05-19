import styled from "styled-components";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import trophy from "../imgs/Thophy.png"

export default function Homepage() {
    return (
        <Main>
            <Navbar />
            <Logo />
            <Ranking>
                <img src={trophy} alt="trophy" />
                <h1><strong>Ranking</strong></h1>
            </Ranking>
            <Toplinks>
                <p>1. Fulaninha - 32 links - 1.703.584 visualizações</p>
                <p>1. Fulaninha - 32 links - 1.703.584 visualizações</p>
                <p>1. Fulaninha - 32 links - 1.703.584 visualizações</p>
                <p>1. Fulaninha - 32 links - 1.703.584 visualizações</p>
                <p>1. Fulaninha - 32 links - 1.703.584 visualizações</p>
            </Toplinks>
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
const Toplinks = styled.div`
    width: 100%;
    min-height: 235px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 24px 24px 0px 0px;
    padding: 10px 40px;
    margin-bottom: 80px;

    p{
        font-size: 22px;
        line-height: 40px;
    }
`