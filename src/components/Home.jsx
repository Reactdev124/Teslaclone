import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        data="Order Online for Touchless Delivery"
        leftbtn="CUSTOM ORDER"
        rightbtn="EXISTING INVENTORY"
        image="./model-s.jpg"
      />

      <Section
        title="Model Y"
        data="Order Online for Touchless Delivery"
        leftbtn="CUSTOM ORDER"
        rightbtn="EXISTING INVENTORY"
        image="./model-y.jpg"
      />

      <Section
        title="Model X"
        data="Order Online for Touchless Delivery"
        leftbtn="CUSTOM ORDER"
        rightbtn="EXISTING INVENTORY"
        image="./model-x.jpg"
      />

      <Section
        title="Model 3"
        data="Order Online for Touchless Delivery"
        leftbtn="CUSTOM ORDER"
        rightbtn="EXISTING INVENTORY"
        image="./model-3.jpg"
      />

      <Section
        title="Lowest Cost Solar Panels In India"
        data="Money back guarrentee"
        leftbtn="Order Now"
        rightbtn="Learn More"
        image="./solar-panel.jpg"
      />

      <Section
        title="Solar for New Roofs"
        data="Solar Roof Costs Less Than a New Roof"
        leftbtn="Order Now"
        rightbtn="Learn More"
        image="./solar-roof.jpg"
      />

      <Section
        title="Accessories"
        data="Solar Roof Costs Less Than a New Roof"
        leftbtn="Shop Now"
        rightbtn=""
        image="./accessories.jpg"
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100rem;
`;
