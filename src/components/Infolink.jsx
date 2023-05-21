import styled from "styled-components"
import trash from "../imgs/trash.png"
import COLORS from "../constants/styles"

export default function Infolink({ link, shorturl, visitors }) {
    return (
        <Contnr>
            <Infos color={COLORS.SECONDARY}>
                <p>{link}</p>
                <p>{shorturl}</p>
                <p>Quantidade de visitantes: {visitors}</p>
            </Infos>
            <Delicon color={COLORS.SECONDARY}>
                <img src={trash} />
            </Delicon>
        </Contnr>


    )
}
const Contnr = styled.div`
    display: flex;
    margin: 20px 0px;
`
const Infos = styled.div`
    width: 80%;
    height: 60px;

    background: ${props => props.color};
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px 0px 0px 12px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    p{
        color: white;
    }
`
const Delicon = styled.div`
    width: 20%;
    height: 60px;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);

    border-radius: 0px 12px 12px 0px;
    border: 0.1px solid;
    border-color: ${props => props.color};

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        cursor: pointer;
    }
`