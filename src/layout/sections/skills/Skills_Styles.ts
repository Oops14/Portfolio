import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const SkillsSection = styled.section`
    margin-bottom: 80px;

    @media ${theme.media.tablet} {
        margin-bottom: 70px;
    }

    @media ${theme.media.mobile} {
        margin-bottom: 60px;
    }
`;