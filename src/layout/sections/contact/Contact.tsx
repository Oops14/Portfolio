import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { ContactSection } from "./Contact_Styles";
import { ContactForm } from "./form/ContactForm";

export const Contact = () => {
    return (
        <ContactSection>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <ContactForm />
            </Container>
        </ContactSection>
    );
};