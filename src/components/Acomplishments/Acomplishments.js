import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

import { FaGraduationCap } from "react-icons/fa";

const data = [
  { number: 2017, text: '1st prize Algorithm Competition in provincial round'},
  { number: 2017, text: '4th prize Youth Computer Science in provincial round'},
  { number: 2018, text: '4th prize Algorithm Competition in provincial round', },
  { number: 2019, text: 'Bronze Award High School for Gifted Students of Science', },
  { number: 2020, text: '2nd prize Algorithm Competition in provincial round', },
  { number: 2020, text: '1st prize Olympic informatics to study abroad in Russia', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      <FaGraduationCap size="5rem" /> Personal Achievements
    </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;