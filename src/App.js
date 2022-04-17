import Header from "./Components/Header/jsx/Header";
import Router from "./Components/Routes/jsx/Router";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
