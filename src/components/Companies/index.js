import React from "react";
import Section from "./styles";
import Container from "../../utilities/Container.styles";
import Mtn from "../../assets/Mtn.svg";
import Uber from "../../assets/Uber.svg";
import Chipper from "../../assets/Chipper.svg";
import Piggy from "../../assets/PiggyVest.svg";

const Companies = () => {
  return (
    <Section>
      <Container>
        <h3>
          We are trusted by <span>1 Million+</span> businesses
        </h3>

        <div className="company">
          <div>
            <img src={Uber} alt="mtn" />
          </div>
          <div>
            <img src={Mtn} alt="mtn" />
          </div>
          <div>
            <img src={Chipper} alt="mtn" />
          </div>
          <div>
            <img src={Piggy} alt="mtn" />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Companies;
