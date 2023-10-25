import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const AboutSection = styled.section`
    margin-bottom: 125px;
`;

const AboutDescription = styled.p`
    position: relative;
    font-size: 18px;
    line-height: 26px;
    width: 100%;
    max-width: 843px;
    margin-left: 18px;

    &:before {
        content: "";
        position: absolute;
        left: 0;
        height: 100%;
        width: 5px;
        border-radius: 2px;
        margin-left: -18px;
        background: ${theme.colors.secondaryBg};
    }
`;

export const S = {
    AboutSection,
    AboutDescription,
}