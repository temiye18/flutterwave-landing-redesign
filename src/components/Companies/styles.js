import styled from "styled-components";

const Section = styled.section`
  margin-top: 6rem;
  h3 {
    text-align: center;
    font-size: 2rem;
    line-height: 38px;
    font-weight: var(--work-sans-500);

    span {
      font-weight: var(--work-sans-600);
    }
  }

  .company {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 250px));
    justify-content: center;
    place-items: center;

    img {
      width: 200px;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default Section;
