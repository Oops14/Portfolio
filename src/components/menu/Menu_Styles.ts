import styled from "styled-components";
import { theme } from "../../styles/Theme";

const MainNavigation = styled.nav`
    display: flex;
    justify-content: space-between;
`;

const LeftNavigation = styled.div`
    li {
        list-style: none;
    }
`;

const RightNavigation = styled(LeftNavigation)`
    display: flex;
    align-items: center;

    li {
        margin-right: 60px;

        &:last-child {
            margin-right: 0;
        }
    }

    @media ${theme.media.mobile} {
        li {
            margin-right: 30px;
        }
    }
`;

export const S = {
    MainNavigation,
    LeftNavigation,
    RightNavigation
}