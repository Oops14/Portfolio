import React from "react";
import ProjectImg from "../../../../assets/images/project_img.png";
import styled from "styled-components";
import { Button } from "../../../../components/Button";
import { theme } from "../../../../styles/Theme";

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
                    <ItemImg src={ProjectImg} alt="img" />
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

const ItemImg = styled.img``;

const ProjectCardItem = styled.div`
    flex: 0 0 50%;
    max-width: 50%;

    max-width: 470px;
    overflow: hidden;

    border-radius: 6px;
    background-color: #222525;
    margin-bottom: 30px;

    &:hover {
        ${ItemImg} {
            transform: scale(1.2);
        }
    }

    @media ${theme.media.tablet} {
        flex: 0 0 100%;
        max-width: 100%;
    }
`;

const ProjectItemTop = styled.div`
    position: relative;
    overflow: hidden;

    > a {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
    }

    ${ItemImg} {
        width: 100%;
        z-index: 1;
        transform: scale(1);
        transition: all 0.6s ease;
    }

    &:hover ${ItemImg} {
        transform: scale(1.2);
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
