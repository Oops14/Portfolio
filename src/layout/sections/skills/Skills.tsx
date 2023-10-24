import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { FlexContainer } from "../../../components/FlexContainer";
import { SkillItem } from "./skill_item/SkillItem";
import { SectionTitle } from '../../../components/SectionTitle';
import JsImage from "../../../assets/skills_Images/js.png";
import TypescriptImage from "../../../assets/skills_Images/typescript.png";
import MongoImage from "../../../assets/skills_Images/mongodb.png";
import PostgreImage from "../../../assets/skills_Images/postgre.png";
import JestImage from "../../../assets/skills_Images/lapet.png";
import ExpressImage from "../../../assets/skills_Images/express.png";
import { theme } from "../../../styles/Theme";

export const Skills = () => {
    return (
        <SkillsSection>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexContainer>
                    <SkillItem skillTitle="Javascript" skillImg={JsImage} />
                    <SkillItem skillTitle="Typescript" skillImg={TypescriptImage} />
                    <SkillItem skillTitle="Mongo DB" skillImg={MongoImage} />
                    <SkillItem skillTitle="PostgreSQL" skillImg={PostgreImage} />
                    <SkillItem skillTitle="Jest" skillImg={JestImage} />
                    <SkillItem skillTitle="Express" skillImg={ExpressImage} />
                    <SkillItem skillTitle="Javascript" skillImg={JsImage} />
                    <SkillItem skillTitle="Typescript" skillImg={TypescriptImage} />
                    <SkillItem skillTitle="Mongo DB" skillImg={MongoImage} />
                    <SkillItem skillTitle="PostgreSQL" skillImg={PostgreImage} />
                </FlexContainer>
            </Container>
        </SkillsSection>
    );
};

const SkillsSection = styled.section`
    margin-bottom: 80px;

    @media ${theme.media.tablet} {
        margin-bottom: 70px;
    }

    @media ${theme.media.mobile} {
        margin-bottom: 60px;
    }
`;
