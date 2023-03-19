import React from "react";
import styled from "styled-components";

const PlantWripper = styled.div`
  margin: 10px;
  height: 350px;
  border-radious: 35px;
  padding: 5px;
  border: 1px solid whitesmoke;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
`;
const Image = styled.img`
  height: 60%;
  width: 100%;
`;
const Plant = ({ plant, amount, setAmount, pannier, setPannier }) => {
  const handleAdded = () => {
    const exists = pannier.filter((pl) => {
      return pl.id === plant.id;
    });
    if (exists.length > 0) {
      setAmount(amount + plant.price * plant.quantity);
      return;
    }
    console.log(exists);
    const newPannier = [
      ...pannier,
      {
        id: plant.id,
        name: plant.name,
        price: plant.price,
        quantity: 1,
      },
    ];
    console.log(newPannier);
    setAmount(amount + plant.price);
    setPannier(newPannier);
  };

  return (
    <PlantWripper>
      <Image src={plant.cover} alt="image de plante" />
      <h3>{plant.name}</h3>
      <small>{plant.categorie}</small>
      <p>{plant.bestSale ? "💧 " : "💧💦 "}</p>
      <span>prix: {plant.price} €</span>
      <button type="button" onClick={() => handleAdded()}>
        ajouter au panier
      </button>
    </PlantWripper>
  );
};

export default Plant;
