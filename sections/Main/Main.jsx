import Image from "next/image";

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

          {/* Component with the 3 cards inside*/}
        </StyledContent>
        
        
      </StyledContainer>
    );
  };