import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { ProjectCard } from "./card/ProjectCard";
import { FlexContainer } from "../../../components/FlexContainer";
import { theme } from "../../../styles/Theme";

export const Projects = () => {
    return (
        <ProjectSection>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <Row>
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
                </Row>
            </Container>
        </ProjectSection>
    );
};

const ProjectSection = styled.section``;

const Row = styled(FlexContainer)`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: space-between;

    @media ${theme.media.tablet} {
        justify-content: space-around;
    }

    @media ${theme.media.mobile} {
        justify-content: center;
        width: 100%;
    }
`;
