import IntroImg from "../../../assets/images/intro_image.png";
import { Container } from "../../../components/Container";
import { FlexContainer } from "../../../components/FlexContainer";
import { Button } from "../../../components/Button";
import { S } from "./Main_Styles";

export const Main = () => {
    return (
        <S.MainSection>
            <Container>
                <FlexContainer align={"center"}>
                    <S.SectionIntro>
                        <S.IntroSubtitle>WEB DEVELOPER</S.IntroSubtitle>
                        <S.IntroMainTitle>John Doe</S.IntroMainTitle>
                        <S.IntroDescription>
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam
                            consequat sunt.
                        </S.IntroDescription>
                        <Button as="a" primary href={"#"}>
                            Contact Me
                        </Button>
                    </S.SectionIntro>
                    <S.IntroImage>
                        <img src={IntroImg} alt="img" />
                    </S.IntroImage>
                </FlexContainer>
            </Container>
        </S.MainSection>
    );
};