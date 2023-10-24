import React from "react";
import styled from "styled-components";

type SocialIconPropsType = {
    icon: string;
    socialTitle: string;
    accountLink: string;
};

export const SocialIcon = (props: SocialIconPropsType) => {
    return (
        <SocialIconItem>
            <div>
                <a href={props.accountLink}></a>
                <img src={props.icon} alt="icon" />
            </div>
            <SocialIconItemTitle>
                <a href={props.accountLink}>{props.socialTitle}</a>
            </SocialIconItemTitle>
        </SocialIconItem>
    );
};

const SocialIconItem = styled.div`
    text-align: center;
    padding-left: 5%;
    padding-right: 5%;

    > div {
        position: relative;
        transition: all 0.2s linear;

        a:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }

        &:hover {
            opacity: 0.8;
        }
    }
`;

const SocialIconItemTitle = styled.h5`
    text-transform: uppercase;
    font-weight: 400;
    transition: all 0.2s linear;

    a {
        font-size: 12px;
        color: #bdebea;

        &:hover {
            opacity: 0.8;
        }
    }
`;