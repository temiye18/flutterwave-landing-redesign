import styled from "styled-components";

const Button = styled.a`
  display: inline-block;
  padding: ${({ nav }) => (nav ? `0.7rem  2.6rem` : "1.5rem 2.5rem")};
  background: ${({ nav }) =>
    nav ? "rgba(217, 217, 217, 0.39)" : "var(--button-color)"};
  border-radius: ${({ nav }) => (nav ? "8px" : "12px")};
  font-weight: var(--work-sans-600);
  font-size: ${({ nav }) => (nav ? "1.125rem" : "1.5rem")};
  letter-spacing: ${({ nav }) => (nav ? "" : "0.-5em")};
  line-height: ${({ nav }) => (nav ? "21px" : "28px")};
  color: ${({ nav }) => (nav ? "#000" : "#fff")};

  &:hover {
    transition: background 0.6s ease-in-out;
    background: ${({ nav }) =>
      nav ? "var(--button-color)" : "rgba(217, 217, 217, 0.39)"};
    color: ${({ nav }) => (nav ? "white" : "var(--button-color)")};
  }
`;

export default Button;
