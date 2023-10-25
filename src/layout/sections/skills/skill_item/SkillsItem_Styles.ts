import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

const SkillItemWrapper = styled.div`
    flex: 0 0 20%;
    max-width: 20%;

    text-align: center;
    margin-bottom: 40px;

    @media ${theme.media.tablet} {
        flex: 0 0 33.333%;
        max-width: 33.333%;
    }

    @media ${theme.media.mobile} {
        flex: 0 0 100%;
        max-width: 100%;
    }
`;

const SkillItemImg = styled.div`
    margin-bottom: 10px;
`;

const SkillItemTitle = styled.h3`
    font-weight: 400;
    color: #bdebea;
`;

export const S = {
    SkillItemWrapper,
    SkillItemImg,
    SkillItemTitle
}