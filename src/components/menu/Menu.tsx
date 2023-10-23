import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Button } from "../Button";

export const Menu = () => {
    return (
        <MainNavigation>
            <LeftNavigation>
                <li>
                    <Button as="a" href="#">
                        Home
                    </Button>
                </li>
            </LeftNavigation>
            <RightNavigation>
                <li>
                    <Button as="a" href="#">
                        Projects
                    </Button>
                </li>
                <li>
                    <Button as="a" href="#" primary>
                        Contact
                    </Button>
                </li>
            </RightNavigation>
        </MainNavigation>
    );
};

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
