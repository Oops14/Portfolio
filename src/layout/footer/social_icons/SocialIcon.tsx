import { S } from "./SocialIcon_Styles";

type SocialIconPropsType = {
    icon: string;
    socialTitle: string;
    accountLink: string;
};

export const SocialIcon = (props: SocialIconPropsType) => {
    return (
        <S.SocialIconItem>
            <div>
                <a href={props.accountLink}></a>
                <img src={props.icon} alt="icon" />
            </div>
            <S.SocialIconItemTitle>
                <a href={props.accountLink}>{props.socialTitle}</a>
            </S.SocialIconItemTitle>
        </S.SocialIconItem>
    );
};