import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { SocialIcon } from "./social_icons/SocialIcon";
import GithubIcon from "../../assets/footer_icons/github.png";
import GmailIcon from "../../assets/footer_icons/gmail.png";
import LinkIcon from "../../assets/footer_icons/link.png";

export const Footer = () => {
    return (
        <FooterSection>
            <Container>
                <SocialIcons>
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
                </SocialIcons>
            </Container>
        </FooterSection>
    );
};

const FooterSection = styled.section``;

const SocialIcons = styled.section`
    display: flex;
    justify-content: center;
`;
