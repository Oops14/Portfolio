import styled from "styled-components";
import { theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
    font-weight: 600;
    color: #bdebea;
    line-height: 26px;

    margin-bottom: 40px;

    @media ${theme.media.tablet} {
        text-align: center;
    }
`;
