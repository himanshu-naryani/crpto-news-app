import React, { useState } from "react";
import axios from "axios";
import DataTable from "../../DataTable/jsx/DataTable";
import { Navigate } from "react-router-dom";
import "../css/Home.css";

function Home() {
  const [data, setData] = useState([]);
  //Fiats
  const [selectedFiat, setSelectedFiat] = React.useState({
    name: "",
    symbol: "",
  });
  const [allFiats, setAllFiats] = React.useState([]);

  //Exchanges
  const [allExchanges, setAllExchanges] = React.useState([]);
  const [selectedExchange, setSelectedExchange] = useState("");

  React.useEffect(() => {
    axios
      .get("https://api.coinstats.app/public/v1/fiats")
      .then((res) => {
        let fiatData = res.data.map((item) => ({ ...item, isFav: false }));
        setAllFiats(fiatData);
        let defaultFiat = res.data.find((item) => item.name === "INR");
        if (defaultFiat) {
          setSelectedFiat({
            name: defaultFiat.name,
            symbol: defaultFiat.symbol,
          });
        }
      })
      .catch((err) => console.log(err));

    axios
      .get("https://api.coinstats.app/public/v1/coins?skip=0")
      .then((res) => {
        setData(res.data.coins);
        console.log(res.data.coins[1]);
      })
      .catch((err) => console.log(err));

    axios
      .get("https://api.coinstats.app/public/v1/exchanges")
      .then((res) => {
        console.log(res.data.supportedExchanges);
        setAllExchanges(res.data.supportedExchanges);
      })
      .catch((err) => console.log(err));
  }, []);

  function getSymbol(selectedFiatValue) {
    let selectedFiatSymbol = "";
    allFiats.forEach((item) => {
      if (item.name === selectedFiatValue) {
        selectedFiatSymbol = item.symbol;
        return;
      }
    });
    return selectedFiatSymbol;
  }

  function onFiatChangeHandler(e) {
    let selectedFiatValue = e.target.value;
    console.log();
    setSelectedFiat({
      name: selectedFiatValue,
      symbol: getSymbol(selectedFiatValue),
    });
  }

  function onExchangeChangeHandler(e) {
    setSelectedExchange(e.target.value);
  }

  if (selectedExchange) {
    return <Navigate to={`/exchanges/${selectedExchange}`} />;
  }

  return (
    <div id="home-wrapper">
      <div className="filter-wrapper">
        <label>
          Fait:
          <select
            value={selectedFiat.name}
            name="fiats"
            onChange={(e) => onFiatChangeHandler(e)}
          >
            {allFiats?.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}({item.symbol})
              </option>
            ))}
          </select>
        </label>

        <label>
          Exchanges:
          <select
            value={selectedExchange}
            name="exchanges"
            onChange={(e) => onExchangeChangeHandler(e)}
          >
            <option value="select">Select...</option>
            {allExchanges?.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      {data.length > 0 && (
        <DataTable data={data} selectedFiat={selectedFiat}></DataTable>
      )}
    </div>
  );
}

export default Home;
