import React from "react";
import styled from "styled-components";
import { plantList } from "../datas/plantList";
import Plant from "./Plant";

const PlantItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 250px);
  margin: 0 auto;
  justify-content: center;
`;

const PlantItems = ({
  sortElement,
  amount,
  setAmount,
  pannier,
  setPannier,
}) => {
  return (
    <PlantItemsWrapper>
      {plantList
        .sort((a, b) => {
          if (sortElement === "prix") {
            return a.price - b.price;
          } else {
            return b.price - a.price;
          }
        })
        .map((plant) => (
          <Plant
            amount={amount}
            setAmount={setAmount}
            plant={plant}
            key={plant.id}
            pannier={pannier}
            setPannier={setPannier}
          />
        ))}
    </PlantItemsWrapper>
  );
};

export default PlantItems;
