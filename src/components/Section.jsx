import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

const Section = ({ title, data, leftbtn, rightbtn, image }) => {
  return (
    <>
      <Wrapper image={image}>
        <Fade bottom cascade>
          <Itemtext>
            <h1>{title}</h1>
            <p>{data}</p>
          </Itemtext>
        </Fade>

        <Buttons>
          <Fade bottom cascade>
            <ButtonGroup>
              <Leftbutton>{leftbtn}</Leftbutton>

              {rightbtn && <Rightbutton>{rightbtn}</Rightbutton>}

              <Downarrow src="./down-arrow.svg" />
            </ButtonGroup>
          </Fade>
        </Buttons>
      </Wrapper>
    </>
  );
};

export default Section;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Itemtext = styled.div`
  padding-top: 15vh;
  text-align: center;
  font-weight: 700;
  font-style: bold;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 35px;
  cursor: pointer;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Leftbutton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  font-style: bold;
`;

const Rightbutton = styled(Leftbutton)`
  background: white;
  color: black;
`;

const Downarrow = styled.img`
  margin-top: 20px;
  height: 50px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;
const Buttons = styled.div``;
