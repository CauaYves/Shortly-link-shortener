import styled from "styled-components"
import short from "../imgs/Logo.png"

export default function Logo() {
    return (
        <Logodiv>
            <img src={short} alt="logo"/>
        </Logodiv>
    )
}
const Logodiv = styled.div`
    width: 100%;
    height: 100px;
    margin-bottom: 70px;

    display: flex;
    align-items: center;
    justify-content: center;
`