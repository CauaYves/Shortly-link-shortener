import styled from "styled-components";
import COLORS from "../constants/styles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Contextapi from "../context/Contextapi";
import { logout } from "../functions/auth.function";

export default function LogedNav() {
    const { username } = useContext(Contextapi)

    return (
        <Nav>
            <div>
                <p>Seja bem-vindo(a), {username}!</p>
            </div>
            <div>
                <CustomLink to="/home" color={COLORS.TERCIARY}>Home</CustomLink>
                <CustomLink to="/" color={COLORS.TERCIARY}>Ranking</CustomLink>
                <CustomLink to="/" color={COLORS.TERCIARY} onClick={logout}>Sair</CustomLink>
            </div>
        </Nav>
    );
}

const Nav = styled.nav`
  height: 60px;
  width: 100%;
  margin-bottom: 30px;

  display: flex;
  align-items: flex-end;
  justify-content:space-between;

  div{
    p{
        color: ${COLORS.PRIMARY};
    }
  }
`;

const CustomLink = styled(Link)`
  color: ${props => props.color};
  margin-right: 22px;
  text-decoration: none;
`;
