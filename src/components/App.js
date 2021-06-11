import "./App.css";
import Header from "./Header";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddCurrency from "./AddCurrency";
import ConvertCurrency from "./ConvertCurrency";
const BASE_URL = "https://api.exchangeratesapi.io/latest";
export default function App() {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route path="/add" component={AddCurrency} />
          <Route path="/" component={() => <ConvertCurrency />} />
        </Switch>
      </Router>

      {/* <AddCurrency addCurrencyHandler={addCurrencyHandler} /> */}
    </div>
  );
}
