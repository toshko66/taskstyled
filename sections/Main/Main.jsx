import Image from "next/image";
import {CardCollection} from "../../collections/CardCollection";
import{
    StyledContainer,
    StyledContent,
    StyledTextContainer,
    StyledDescription,
    StyledTitle,
    StyledImageContainer,
} from "./elements";


export const Main = ({ image, title, description, ...props }) => {
    return (
      <StyledContainer {...props}>
         <StyledTextContainer>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
        </StyledTextContainer>

        <StyledContent{...props}>
          <StyledImageContainer>
            <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
          </StyledImageContainer>
          
          <CardCollection/>
        </StyledContent>
        
        
      </StyledContainer>
    );
  };