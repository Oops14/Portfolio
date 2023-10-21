import styled, {css} from "styled-components";

type ContainerPropsType = {
    width?: string
    fullwidth?: boolean
}

export const Container = styled.div<ContainerPropsType>`
  width: 100%;
  max-width: ${(props) => props.width || "1025px"};
  margin: 0 auto;

  padding-left: 15px;
  padding-right: 15px;
  
  ${(props) => props.fullwidth && css<ContainerPropsType>`
    max-width: 100%;
  `}
`;