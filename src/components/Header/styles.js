import styled from "styled-components";

const Heading = styled.header`
  box-shadow: 16px -5px 21px rgba(0, 0, 0, 0.25);
  background-color: #fafafa;
  padding: 1rem 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    display: flex;
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
