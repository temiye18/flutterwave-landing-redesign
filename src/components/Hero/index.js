import React from "react";
import Button from "../../utilities/Button.styles";
import Container from "../../utilities/Container.styles";
import HeroSection from "./styles";
import HeroImage from "../../assets/HeroImage.png";

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <div className="hero-flex">
          <div className="hero-item1">
            <h1>
              Endless
              <br /> possibilities for
              <span> every business</span>
            </h1>
            <p>
              Sell online, process payments, build financial products, or use
              business tools designed to grow your business.
            </p>
            <Button>Contact Sales</Button>
          </div>

          <div className="hero-item2">
            <img src={HeroImage} alt="hero_img" />
          </div>
        </div>
      </Container>
    </HeroSection>
  );
};

export default Hero;
