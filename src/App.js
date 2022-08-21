import Home from "./components/Home";
import CoinDetail from "./components/CoinDetail";
import { BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom";

import './App.css'

function App() {

    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} exact />
            <Route path="/CoinPage/:id" element={<CoinDetail/>} exact />
          </Routes>
        </Router>
      </div>
    );
  }

export default App;
