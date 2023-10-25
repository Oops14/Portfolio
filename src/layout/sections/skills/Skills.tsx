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
import { SkillsSection } from "./Skills_Styles";

const SkillData = [
    {
        skillTitle: "Javascript",
        skillImg: JsImage
    },
    {
        skillTitle: "Typescript",
        skillImg: TypescriptImage
    },
    {
        skillTitle: "Mongo DB",
        skillImg: MongoImage
    },
    {
        skillTitle: "PostgreSQL",
        skillImg: PostgreImage
    },
    {
        skillTitle: "Jest",
        skillImg: JestImage
    },
    {
        skillTitle: "Express",
        skillImg: ExpressImage
    },
    {
        skillTitle: "Javascript",
        skillImg: JsImage
    },
    {
        skillTitle: "Typescript",
        skillImg: TypescriptImage
    },
    {
        skillTitle: "Mongo DB",
        skillImg: MongoImage
    },
    {
        skillTitle: "PostgreSQL",
        skillImg: PostgreImage
    },
]

export const Skills = () => {
    return (
        <SkillsSection>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexContainer>
                    { SkillData.map((item, index) => {
                        return <SkillItem key={index} skillTitle={item.skillTitle} skillImg={item.skillImg} />;
                    })}
                </FlexContainer>
            </Container>
        </SkillsSection>
    );
};