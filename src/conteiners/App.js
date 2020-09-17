import React from 'react';
import '../styles/App.css';
import ViewComponents from './ViewComponents';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
   <Router>
     <Route exact path="/" component={ViewComponents} />
   </Router>
  );
}

export default App;
