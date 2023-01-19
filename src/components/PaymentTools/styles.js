import styled from "styled-components";

const Section = styled.section`
  margin-top: 5rem;
  h2.header {
    font-size: 4.5rem;
    font-family: var(--playfair-display);
    font-weight: var(--playfair-display-700);
    line-height: 130%;
    max-width: 550px;
    color: var(--black-variant);
    span {
      color: var(--orange-variant);
    }
  }

  .tools-box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin-top: 3rem;

    .tools-item1 {
      img {
        /* width: 100%;
        height: auto;
        max-height: 40rem;
        object-fit: contain; */
        height: 100%;
        object-fit: cover;
      }
    }

    .tools-item2 {
      display: grid;
      grid-template-rows: 1fr 200px 200px;
      /* grid-gap: 2rem; */
    }

    .sub-item {
      .get-started {
        margin: 1.4rem 0 3rem;
        font-size: 1.1rem;
      }
      &.has-link {
        a {
          color: #ff5e2c;
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 1.2rem;
          font-size: 1.3rem;
        }
      }

      h4 {
        font-size: 1.8rem;
        line-height: 142%;
        font-weight: var(--work-sans-600);
      }

      p {
        font-size: 1.3rem;
        line-height: 142%;
      }

      .get-started {
        padding: 1rem 1rem;
      }
    }
  }
`;

export default Section;
