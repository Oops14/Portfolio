import React from "react";
import styled from "styled-components";

type SkillItemPropsType = {
    skillImg: string;
    skillTitle: string;
};

export const SkillItem = (props: SkillItemPropsType) => {
    return (
        <SkillItemWrapper>
            <SkillItemImg>
                <img src={props.skillImg} alt="#" />
            </SkillItemImg>
            <SkillItemTitle>{props.skillTitle}</SkillItemTitle>
        </SkillItemWrapper>
    );
};

const SkillItemWrapper = styled.div`
    flex: 0 0 20%;
    max-width: 20%;

    text-align: center;
    margin-bottom: 40px;
`;

const SkillItemImg = styled.div``;

const SkillItemTitle = styled.h3`
    font-weight: 400;
    color: #bdebea;
`;
