import React from "react";
import phone from "../../assets/Phone.png";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
import Container from "../../utilities/Container.styles";
import Section from "./styles";
import Button from "../../utilities/Button.styles";

const PaymentTools = () => {
  return (
    <Section>
      <Container>
        <h2 className="header">
          A fully unified set of <span>payments tools</span>
        </h2>

        <div className="tools-box">
          <div className="tools-item1">
            <img src={phone} alt="mobile_phone" />
          </div>

          <div className="tools-item2">
            <div className="sub-item ">
              <h4>Checkout</h4>
              <p>
                Checkout features our smart payment ordering system, incredible
                speed, and beautiful simplicity. It's designed to grow your
                revenue and provide the best payment experience to your
                customers.
              </p>
              <Button className="get-started">Get started</Button>
            </div>

            <div className="sub-item has-link">
              <h4>Accept Payments</h4>
              <p>Easily receive money from anyone, anywhere in the world.</p>
              <a href="!#" className="learn-more">
                Learn More <ArrowRight />
              </a>
            </div>

            <div className="sub-item has-link">
              <h4>Transfers (Payout)</h4>
              <p>
                Make single or bulk transfers to bank accounts from your
                Flutterwave dashboard.
              </p>
              <a href="!#" className="learn-more">
                Learn More <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default PaymentTools;
