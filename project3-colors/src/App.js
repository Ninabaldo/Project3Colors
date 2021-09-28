import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  NavBar from "./Components/NavBar";
import  Home from "./Components/Home";
import Footer from "./Components/Footer"
import PaleteColors from "./Components/PaleteColor";

//Afegir cada pagina a app.js
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
       
        <Switch>
          <Route path="/" exact component={() => <Home/>} />
          <Route path="/paletes" exact component={() => <PaleteColors/>} />

        </Switch>
        <Footer/>
       
      </Router>
    </div>
  );
}

export default App;
