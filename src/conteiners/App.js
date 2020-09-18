import React from "react";
import "../styles/App.css";
import "../styles/componentes/Register.css";
import "../styles/componentes/Search.css";
import "../styles/componentes/Carousel.css";
import "../styles/componentes/Menu.css";
import "../styles/componentes/Gallery.css";
import "../styles/componentes/BestFlowers.css";
import "../styles/componentes/Exclusive.css";
import "../styles/componentes/Contact.css";
import ViewComponents from "./ViewComponents";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={ViewComponents} />
    </Router>
  );
}

export default App;
