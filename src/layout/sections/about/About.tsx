import React from 'react';
import {Container} from "../../../components/Container";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {theme} from "../../../styles/Theme";

export const About = () => {
    return (
        <AboutSection>
            <Container>
                <SectionTitle>About me</SectionTitle>
                <AboutDescription>
                    The long barrow was built on land previously inhabited in the Mesolithic period.
                    It consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length,
                    with a chamber built from sarsen megaliths on its eastern end.
                    Both inhumed and cremated human remains were placed within this chamber during the Neolithic period,
                    representing at least nine or ten individuals.
                </AboutDescription>
            </Container>
        </AboutSection>
    );
};

const AboutSection = styled.section`
  margin-bottom: 125px;
`;

const AboutDescription = styled.p`
  position: relative;
  font-size: 18px;
  line-height: 26px;
  width: 100%;
  max-width: 843px;
  margin-left: 18px;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    height: 100%;
    width: 5px;
    border-radius: 2px;
    margin-left: -18px;
    background: ${theme.colors.secondaryBg};
  }

`;