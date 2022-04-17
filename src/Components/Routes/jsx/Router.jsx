import { Route, Routes } from "react-router-dom";
import Home from "../../Home/jsx/Home";
import ExchangePair from "../../Exchanges/jsx/ExchangePairTable";

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/exchanges/:exchangeValue" element={<ExchangePair />} />
    </Routes>
  );
}

export default Router;
