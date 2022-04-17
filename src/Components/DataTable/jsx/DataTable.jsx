import React from "react";
import "../css/DataTable.css";
import ProductTable from "./ProductTable";

export default function DataTable({ data, selectedFiat }) {
  console.log(selectedFiat);
  return (
    <div className="App">
      <ProductTable dataToDisplay={data} selectedFiat={selectedFiat} />
    </div>
  );
}
