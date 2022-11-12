import { mq, rem, theme } from "@styles/Utilities.styled";
import styled from "styled-components";

export const SectionText = styled.p`
  margin-top: 2rem;
  color: ${theme.colors.gray700};
  font-size: ${rem(15)};
  text-align: center;
  max-width: 45ch;
  margin-inline: auto;

  @media screen and (${mq.medium}) {
    text-align: left;
    margin-inline: 0;
  }
  @media screen and (${mq.large}) {
    max-width: 50ch;
  }
`;
