import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Button } from "../Button";
import { S } from "./Menu_Styles";

export const Menu = () => {
    return (
        <S.MainNavigation>
            <S.LeftNavigation>
                <li>
                    <Button as="a" href="#">
                        Home
                    </Button>
                </li>
            </S.LeftNavigation>
            <S.RightNavigation>
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
            </S.RightNavigation>
        </S.MainNavigation>
    );
};