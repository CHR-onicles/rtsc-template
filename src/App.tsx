import { Container } from "@styles/components/Container.styled";
import { GlobalStyles } from "@styles/GlobalStyles.styled";

import reactLogo from "./assets/react.svg";
import { StyledApp } from "./App.styled";


export const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Container>
          <nav>
            <h2>SC-template app</h2>
            <img src={reactLogo} width={35} height={35} alt="" />
          </nav>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae et,
            sed, ipsam voluptates iste atque nesciunt nemo deserunt deleniti
            provident, eligendi odio corrupti accusamus? Quam, optio. Tenetur
            ullam, suscipit earum error accusamus, maxime assumenda beatae
            debitis deleniti molestiae quae necessitatibus! provident, eligendi
            odio corrupti accusamus? Quam, optio. Tenetur ullam, suscipit earum
            error accusamus, maxime assumenda beatae debitis deleniti molestiae
            quae necessitatibus! provident, eligendi odio corrupti accusamus?
            Quam, optio. Tenetur ullam, suscipit earum error accusamus, maxime
            assumenda beatae debitis deleniti molestiae quae necessitatibus!
            provident, eligendi odio corrupti accusamus? Quam, optio. Tenetur
            ullam, suscipit earum error accusamus, maxime assumenda beatae
            debitis deleniti molestiae quae necessitatibus!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae et,
            sed, ipsam voluptates iste atque nesciunt nemo deserunt deleniti
            provident, eligendi odio corrupti accusamus? Quam, optio. Tenetur
            ullam, suscipit earum error accusamus, maxime assumenda beatae
            debitis deleniti molestiae quae necessitatibus! provident, eligendi
            odio corrupti accusamus? Quam, optio. Tenetur ullam, suscipit earum
            error accusamus, maxime assumenda beatae debitis deleniti molestiae
            quae necessitatibus! provident, eligendi odio corrupti accusamus?
            Quam, optio. Tenetur ullam, suscipit earum error accusamus, maxime
            assumenda beatae debitis deleniti molestiae quae necessitatibus!
            provident, eligendi odio corrupti accusamus? Quam, optio. Tenetur
            ullam, suscipit earum error accusamus, maxime assumenda beatae
            debitis deleniti molestiae quae necessitatibus!
          </p>
        </Container>
      </StyledApp>
    </>
  );
};
