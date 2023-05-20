import styled from "styled-components"
import COLORS from "../constants/styles"

export default function Button({text}) {
    return (
        <Createaccount>
            <SButton color={COLORS.PRIMARY}>
                {text}
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
    width: 200px;
    height: 60px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 700;
    color: white;
    background-color: ${props => props.color};
    border: none;
`