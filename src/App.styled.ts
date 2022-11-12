import { flexSpBetween, theme } from "@styles/Utilities.styled";
import styled from "styled-components";

export const StyledApp = styled.main`
  nav {
    ${flexSpBetween}
    margin-top: 2rem;
    padding-inline: 1rem;
    border-radius: ${theme.borderRadius.medium};
    border: 1px solid ${theme.colors.gray200};
  }

  p:nth-child(2) {
    margin-top: 3rem;
  }
  p:nth-child(3) {
    margin-top: 2rem;
  }
`;
