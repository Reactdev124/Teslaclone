import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import useGlobalcontext from "./Context";

const Header = () => {
  const [normalstate, setstate] = useState(false);

  const Namedata = useGlobalcontext();
  const dataloop = Namedata.name;

  return (
    <HeaderContainer>
      <a href="#">
        <img src="./logo.svg" alt="HEADER" />
      </a>

      <Menubar>
        {dataloop.map((dataname) => (
          <p>
            <a href="#">{dataname}</a>
          </p>
        ))}
      </Menubar>

      <Rightmenu>
        <a href="#">Shop</a>
        <a href="#">tesla account</a>
        <Mymenuicon onClick={() => setstate(true)} />
      </Rightmenu>

      <Burgermenu show={normalstate}>
        <Divwrapper>
          <Customclose onClick={() => setstate(false)} />
        </Divwrapper>
        <li>
          <a href="#">Model 3</a>
        </li>
        <li>
          <a href="#">Model S</a>
        </li>
        <li>
          <a href="#">Model X</a>
        </li>
        <li>
          <a href="#">Model Y</a>
        </li>
        <li>
          <a href="#">Cyber Truck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
      </Burgermenu>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menubar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    flex-wrap: nowrap;
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Rightmenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    align-items: center;
  }
`;

const Mymenuicon = styled(MenuIcon)`
  cursor: pointer;
`;

const Burgermenu = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  background: white;
  width: 300px;
  text-align: center;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.4s;

  li {
    padding-top: 50px;
  }

  a {
    font-weight: 600;
  }
`;

const Customclose = styled(CancelIcon)`
  cursor: pointer;
`;

const Divwrapper = styled.div`
  text-align: right;
  /* padding-top: 14px; */
  margin: 15px;
`;
