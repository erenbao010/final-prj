import React from "react";
import styled from "styled-components";
import Category from "components/Card/Card";
import Card2 from "components/Card/Card2";
import Banner from "components/Banner/Banner";
import searchIcon from "assest/img/searchIcon.svg";
import profileIcon from "assest/img/profileIcon.svg";
import shoppingIcon from "assest/img/shoppingIcon.svg";
import bagIcon from "assest/img/bagIcon.svg";
import modelImg from "assest/img/engin-akyurt.svg";
import brand1 from "assest/img/brand-1.svg";
import brand2 from "assest/img/brand-2.svg";
import brand3 from "assest/img/brand-3.svg";
import brand4 from "assest/img/brand-4.svg";
import brand5 from "assest/img/brand-5.png";
import modelImg2 from "assest/img/border.svg";
import modelImg3 from "assest/img/model3.svg";
import modelImg4 from "assest/img/model4.svg";
import modelImg5 from "assest/img/model5.svg";
import modelImg6 from "assest/img/model6.svg";
import modelImg7 from "assest/img/model7.svg";
import logo1 from "assest/img/1024px-Zara_Logo1.svg";
import logo2 from "assest/img/1024px-Zara_Logo2.svg";
import filterIcon from "assest/img/filter.svg";

import Footer from "components/Footer/Footer";
import socialImg from "assest/img/image-product-8.svg";

const LayoutStyled = styled.div`
  /* position: relative; */
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background: #ffffff;
  hr {
    width: 100%;
    margin: 0 auto;
    max-width: 1320px;
    background: rgba(227, 227, 227, 1);
    height: 0px;
    border: 1px solid rgba(227, 227, 227, 1);
  }
`;

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  height: 59px;

  .shopping_icon {
    width: 20px;
    height: 19px;
    display: flex;
    align-items: center;
    text-align: center;

    /* Black */
    color: #1e2832;
  }
  .profile-icon {
    display: flex;
    width: 20px;
    height: 19px;
    font-family: "Font Awesome 6 Free";
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 20px;
    align-items: center;
    text-align: center;

    /* Black */

    color: #1e2832;
  }

  .text-header-profile {
    width: 67px;
    height: 21px;
    margin-left: 10.5px;
    /* p */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    text-transform: capitalize;

    /* Black */

    color: #1e2832;
  }
  .text-header-shoppingcart {
    width: 67px;
    height: 21px;
    margin-left: 10.5px;
    /* p */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    text-transform: capitalize;
    /* Black */
    color: #1e2832;
  }
  .search-Icon {
    box-sizing: border-box;
    width: 20px;
    height: 19px;
    font-family: "Font Awesome 6 Free";
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;

    /* Black */

    color: #1e2832;

    /* White */

    border: 0.5px solid #ffffff;
  }
  .header-middle {
    width: 179px;
    height: 50px;
    font-family: "AmstelvarAlpha";
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 50px;
    /* margin-left: 911px; */

    /* Dark */

    color: #000000;
  }
  .header-left {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    width: 25px;
    height: 25px;
    /* margin-left: 300px; */
  }
  .header-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 221px;
    height: 25px;
    /* margin-left: 1399.5px; */
  }
  .p2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100px;
    height: 25px;
    /* margin-left: 24.5px; */
  }
  .p1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100px;
    height: 25px;
  }
`;
const ContentStyled = styled.div`
  /* position: absolute; */
  justify-content: space-around;
  display: flex;
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  height: 562px;
  align-items: center;

  .title1 {
    /* position: absolute; */
    width: 360px;
    height: 55px;
    /* Body */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 74px;
    line-height: 55px;
    /* identical to box height, or 74% */

    text-transform: capitalize;

    /* Dark */

    color: #000000;
  }
  .desc1 {
    /* position: absolute; */
    width: 682px;
    height: 119px;
    /* Paragraph - Larg */
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 55px;
    text-align: left;
    /* or 183% */

    text-transform: capitalize;
    /* Dark */
    color: #000000;
  }
  .btn1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 223px;
    height: 72px;

    /* Black */

    background: #1e2832;
  }
  .btn-text-content {
    /* p - Larg */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 29px;
    line-height: 34px;
    /* identical to box height */
    background: #1e2832;
    border: none;
    text-transform: capitalize;

    /* White */

    color: #ffffff;
  }
  .content-right-top {
    position: relative;
    margin-left: 98px;
    width: 442px;
    height: 562px;
    display: flex;
  }
  .model1 {
    position: absolute;
    width: 424px;
    height: 542px;
    border-radius: 160px 0px;
    background: url(engin-akyurt.svg);
  }
  .model2 {
    position: absolute;
    /* position: absolute; */
    box-sizing: border-box;
    width: 424px;
    height: 542px;
    margin-left: 18px;
    margin-top: 20px;
    /* Dark 25 */

    border: 2px solid rgba(0, 0, 0, 0.25);
    border-radius: 160px 0px;
  }
  .content-left-top {
    width: 686px;
    height: 364px;
  }
`;
const ContentStyled2 = styled.div`
  /* position: absolute; */

  display: flex;
  width: 100%;
  height: 648px;
  max-width: 1320px;
  margin: 0 auto;
  justify-content: space-around;
  margin-top: 90px;
  /* left: 300px;
  top: 1097px; */
  .right-model {
    display: grid;
    grid-template-columns: auto auto;
    gap: 22px;
  }
  .left-model {
    position: relative;
    height: 648px;
    width: 648px;
    border-radius: 0px;
    background: url(model3.svg);
  }
  .text-content2 {
    position: absolute;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    text-transform: uppercase;

    /* Dark */

    color: #000000;
    top: 43%;
    left: -50%;
    transform: rotate(-90deg);
  }
`;

const WrapperBrandStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  gap: 80px;
  max-width: 1320px;

  /* position: absolute; */
  /* height: 70px;
  top: 937px; */
`;
const ContentStyled3 = styled.div`
  .text1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 59px;
    /* identical to box height */

    text-align: center;
    text-transform: capitalize;

    /* Dark */

    color: #000000;
  }
  .img-social {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1320px;
    margin: 0 auto;
    gap: 24px;
    list-style: none;
    justify-content: center;
    align-items: center;
  }
`;

const WrapperItemStyled = styled.div`
  .list-products {
    display: flex;
    flex-direction: row;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    text-transform: capitalize;
    justify-content: space-between;
    width: 100%;
    max-width: 1320px;
    align-items: center;
    /* Dark */
    margin: 0 auto;
    color: #000000;
  }
  .ul-products {
    gap: 40px;
    align-items: center;

    list-style-type: none;
    display: flex;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    text-transform: capitalize;

    /* Dark 50 */

    color: rgba(0, 0, 0, 0.5);
  }
  .list1 {
    flex-direction: row;
    display: flex;
  }
  .wrapper-item {
    grid-template-columns: auto auto auto auto;
    gap: 20px;
    justify-content: center;
    display: grid;
  }
  .text-content {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 59px;
    /* identical to box height */

    text-align: center;
    text-transform: capitalize;

    /* Dark */

    color: #000000;
  }
  .button::before {
    font-family: sans-serif;
    content: "▼";
    padding-left: 0.5em;
  }

  .button {
    background: #1e2832;
    text-transform: capitalize;
    letter-spacing: 0.05em;
    border: 0;
    padding: 5px 15px;
    gap: 4px;
    width: 92px;
    height: 32px;
    align-items: center;
    display: flex;
    color: #f5f5f5;
    cursor: pointer;
  }

  /* .button--highlight::after {
    content: "✓";
  } */
`;
const PrimaryLayout = ({ children }) => {
  return (
    <LayoutStyled>
      <HeaderStyled>
        <div className="header-left">
          <img classname="search-Icon" src={searchIcon} alt="searchicon"></img>
        </div>
        <p className="header-middle">Lisa Store</p>
        <div className="header-right">
          <div className="p1">
            <img className="profile_icon" src={profileIcon} alt="Profile" />
            <p className="text-header-profile">Account</p>
          </div>
          <div className="p2">
            <img
              classname="shopping_icon"
              src={shoppingIcon}
              alt="Shopping"
            ></img>
            <div className="text-header-shoppingcart">Shopping</div>
          </div>
        </div>
      </HeaderStyled>
      <hr />
      <ContentStyled>
        <div className="content-left-top">
          <p className="title1">Collections</p>
          <div>
            <p className="desc1">
              You can explore ans shop many differnt collection from various
              barands here.
            </p>
          </div>
          <div className="btn1">
            <img src={bagIcon} alt="Bag" />
            <button className="btn-text-content">Shop Now</button>
          </div>
        </div>
        <div className="content-right-top">
          <img className="model2" src={modelImg2} alt="model2" />
          <img className="model1" src={modelImg} alt="model" />
        </div>
      </ContentStyled>
      <ContentStyled2>
        <div className="left-model">
          <p className="text-content2">Explore new and popular styles</p>
          <img src={modelImg3} alt="model" />
        </div>
        <div className="right-model">
          <img src={modelImg4} alt="model" />
          <img src={modelImg5} alt="model" />
          <img src={modelImg6} alt="model" />
          <img src={modelImg7} alt="model" />
        </div>
      </ContentStyled2>
      <WrapperBrandStyled>
        <div>
          <img src={brand1} alt="Brand1" />
        </div>
        <div>
          <img src={brand2} alt="Brand2" />
        </div>
        <div>
          <img src={brand3} alt="Brand3" />
        </div>
        <div>
          <img src={brand4} alt="Brand4" />
        </div>
        <div>
          <img src={brand5} alt="Brand5" />
        </div>
      </WrapperBrandStyled>

      <WrapperItemStyled>
        <p className="text-content">Or subscribe to the newsletter</p>
        <div className="list-products">
          <div className="list1">
            <h2>All products</h2>
            <ul className="ul-products">
              <li>T-shirts</li>
              <li>hoodies </li>
              <li>Jacket</li>
            </ul>
          </div>
          <button id="filter-button" class="button">
            Filter
          </button>
        </div>

        <div className="wrapper-item">
          <Category
            image={modelImg5}
            descripton={"Adicolor Classics Joggers"}
            title={"Dress"}
            price={"13.22"}
          ></Category>
          <Category
            image={modelImg5}
            descripton={"Adicolor Classics Joggers"}
            title={"Dress"}
            price={"13.22"}
          ></Category>
          <Category
            image={modelImg5}
            descripton={"Adicolor Classics Joggers"}
            title={"Dress"}
            price={"13.22"}
          ></Category>
          <Category
            image={modelImg5}
            descripton={"Adicolor Classics Joggers"}
            title={"Dress"}
            price={"13.22"}
          ></Category>
          <Category
            image={modelImg5}
            descripton={"Adicolor Classics Joggers"}
            title={"Dress"}
            price={"13.22"}
          ></Category>
          <Category
            image={modelImg5}
            descripton={"Adicolor Classics Joggers"}
            title={"Dress"}
            price={"13.22"}
          ></Category>
          <Category
            image={modelImg5}
            descripton={"Adicolor Classics Joggers"}
            title={"Dress"}
            price={"13.22"}
          ></Category>
          <Category
            image={modelImg5}
            descripton={"Adicolor Classics Joggers"}
            title={"Dress"}
            price={"13.22"}
          ></Category>
        </div>
      </WrapperItemStyled>
      <Banner>
      </Banner>
      <ContentStyled3>
        <p className="text1">Follow products and discounts on Instagram</p>
        <div>
          <ul className="img-social">
            <li>
              <img src={socialImg} alt="About Page on Social" />
            </li>
            <li>
              <img src={socialImg} alt="About Page on Social" />
            </li>
            <li>
              <img src={socialImg} alt="About Page on Social" />
            </li>
            <li>
              <img src={socialImg} alt="About Page on Social" />
            </li>
            <li>
              <img src={socialImg} alt="About Page on Social" />
            </li>
            <li>
              <img src={socialImg} alt="About Page on Social" />
            </li>
          </ul>
          <p style={{ color: " #FF6F61" }}>@Lisa.Official</p>
        </div>
      </ContentStyled3>
      <Footer></Footer>
    </LayoutStyled>
  );
};
export default PrimaryLayout;
