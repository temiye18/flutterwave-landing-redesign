import styled from "styled-components";

const HeroSection = styled.main`
  .hero-flex {
    display: flex;
  }

  .hero-item1 {
    h1 {
      font-family: var(--playfair-display);
      font-size: 6rem;
      font-weight: var(--playfair-display-700);
      color: var(--orange);
      line-height: 128px;
      max-width: 500px;

      span {
        color: var(--black);
      }
    }
    p {
      font-size: 1.375rem;
      letter-spacing: 0.05em;
      color: rgba(0, 0, 0, 0.57);
      margin: 1rem 0 1.8rem 0;
    }
  }

  .hero-item2 {
    align-self: flex-end;

    flex: 1;
  }
`;

export default HeroSection;
