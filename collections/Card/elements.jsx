// Styled elements for the Card go here
import styled from "styled-components";

import{CardContainer,SectionBigHeading, SectionParagraph,} from "~/components";

export const StyledCardContainer = styled(({...props})=><CardContainer{...props} />)`
text-align:start;
margin: 2rem 2rem ;
background-color: #f9f9f9;
border-radius: 7px;
border: 2px solid transparent; 
transition: border-color 0.3s ease;
max-width:22rem;
max-height:7rem;
height:100%;

&:hover {
  
  border-color: #0671fd; /* border color on hover */
}

`;

export const StyledCardLogoContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 4rem;
  max-height: 5rem;
  padding-top: 1.45rem;
  padding-left:0.25rem;
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const StyledCardTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  margin: 1rem;
  width: 70%;
  font-family: sans-serif;
  text-align:start;    
`;

export const StyledCardTitle = styled((props) => <SectionBigHeading {...props} />)`
  font-size:  15px;
  line-height:1;
  margin: 0 0 0.25rem;
  color: black;
  transition: border-color 0.3s ease;
  
  ${StyledCardContainer}:hover & {
    color: #0671fd; 
  }
`;

export const StyledCardDescription = styled((props) => <SectionParagraph {...props} />)`
  margin: 0 0;
  font-size: 0.8rem;
`;