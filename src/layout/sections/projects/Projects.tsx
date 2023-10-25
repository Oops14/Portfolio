import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { ProjectCard } from "./card/ProjectCard";
import { S } from "./Projects_Styles";

export const Projects = () => {
    return (
        <S.ProjectSection>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <S.Row>
                    <ProjectCard
                        projTitle={"TITLE PROJECT"}
                        projReference={"#"}
                        projDescr={
                            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." +
                            "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat " +
                            "sunt nostrud amet."
                        }
                    />
                    <ProjectCard
                        projTitle={"I N S I G H T G R A M"}
                        projReference={"#"}
                        projDescr={
                            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." +
                            "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat " +
                            "sunt nostrud amet."
                        }
                    />
                    <ProjectCard
                        projTitle={"TITLE PROJECT"}
                        projReference={"#"}
                        projDescr={
                            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." +
                            "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat " +
                            "sunt nostrud amet."
                        }
                    />
                    <ProjectCard
                        projTitle={"I N S I G H T G R A M"}
                        projReference={"#"}
                        projDescr={
                            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." +
                            "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat " +
                            "sunt nostrud amet."
                        }
                    />
                </S.Row>
            </Container>
        </S.ProjectSection>
    );
};