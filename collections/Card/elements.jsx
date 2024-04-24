// Styled elements for the Card go here
import styled from "styled-components";

import{CardContainer} from "~/components";

export const StyledCardContainer = styled(({...props})=><CardContainer{...props} />)`
text-align:center;
`

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 20.00rem;
  max-height: 40rem;
  width: 100%;
  height: 100%;
  margin-left: auto;
`;