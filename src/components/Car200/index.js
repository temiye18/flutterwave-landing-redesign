import React from "react";
import Container from "../../utilities/Container.styles";
import Section from "./styles";
import car from "../../assets/Car200.png";

const Car200 = () => {
  return (
    <Section>
      <Container>
        <div className="car-box">
          <p>
            It's not the size of the company, it's the size of the ambition.
            Ambitious businesses of all sizes count on Flutterwave to grow their
            business everywhere.
          </p>
          <div className="car-200">
            <img src={car} alt="Car" />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Car200;
