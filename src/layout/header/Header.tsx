import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { HeaderMain } from "./Header_Styles";

export const Header = () => {
    return (
        <HeaderMain>
            <Container>
                <Menu />
            </Container>
        </HeaderMain>
    );
};
