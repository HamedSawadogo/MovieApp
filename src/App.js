import "./App.css";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import PlantItems from "./components/PlantItems";
import { useEffect, useState } from "react";
import { useFetch } from "./hooks/UseFetch";

function App() {
  const [sort, setSort] = useState("");

  const montant = window.localStorage.amount;
  const [amount, setAmount] = useState(montant ? parseFloat(montant) : 0);
  const [pannier, setPannier] = useState([]);

  useEffect(() => {
    window.localStorage.amount = amount;
  }, [amount]);
  const { loading, data, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=tomato"
  );
  console.log(loading, data, error);
  return (
    <div className="App">
      {loading ? <p>loading...</p> : <p>chargement ...</p>}
      <Banner>
        <h2>Plant App </h2>
        <img style={{ height: 60 }} src="./logo192.png" alt="" />
      </Banner>
      <small>achetez vos plantes les plus belles chez Plant UIX Manager</small>
      <Cart pannier={pannier} setPannier={setPannier} />
      <select name="option" onChange={(e) => setSort(e.target.value)}>
        <optgroup>
          <option value="prix">trier par prix croissant</option>
          <option value="water">trier par prix decroissant</option>
        </optgroup>
      </select>
      <PlantItems
        sortElement={sort}
        pannier={pannier}
        setPannier={setPannier}
        amount={amount}
        setAmount={setAmount}
      />
    </div>
  );
}

export default App;
