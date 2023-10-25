import { Container } from "../../components/Container";
import { SocialIcon } from "./social_icons/SocialIcon";
import GithubIcon from "../../assets/footer_icons/github.png";
import GmailIcon from "../../assets/footer_icons/gmail.png";
import LinkIcon from "../../assets/footer_icons/link.png";
import { S } from "./Footer_Styles";

export const Footer = () => {
    return (
        <S.FooterSection>
            <Container>
                <S.SocialIcons>
                    <SocialIcon
                        icon={GithubIcon}
                        socialTitle={"Github"}
                        accountLink={"#"}
                    />
                    <SocialIcon
                        icon={GmailIcon}
                        socialTitle={"gmail"}
                        accountLink={"#"}
                    />
                    <SocialIcon
                        icon={LinkIcon}
                        socialTitle={"linkedin"}
                        accountLink={"#"}
                    />
                </S.SocialIcons>
            </Container>
        </S.FooterSection>
    );
};