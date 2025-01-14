// Card component file
import Image from "next/image";
import {
  StyledCardContainer,
  StyledCardLogoContainer,
  StyledCardTextContainer,
  StyledCardTitle,
  StyledCardDescription,
} from "./elements";

export const Card = ({ image, title, description, ...props }) => {
  return (
    <StyledCardContainer {...props}>
      <StyledCardLogoContainer>
        <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
      </StyledCardLogoContainer>
      <StyledCardTextContainer>
        <StyledCardTitle>{title}</StyledCardTitle>
        <StyledCardDescription dangerouslySetInnerHTML={description} />
      </StyledCardTextContainer>
    </StyledCardContainer>
  );
};
