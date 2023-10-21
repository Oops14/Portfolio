import IntroImg from "../../../assets/images/intro_image.png";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { FlexContainer } from "../../../components/FlexContainer";
import { Button } from "../../../components/Button";

export const Main = () => {
    return (
        <MainSection>
            <Container>
                <FlexContainer align={"center"}>
                    <SectionIntro>
                        <div className="intro-subtitle">WEB DEVELOPER</div>
                        <IntroMainTitle>John Doe</IntroMainTitle>
                        <IntroDescription>
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam
                            consequat sunt.
                        </IntroDescription>
                        <Button as="a" primary href={"#"}>
                            Contact Me
                        </Button>
                    </SectionIntro>
                    <IntroImage>
                        <img src={IntroImg} alt="img" />
                    </IntroImage>
                </FlexContainer>
            </Container>
        </MainSection>
    );
};

const MainSection = styled.section`
    display: flex;
    align-items: center;

    height: 100vh;
    width: 100%;
    margin-bottom: 125px;
`;

const SectionIntro = styled.div`
    width: 50%;
`;

const IntroImage = styled.div`
    width: 50%;
`;

const IntroMainTitle = styled.h1`
    margin-top: 0;
    margin-bottom: 25px;
`;

const IntroDescription = styled.p`
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 25px;
`;
