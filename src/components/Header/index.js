import React from "react";
import Heading from "./styles";
import { ReactComponent as Logo } from "../../assets/FlutterLogo.svg";
import Button from "../../utilities/Button.styles";
import Container from "../../utilities/Container.styles";

const Header = () => {
  const navLinks = [
    "Payments",
    "Commerce",
    "issuing",
    "Capital",
    "Grow",
    "Faas",
  ];
  return (
    <Heading>
      <Container>
        <nav className="navbar">
          <div>
            <Logo className="logo" width={"15rem"} />
          </div>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href="!#">{link}</a>
              </li>
            ))}
          </ul>
          <Button nav>Sign in</Button>
        </nav>
      </Container>
    </Heading>
  );
};

export default Header;
