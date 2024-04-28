import styled from "styled-components";

import{CardContainer,SectionBigHeading, SectionParagraph,} from "~/components";

export const StyledCardContainer = styled(({...props})=><CardContainer{...props} />)`
text-align:start;
margin: 2rem 2rem ;
background-color: #f9f9f9;
border-radius: 7px;
border: 2px solid transparent; 
transition: border-color 0.3s ease;
max-width: ${props => props.maxWidth || '100%'};
max-height:7rem;
height:100%;
display:flex;
align-items: center;

&:hover {
  
  border-color: #0671fd; /* border color on hover */
}

@media (max-width: 1024px) {
  max-height: fit-content;
  margin:2rem 0;
 }
`;