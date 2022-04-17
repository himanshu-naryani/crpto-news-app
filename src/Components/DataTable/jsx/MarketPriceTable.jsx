import * as React from "react";
import { MDBDataTable } from "mdbreact";

export default function MarketPriceTable({ coinData }) {
  const data = {
    columns: [
      {
        field: "id",
        label: "id",
        width: "1000px",
        sort: "asc",
      },
      {
        field: "exchange",
        label: "Exchange",
        width: "1000px",
        sort: "asc",
      },
      { field: "pair", label: "Pair", width: "1000px", sort: "asc" },
      {
        field: "pairPrice",
        label: "Pair Price",
        width: "1000px",
        sort: "asc",
      },
      {
        field: "price",
        label: "Price",
        type: "number",
        width: "1000px",
        sort: "asc",
      },
      {
        field: "volume",
        label: "Volume",
        width: "1000px",
        sort: "asc",
      },
    ],
    rows: getRows(coinData),
  };

  function getRows(coinData) {
    let rows = coinData.map((item, index) => {
      return {
        id: index,
        exchange: item.exchange,
        pair: item.pair,
        pairPrice: item.pairPrice,
        price: item.price,
        volume: item.volume,
      };
    });
    return rows;
  }

  return (
    <div style={{ width: "100%" }}>
      <MDBDataTable striped bordered small data={data} />
    </div>
  );
}
