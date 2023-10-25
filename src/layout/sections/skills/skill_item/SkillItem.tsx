import { S } from "./SkillsItem_Styles";

type SkillItemPropsType = {
    skillImg: string;
    skillTitle: string;
};

export const SkillItem = (props: SkillItemPropsType) => {
    return (
        <S.SkillItemWrapper>
            <S.SkillItemImg>
                <img src={props.skillImg} alt="#" />
            </S.SkillItemImg>
            <S.SkillItemTitle>{props.skillTitle}</S.SkillItemTitle>
        </S.SkillItemWrapper>
    );
};