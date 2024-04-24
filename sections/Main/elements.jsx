import styled from "styled-components";
import {SectionContainer, SectionBigHeading, SectionSubheading, } from "~/components";


export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  align-items: center;
  display:flex;
  flex-direction:column;
  margin-top:5rem;
`;

export const StyledContent =styled(({width, ...props }) => <SectionContainer {...props} />)`
display:flex;
`;



export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`

  margin: 0;
  color: black;
`;


export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin: 0 0;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  margin-bottom: 2rem;
  width: 75%;
  font-family: sans-serif;
  text-align:center;    
`;


export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 20.00rem;
  max-height: 40rem;
  width: 100%;
  height: 100%;
  margin-left: auto;
`;

