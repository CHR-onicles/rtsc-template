import Lenis from "@studio-freight/lenis";

import { Container } from "@styles/components/Container.styled";
import { GlobalStyles } from "@styles/GlobalStyles.styled";

import Image from "@assets/black-panther.webp";

import { ReactComponent as Logo } from "./assets/react.svg";
import { StyledApp } from "./App.styled";


export const App = () => {
  const lenis = new Lenis({ lerp: 0.5, duration: 2 });

  lenis.on("scroll", (e: Event) => {
    console.log(e);
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Container>
          <nav>
            <h2>SC-template</h2>
            <Logo />
          </nav>
          <img src={Image} alt="black panther movie poster" />
          <main>
            <h2>Random header 1</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              et, sed, ipsam voluptates iste atque nesciunt nemo deserunt
              deleniti provident, eligendi odio corrupti accusamus? Quam, optio.
              Tenetur ullam, suscipit earum error accusamus, maxime assumenda
              beatae debitis deleniti molestiae quae necessitatibus! provident,
              eligendi odio corrupti accusamus? Quam, optio. Tenetur ullam,
              suscipit earum error accusamus, maxime assumenda beatae debitis
              deleniti molestiae quae necessitatibus! provident, eligendi odio
              corrupti accusamus? Quam, optio. Tenetur ullam, suscipit earum
              error accusamus, maxime assumenda beatae debitis deleniti
              molestiae quae necessitatibus! provident, eligendi odio corrupti
              accusamus? Quam, optio. Tenetur ullam, suscipit earum error
              accusamus, maxime assumenda beatae debitis deleniti molestiae quae
              necessitatibus!
            </p>

            <h2>Random header 2</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              et, sed, ipsam voluptates iste atque nesciunt nemo deserunt
              deleniti provident, eligendi odio corrupti accusamus? Quam, optio.
              Tenetur ullam, suscipit earum error accusamus, maxime assumenda
              beatae debitis deleniti molestiae quae necessitatibus! provident,
              eligendi odio corrupti accusamus? Quam, optio. Tenetur ullam,
              suscipit earum error accusamus, maxime assumenda beatae debitis
              deleniti molestiae quae necessitatibus! provident, eligendi odio
              corrupti accusamus? Quam, optio. Tenetur ullam, suscipit earum
              error accusamus, maxime assumenda beatae debitis deleniti
              molestiae quae necessitatibus! provident, eligendi odio corrupti
              accusamus? Quam, optio. Tenetur ullam, suscipit earum error
              accusamus, maxime assumenda beatae debitis deleniti molestiae quae
              necessitatibus!
            </p>
            <h2>Random header 2</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              et, sed, ipsam voluptates iste atque nesciunt nemo deserunt
              deleniti provident, eligendi odio corrupti accusamus? Quam, optio.
              Tenetur ullam, suscipit earum error accusamus, maxime assumenda
              beatae debitis deleniti molestiae quae necessitatibus! provident,
              eligendi odio corrupti accusamus? Quam, optio. Tenetur ullam,
              suscipit earum error accusamus, maxime assumenda beatae debitis
              deleniti molestiae quae necessitatibus! provident, eligendi odio
              corrupti accusamus? Quam, optio. Tenetur ullam, suscipit earum
              error accusamus, maxime assumenda beatae debitis deleniti
              molestiae quae necessitatibus! provident, eligendi odio corrupti
              accusamus? Quam, optio. Tenetur ullam, suscipit earum error
              accusamus, maxime assumenda beatae debitis deleniti molestiae quae
              necessitatibus!
            </p>
            <h2>Random header 2</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              et, sed, ipsam voluptates iste atque nesciunt nemo deserunt
              deleniti provident, eligendi odio corrupti accusamus? Quam, optio.
              Tenetur ullam, suscipit earum error accusamus, maxime assumenda
              beatae debitis deleniti molestiae quae necessitatibus! provident,
              eligendi odio corrupti accusamus? Quam, optio. Tenetur ullam,
              suscipit earum error accusamus, maxime assumenda beatae debitis
              deleniti molestiae quae necessitatibus! provident, eligendi odio
              corrupti accusamus? Quam, optio. Tenetur ullam, suscipit earum
              error accusamus, maxime assumenda beatae debitis deleniti
              molestiae quae necessitatibus! provident, eligendi odio corrupti
              accusamus? Quam, optio. Tenetur ullam, suscipit earum error
              accusamus, maxime assumenda beatae debitis deleniti molestiae quae
              necessitatibus!
            </p>
          </main>
        </Container>
      </StyledApp>
    </>
  );
};
