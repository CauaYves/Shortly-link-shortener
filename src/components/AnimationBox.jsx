import { MoonLoader } from "react-spinners";
import COLORS from "../constants/styles";
import styled from "styled-components";

export default function AnimationBox() {
    return (
        <AnimationBoxs>
            <h1>carregando</h1>
            <MoonLoader size={50} color={COLORS.PRIMARY} loading={true} />
        </AnimationBoxs>
    )
}
const AnimationBoxs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 70px 0px;
`