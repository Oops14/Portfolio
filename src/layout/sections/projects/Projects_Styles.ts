import styled from "styled-components";
import { FlexContainer } from "../../../components/FlexContainer";
import { theme } from "../../../styles/Theme";

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
        width: 100%;
    }
`;

export const S = {
    ProjectSection,
    Row
}