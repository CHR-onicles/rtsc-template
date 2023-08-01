import styled from "styled-components";

import { flexSpBetween, rem } from "@styles/Utilities.styled";


export const StyledHome = styled.main`
  nav {
    ${flexSpBetween}
    padding-block: 1rem;
    margin-top: 2rem;
    padding-inline: 1rem;
    border-radius: var(--border-radius-3);
    border: 1px solid var(--clr-gray-400);
  }

  img {
    width: min(100%, ${rem(1000)});
    margin-inline: auto;
    margin-block: 3rem;
  }

  main {
    width: min(100%, ${rem(750)});
    margin-inline: auto;
    padding-bottom: 4rem;

    h2 {
      margin-top: 3rem;
      margin-bottom: 1rem;
    }
  }
`;
