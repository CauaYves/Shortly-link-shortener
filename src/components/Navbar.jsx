import styled from "styled-components"

export default function Navbar(){
    return (
        <Nav>
            <h4>Entrar</h4>
            <h4>Cadastre-se</h4>
        </Nav>
    )
}

const Nav = styled.nav`
     height: 60px;
     width: 100%;

     display: flex;
     align-items: end;
     justify-content: right;

     h4{
        margin-right: 22px;
     }
`