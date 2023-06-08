import modelImg5 from "assest/img/model5.svg";
import filterIcon from "assest/img/filter.svg";
import styled from "styled-components";
import React from "react";
import {ReactComponent as Heart} from "assest/img/heartIcon.svg";
import {ReactComponent as Search} from "assest/img/searchIcon.svg";
import {ReactComponent as Shopping} from "assest/img/shoppingIcon.svg";
const StyledCard = styled.div`
   position: relative;
 width: 100%;
 height: 100%;
 :hover{
  .hover-img{
  display: flex;
  background-color:black;
  margin-bottom: 60px;
  }
}
img{
  width: 100%;
  
}
.hover-img{
  display: none;
  width: 100%;
 height: 55px;
  position: absolute;
  background-color: #000000;
  bottom: 0;
  justify-content: center;
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
  .list1 {
    flex-direction: row;
    display: flex;
  }
  .desc2 {
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
`;
const Category = ({ image, title, price, descripton }) => {
  return (
    <StyledCard>
        <img src={image} alt="" />
      <div className="hover-img">
        <Heart></Heart>
        <Search/>
        <Shopping/>
        <button style={{background:"black", color:"white", border:"none"}}> Shop Now</button>
      </div>
      <div className="descripton">{descripton}</div>
      <div class="card">{title}</div>
      <div>{price}</div>
    </StyledCard>
  );
};
export default Category;
