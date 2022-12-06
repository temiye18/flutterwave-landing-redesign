import styled from "styled-components";

const Heading = styled.header`
  box-shadow: 16px -5px 21px rgba(0, 0, 0, 0.25);
  padding: 1rem 0;
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    display: none;
    align-items: center;
    justify-content: flex-start;
    gap: 1.9rem;

    li a {
      font-size: 18px;
      color: #403e3e;
      line-height: 21px;
    }
  }
`;

export default Heading;
