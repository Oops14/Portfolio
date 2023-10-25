import ProjectImg from "../../../../assets/images/project_img.png";
import { S } from "./ProjectCard_Styles";

type ProjectCardPropsType = {
    projDescr: string;
    projTitle: string;
    projReference: string;
};

export const ProjectCard = (props: ProjectCardPropsType) => {
    return (
        <S.ProjectCardItem>
            <div className="proj-wrapper-item">
                <S.ProjectItemTop>
                    <a href="#"></a>
                    <S.ItemImg src={ProjectImg} alt="img" />
                </S.ProjectItemTop>
                <S.ProjectItemBottom>
                    <S.ProjectItemTitle>
                        <a href={props.projReference}>{props.projTitle}</a>
                    </S.ProjectItemTitle>
                    <S.ProjectTechnologies>
                        <S.ProjectTechButton
                            btnSize={"8px 16px 8px 16px"}
                            primary
                        >
                            JAVASCRIPT
                        </S.ProjectTechButton>
                        <S.ProjectTechButton
                            btnSize={"8px 16px 8px 16px"}
                            primary
                        >
                            POSTGRESQL
                        </S.ProjectTechButton>
                        <S.ProjectTechButton
                            btnSize={"8px 16px 8px 16px"}
                            primary
                        >
                            REACT
                        </S.ProjectTechButton>
                        <S.ProjectTechButton
                            btnSize={"8px 16px 8px 16px"}
                            primary
                        >
                            REDUX
                        </S.ProjectTechButton>
                    </S.ProjectTechnologies>
                    <S.ProjectDeskription>
                        {props.projDescr}
                    </S.ProjectDeskription>
                </S.ProjectItemBottom>
            </div>
        </S.ProjectCardItem>
    );
};