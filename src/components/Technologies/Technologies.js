import React from 'react';
import { DiReact} from 'react-icons/di';
import { VscCode } from "react-icons/vsc";
import { FiSmile } from "react-icons/fi";
import { GoMarkGithub } from "react-icons/go";
import { RiSwordFill } from "react-icons/ri";
import { Section, SectionDivider , SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';


const Technologies = () =>  (

   <Section id="tech">
     <SectionDivider/>
     <br/>
     <SectionTitle>
      <RiSwordFill size="4rem"/> Skills
    </SectionTitle>

     <List>
       <ListItem>
         <DiReact size="3rem"/>
         <ListContainer>
            <ListTitle>Front-end</ListTitle>
            <ListParagraph>
              React.js <br/>
              HTML5<br/>
              CSS3<br/>
              Js <br/>
              Material-ui<br/>
              Storybook<br/>
            </ListParagraph>
         </ListContainer>
       </ListItem>

       <ListItem>
         <VscCode size="3rem"/>
         <ListContainer>
            <ListTitle>Algorithms </ListTitle>
            <ListParagraph>
              C++ <br/>
              Python <br/>
              Data structure <br/>
            </ListParagraph>
         </ListContainer>
       </ListItem>

       <ListItem>
         <FiSmile size="3rem"/>
         <ListContainer>
            <ListTitle>Soft Skills </ListTitle>
            <ListParagraph>
              Communications <br/>
              Teamwork <br/>
              Leadership football team <br/>
            </ListParagraph>
         </ListContainer>
       </ListItem>

       <ListItem>
         <GoMarkGithub size="3rem"/>
         <ListContainer>
            <ListTitle>Git </ListTitle>
            <ListParagraph>
              Github <br/>
            </ListParagraph>
         </ListContainer>
       </ListItem>

     </List>
   </Section>
);

export default Technologies;
