import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
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

const ContactSection = styled.section`
    margin-bottom: 120px;
`;
