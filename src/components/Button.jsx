import styled from "styled-components"
import COLORS from "../constants/styles"
import { BarLoader } from 'react-spinners';


export default function Button({ text, on }) {
    return (
        <Createaccount>
            <SButton color={COLORS.PRIMARY}>
                {(on) ? <BarLoader color="white" height={4} width={100} /> : text}
            </SButton>
        </Createaccount>
    )
}

const Createaccount = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`
const SButton = styled.button`
    width: 210px;
    height: 60px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 700;
    opacity: .9;

    color: white;
    background-color: ${props => props.color};
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        cursor: pointer;
        opacity: 1;
    }
    &:disabled{
        cursor: none;
        pointer-events: none;
    }
`