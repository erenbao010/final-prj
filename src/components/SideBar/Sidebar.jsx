import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledSideBar = styled.div``;
const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
export const SideBar = () => {
  return (
    <StyledSideBar>
      <div className="flex flex-wrap justify-between">
        <NavLink to="/">
          <span className="">Home</span>
        </NavLink>
        <NavLink to="/list">
          <span className="">Shopping List</span>
        </NavLink>
        <NavLink to="*">
          <span className="">Error page</span>
        </NavLink>

        <div className="">PROFILE</div>

        <div className="">Other</div>
      </div>
    </StyledSideBar>
  );
};

export default SideBar;
