import styled from "styled-components";
import COLORS from "../constants/styles";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <Nav>
            <CustomLink to="/login" color={COLORS.PRIMARY}>Entrar</CustomLink>
            <CustomLink to="/cadastro" color={COLORS.TERCIARY}>Cadastre-se</CustomLink>
        </Nav>
    );
}

const Nav = styled.nav`
  height: 60px;
  width: 100%;
  margin-bottom: 30px;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const CustomLink = styled(Link)`
  color: ${props => props.color};
  margin-right: 22px;
  text-decoration: none;
`;
