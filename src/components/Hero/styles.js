import styled from "styled-components";

const HeroSection = styled.main`
  margin-top: 10rem;
  .hero-flex {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .hero-item1 {
    h1 {
      font-family: var(--playfair-display);
      font-size: 5rem;
      font-weight: var(--playfair-display-700);
      color: var(--orange);
      line-height: 150%;

      span {
        color: var(--black);
      }
    }
    p {
      font-size: 1.375rem;
      letter-spacing: 0.05em;
      color: rgba(0, 0, 0, 0.57);
      margin: 1rem 0 2.1rem;
      /* max-width: 500px; */
    }
  }

  .hero-item2 {
    align-self: flex-end;
    min-width: fit-content;
    padding-top: 4rem;
  }
`;

export default HeroSection;
