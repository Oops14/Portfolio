import styled, { css } from "styled-components";
import { theme } from "../styles/Theme";

type ButtonPropsType = {
    primary?: boolean;
    btnSize?: string;
};

export const Button = styled.a<ButtonPropsType>`
    display: inline-block;
    color: #bdebea;
    padding: ${(props) => props.btnSize || "12px 20px 13px 20px"};
    border-radius: 6px;
    transition: all 0.2s linear;

    margin-right: 11px;

    &:last-child {
        margin-right: 0;
    }

    &:hover {
        background-color: #6e666675;
    }

    ${(props) =>
        props.primary &&
        css<ButtonPropsType>`
            background: ${theme.colors.secondaryBg};
            color: rgba(37, 39, 40, 1);

            &:hover {
                opacity: 0.8;
            }
        `}

    @media ${theme.media.tablet} {
        font-size: 15px;
        padding: 9px 12px;
    }

    @media ${theme.media.mobile} {
        font-size: 13px;
    }
`;
