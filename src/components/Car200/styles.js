import styled from "styled-components";

const Section = styled.section`
  .car-box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;

    p {
      align-self: center;
      justify-self: center;
      font-size: 1.8rem;
      font-weight: var(--work-sans-400);
      line-height: 142%;
      letter-spacing: -0.005em;
      max-width: 500px;
    }

    .car-200 {
      img {
        width: 100%;
      }
    }
  }
`;

export default Section;
