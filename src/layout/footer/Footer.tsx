import { Container } from "../../components/Container";
import { SocialIcon } from "./social_icons/SocialIcon";
import GithubIcon from "../../assets/footer_icons/github.png";
import GmailIcon from "../../assets/footer_icons/gmail.png";
import LinkIcon from "../../assets/footer_icons/link.png";
import { S } from "./Footer_Styles";

const SocialData = [
    {
        icon: GithubIcon,
        socialTitle: "Github",
        accountLink: "#",
    },
    {
        icon: GmailIcon,
        socialTitle: "gmail",
        accountLink: "#",
    },
    {
        icon: LinkIcon,
        socialTitle: "linkedin",
        accountLink: "#",
    },
];

export const Footer = () => {
    return (
        <S.FooterSection>
            <Container>
                <S.SocialIcons>
                    {SocialData.map((item, index) => {
                        return (
                            <SocialIcon
                                icon={item.icon} key={index}
                                socialTitle={item.socialTitle}
                                accountLink={item.accountLink}
                            />
                        );
                    })}
                </S.SocialIcons>
            </Container>
        </S.FooterSection>
    );
};