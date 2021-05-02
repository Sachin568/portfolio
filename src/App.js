import React from "react";
import './App.css';
import Navibars from "./components/navbar/navbar.component";
import Carousels from "./components/carousels/carousels.component";
import Titlemessages from "./components/messages/messages.component";

const App = () => {
  return (

    <div>
      <Navibars />
      <Carousels />
      <Titlemessages />
    </div>
  );

};

export default App;
