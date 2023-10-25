import styled from "styled-components";
import { Container } from "../../../components/Container";
import { FlexContainer } from "../../../components/FlexContainer";
import { theme } from "../../../styles/Theme";

const MainSection = styled.section`
    display: flex;
    align-items: center;

    height: 100%;
    min-height: 100vh;
    width: 100%;
    margin-bottom: 125px;

    ${Container} {
        @media ${theme.media.tablet} {
            ${FlexContainer} {
                margin-top: 120px;
                flex-direction: column;
                text-align: center;
            }
        }
    }

    @media ${theme.media.tablet} {
        margin-bottom: 70px;
    }
`;

const SectionIntro = styled.div`
    width: 50%;
`;

const IntroImage = styled.div`
    width: 50%;

    @media ${theme.media.tablet} {
        width: 250px;
    }
`;

const IntroMainTitle = styled.h1`
    margin-top: 0;
    margin-bottom: 25px;

    @media ${theme.media.tablet} {
        font-size: 40px;
    }

    @media ${theme.media.mobile} {
        margin-bottom: 15px;
        white-space: nowrap;
        font-size: 34px;
    }
`;

const IntroSubtitle = styled.p`
    font-size: 14px;
    margin-bottom: 10px;

    @media ${theme.media.tablet} {
        font-size: 12px;

        body {
            font-size: 16px;
        }
    }
`;

const IntroDescription = styled.p`
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 25px;

    @media ${theme.media.tablet} {
        font-size: 14px;
    }

    @media ${theme.media.mobile} {
        font-size: 12px;
    }
`;

export const S = {
    MainSection,
    SectionIntro,
    IntroImage,
    IntroMainTitle,
    IntroSubtitle,
    IntroDescription
}