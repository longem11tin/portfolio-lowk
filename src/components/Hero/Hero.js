import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        LongMinhon's Portfolio
      </SectionTitle>
      <SectionText>This project show you my projects, my skills, soft skills and technology uses until now. I know i'm want to intern and my knowledge is not good, specially Css, but i will study anything if you want me to do</SectionText>
      <Button onClick={() => window.location = 'https://github.com/longem11tin'}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;