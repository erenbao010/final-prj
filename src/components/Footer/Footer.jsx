import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import iconPayment from "assest/img/icons_payment.svg";
import { ReactComponent as Facebook } from "assest/img/facebook.svg";
import { ReactComponent as Twitter} from "assest/img/twitter.svg";
import { ReactComponent as Instagram} from "assest/img/instagram.svg";
import { ReactComponent as Linkedin} from "assest/img/linkedin.svg";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useEffect } from "react";

library.add(
  faCheckSquare,
  faCoffee,
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram
);
// scroll to top
const ScrollToTop = () => {
  window.scrollTo({
    top:0,
    behavior:"smooth",
  });
};
const StyledFooter = styled.div`
  justify-content: center;
  .scroll-to-top{
    border: none;
    
  }
  svg{
    
    width: 16px;
    height: 16px;
  }

  .list-social {
    display: flex;
    list-style: none;
    gap: 36px;
    padding: 0px;
  }
  .text-footer {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-transform: capitalize;
    width: 392px;
    height: 84px;
    /* Black 75 */

    color: rgba(30, 40, 50, 0.75);
    text-align: left;
  }
  .text-align-social {
    text-align: left;
  }
  .footer-menu {
    gap: 22px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
  }
  .list-footer {
    list-style: none;
  }
  .footer-top {
    width: 100%;
    margin: 0 auto;
    justify-content: space-between;
    max-width: 1320px;
    display: flex;
    gap: 22px;
    
  }
  .footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1320px;
    margin: 0 auto;
    
  }

`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-top">
        <div className="footer-menu">
          <h2>Lisa</h2>
          <p className="text-footer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <ul className="list-social">
           <li><Facebook/></li> 

            <li>
        <Twitter/>
            </li>
            <li>
             <Linkedin/>
            </li>
            <li>
              <Instagram/>
            </li>
          </ul>
        </div>
        <div className="footer-menu">
          <h2> Catalog</h2>
          <ul className="list-footer">
            <li>Necklaces</li>
            <li>hoodies</li>
            <li>Jewelry Box</li>
            <li>t-shirt</li>
            <li>jacket</li>
          </ul>
        </div>
        <div className="footer-menu">
          <h2>About Us</h2>
          <ul className="list-footer">
            <li>Our Producers</li>
            <li>Sitemap</li>
            <li>FAQ</li>
            <li>About Us</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-menu">
          <h2>Customer Services</h2>
          <ul className="list-footer">
            <li>Contact Us</li>
            <li>Track Your Order</li>
            <li>Product Care & Repair</li>
            <li>Book an Appointment</li>
            <li>Shipping & Returns</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 LISA , Inc.</p>
        <img src={iconPayment} alt="Icon Payment" />
        <div className="scroll-to-top">
         <button onClick={ScrollToTop}>Scroll To Top</button>
        </div>
      </div>
    </StyledFooter>
  );
};
export default Footer;
