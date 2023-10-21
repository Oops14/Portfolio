import React from "react";
import ProjectImg from "../../../../assets/images/project_img.png";
import styled from "styled-components";
import { Button } from "../../../../components/Button";

type ProjectCardPropsType = {
    projDescr: string;
    projTitle: string;
    projReference: string;
};

export const ProjectCard = (props: ProjectCardPropsType) => {
    return (
        <ProjectCardItem>
            <div className="proj-wrapper-item">
                <ProjectItemTop>
                    <a href="#"></a>
                    <img src={ProjectImg} alt="img" />
                </ProjectItemTop>
                <ProjectItemBottom>
                    <ProjectItemTitle>
                        <a href={props.projReference}>{props.projTitle}</a>
                    </ProjectItemTitle>
                    <ProjectTechnologies>
                        <ProjectTechButton
                            btnSize={"8px 16px 8px 16px"}
                            primary
                        >
                            JAVASCRIPT
                        </ProjectTechButton>
                        <ProjectTechButton
                            btnSize={"8px 16px 8px 16px"}
                            primary
                        >
                            POSTGRESQL
                        </ProjectTechButton>
                        <ProjectTechButton
                            btnSize={"8px 16px 8px 16px"}
                            primary
                        >
                            REACT
                        </ProjectTechButton>
                        <ProjectTechButton
                            btnSize={"8px 16px 8px 16px"}
                            primary
                        >
                            REDUX
                        </ProjectTechButton>
                    </ProjectTechnologies>
                    <ProjectDeskription>{props.projDescr}</ProjectDeskription>
                </ProjectItemBottom>
            </div>
        </ProjectCardItem>
    );
};

const ProjectCardItem = styled.div`
    flex: 0 0 50%;
    max-width: 470px;
    overflow: hidden;

    border-radius: 6px;
    background-color: #222525;
    margin-bottom: 30px;

    padding-right: 15px;
    padding-left: 15px;
`;

const ProjectItemTop = styled.div`
    position: relative;
    margin-right: -15px;
    margin-left: -15px;
    overflow: hidden;

    > a {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
    }

    img {
        width: 100%;
        z-index: 1;
        transform: scale(1);
        transition: all 0.6s ease;
    }

    &:hover {
        > img {
            transform: scale(1.2);
        }
    }
`;

const ProjectItemBottom = styled.div`
    padding: 16px;
`;

const ProjectItemTitle = styled.h3`
    margin-bottom: 10px;

    a {
        color: inherit;
        transition: all 0.2s linear;

        &:hover {
            opacity: 0.8;
        }
    }
`;

const ProjectTechnologies = styled.div`
    margin-bottom: 25px;
`;

const ProjectDeskription = styled.p`
    line-height: 24px;
    letter-spacing: 1px;
`;

const ProjectTechButton = styled(Button)`
    font-size: 10px;
    line-height: 14px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
`;
