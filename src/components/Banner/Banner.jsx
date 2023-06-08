import styled from "styled-components";
import bannerModel from "assest/img/banner.svg";
import logo1 from "assest/img/1024px-Zara_Logo1.svg";
import logo2 from "assest/img/1024px-Zara_Logo2.svg";
import backgroundModel from "assest/img/background.svg";
const BannerStyled = styled.div`
flex-direction: row;
display: flex;
width: 100%;
justify-content: space-around;
.banner {
  }
  .text{
    color: #FF6F61;
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 40px;
/* or 154% */

text-transform: capitalize;
  }
  .right-banner {
    position: absolute;
    margin-left: 1038px;
  }
  .left-banner {
background-color: black;
    position: relative;
    width: 100%;
    margin: 0 auto;
  
  }
  .text2 {
    color: #ff6f61;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 40px;
    width: 504px;
    height: 187px;
    /* or 154% */
    text-transform: capitalize;
    text-align: left;
  }
  .collection {
    flex-direction: row;
justify-content: center;
align-items: center;
padding: 19px 26px;
gap: 8px;
width: 237px;
height: 72px;
  }
`;

const Banner = () => {
  return (
    <BannerStyled>
   <div className="left-banner">
        <img src={backgroundModel} alt="Page-banner-model" />
        </div>
      <div className="right-banner">
      <img src={logo2} alt="Logo-ZARA" />
        <img src={logo1} alt="Logo-ZARA" />
        <p className="text2">Lustrous yet understated. The new evening
wear collection exclusively offered at the
reopened Giorgio Armani boutique in Los
Angeles.</p>
       
        <button className="collection" >See Collection</button>
      </div>
    </BannerStyled>
  );
};
export default Banner;
