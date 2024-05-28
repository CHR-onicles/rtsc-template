import { Container } from "@styles/components/container1.styled";

import Image from "@assets/black-panther.webp";
import Logo from "@assets/react.svg?react";

import { StyledHome } from "./home1.styled";


export const Home = () => {
  return (
    <StyledHome>
      <Container>
        <nav>
          <h2>rtsc-template</h2>
          <Logo />
        </nav>
        <div className="img-wrapper">
          <img src={Image} alt="black panther movie poster" />
        </div>
        <main>
          <h2>Random header 1</h2>
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

          <h2>Random header 2</h2>
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
          <h2>Random header 2</h2>
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
          <h2>Random header 2</h2>
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
        </main>
      </Container>
    </StyledHome>
  );
};
