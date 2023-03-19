import React, { useState } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background: green;
  color: white;
  padding: 10px;
  margin: 10px auto;
`;
const Cart = ({ pannier, setPannier }) => {
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const total = pannier.reduce(
    (acc, reduc) => acc + reduc.price * reduc.quantity,
    0
  );
  const handleCalc = (e) => {
    setQuantity(e.target.value);
  };
  return open ? (
    <CardWrapper style={{ transition: 0.3 }}>
      <h3>Total: {total}€</h3>
      <ul>
        {pannier.map((el) => (
          <li key={el.id}>
            {el.name} prix: {el.price * quantity} €
            <input
              defaultValue={1}
              type="number"
              id={el.id}
              name=""
              value={quantity}
              onChange={(e) => handleCalc(e)}
            />
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => setOpen(false)}>
        fermer la pannier
      </button>
    </CardWrapper>
  ) : (
    <button type="button" onClick={() => setOpen(true)}>
      ouvrir le pannier
    </button>
  );
};

export default Cart;
