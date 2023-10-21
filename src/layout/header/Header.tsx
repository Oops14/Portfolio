import React from "react";
import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Menu />
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    position: absolute;
    left: 0;
    right: 0;
    height: 100px;

    display: flex;
    align-items: center;
`;
