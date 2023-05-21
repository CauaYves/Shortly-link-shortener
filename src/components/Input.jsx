import styled from "styled-components";
import COLORS from "../constants/styles";

export default function Input({ type, placeholder, value, setValue, on }) {
    return (
        <Sinput
            type={type}
            placeholder={placeholder}
            firstcolor={COLORS.PRIMARY}
            seccolor={COLORS.TERCIARY}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={on}
        />
    );
}

const Sinput = styled.input`
    width: 100%;
    height: 60px;
    padding-left: 20px;
    margin: 12.5px 0px;

    border-radius: 12px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);

    font-size: 14px;
    color: ${props => props.firstcolor};

    &:focus{
        outline: 0;
    }
    &:disabled{
        pointer-events: none;
        background-color: ${props => props.seccolor};
    }
`
