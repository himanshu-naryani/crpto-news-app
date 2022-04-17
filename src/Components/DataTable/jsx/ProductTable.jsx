import axios from "axios";
import React from "react";
import useSortableData from "./useSortableData";
import { currencyConversion } from "../../../Utilities/utilities";
import MarketPriceTable from "./MarketPriceTable";

const ProductTable = ({ dataToDisplay, selectedFiat }) => {
  const [dataLength, setDataLength] = React.useState(20);
  const [openAccordianForId, setOpenAccordianForId] = React.useState("");
  const [coinData, setCointData] = React.useState({});
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const { items, requestSort, sortConfig } = useSortableData(dataToDisplay);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  function veiwMore() {
    setDataLength((prevValue) => prevValue + 20);
  }

  function openAccordian(id) {
    // console.log(id);

    if (!isModalOpen) {
      axios
        .get(`https://api.coinstats.app/public/v1/markets?coinId=${id}`)
        .then((res) => {
          setOpenAccordianForId(id);
          setCointData(res.data);
          setIsModalOpen((prev) => !prev);
        })
        .catch((err) => console.log(err));
    } else {
      setIsModalOpen((prev) => !prev);
    }
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <button
                type="button"
                onClick={() => requestSort("rank")}
                className={`tb-head ${getClassNamesFor("rank")}`}
              >
                Rank
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("name")}
                className={`tb-head ${getClassNamesFor("name")}`}
              >
                Name
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("price")}
                className={`tb-head ${getClassNamesFor("price")}`}
              >
                Price
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("marketCap")}
                className={`tb-head ${getClassNamesFor("marketCap")}`}
              >
                Market Cap
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("totalSupply")}
                className={`tb-head ${getClassNamesFor("totalSupply")}`}
              >
                Supply
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("volume")}
                className={`tb-head ${getClassNamesFor("volume")}`}
              >
                Volume
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("priceChange1h")}
                className={`tb-head ${getClassNamesFor("priceChange1h")}`}
              >
                Change 1h
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("priceChange1d")}
                className={`tb-head ${getClassNamesFor("priceChange1d")}`}
              >
                Change 1d
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("priceChange1w")}
                className={`tb-head ${getClassNamesFor("priceChange1w")}`}
              >
                Change 1w
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.slice(0, dataLength).map((item, key) => (
            <React.Fragment key={item.id}>
              <tr
                onClick={() => {
                  openAccordian(item.id);
                }}
              >
                <td>{item.rank}</td>
                <td>{item.name}</td>
                <td>
                  {`${selectedFiat.symbol} `}
                  {currencyConversion(item.price, selectedFiat.name)}
                </td>
                <td>
                  {`${selectedFiat.symbol} `}
                  {currencyConversion(item.marketCap, selectedFiat.name)}
                </td>
                <td>
                  {`${selectedFiat.symbol} `}
                  {currencyConversion(item.totalSupply, selectedFiat.name)}
                </td>
                <td>
                  {`${selectedFiat.symbol} `}
                  {currencyConversion(item.volume, selectedFiat.name)}
                </td>
                <td>{item.priceChange1h}%</td>
                <td>{item.priceChange1d}%</td>
                <td>{item.priceChange1w}%</td>
              </tr>
              {isModalOpen && openAccordianForId === item.id ? (
                <tr>
                  <td colSpan={10}>
                    <MarketPriceTable coinData={coinData} />
                  </td>
                </tr>
              ) : null}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      {dataLength !== dataToDisplay.length ? (
        <button id="veiw-more-btn" onClick={() => veiwMore()}>
          Veiw More
        </button>
      ) : null}
    </div>
  );
};

export default ProductTable;
