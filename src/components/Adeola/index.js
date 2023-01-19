import React from "react";
import Container from "../../utilities/Container.styles";
import adeola from "../../assets/Adeola.png";
import Main from "./styles";

const Adeola = () => {
  return (
    <Main>
      <Container className="adeola">
        <img src={adeola} alt="Adeola" />
      </Container>
    </Main>
  );
};

export default Adeola;
