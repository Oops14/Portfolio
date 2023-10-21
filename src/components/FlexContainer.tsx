import styled from "styled-components";

type FlexContainerPropsType = {
    align?: string;
};

export const FlexContainer = styled.div<FlexContainerPropsType>`
    display: flex;
    flex-wrap: wrap;
    align-items: ${(props) => props.align || "stretch"};
`;
