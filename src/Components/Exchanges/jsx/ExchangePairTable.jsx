import * as React from "react";
import { MDBDataTable } from "mdbreact";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ExchangePair() {
  const [allTickers, setAllTickers] = React.useState([]);
  let params = useParams();
  console.log(params);
  React.useEffect(() => {
    axios
      .get(
        `https://api.coinstats.app/public/v1/tickers?exchange=${params.exchangeValue}`
      )
      .then((res) => {
        setAllTickers(res.data.tickers);
        console.log(res.data.tickers);
      })
      .catch((err) => console.log(err));
  }, []);

  const data = {
    columns: [
      {
        field: "id",
        label: "id",
        width: "1000px",
        sort: "asc",
      },
      {
        field: "from",
        label: "From",
        width: "1000px",
        sort: "asc",
      },
      {
        field: "to",
        label: "To",
        width: "1000px",
        sort: "asc",
      },
      { field: "price", label: "Price", width: "1000px", sort: "asc" },
    ],
    rows: getRows(),
  };

  function getRows() {
    let rows = allTickers?.map((item, index) => {
      return {
        id: index + 1,
        from: item.from,
        to: item.to,
        price: item.price,
      };
    });
    return rows;
  }

  return (
    <div style={{ maxWidth: "100%" }}>
      <MDBDataTable striped bordered small data={data} />
    </div>
  );
}

// {"from":"007","to":"BTC","exchange":"Yobit","price":0.00002931}
