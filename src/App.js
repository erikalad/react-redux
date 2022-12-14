import React from "react";

import Favorites from "./components/Favorites/Favorites";
import Buscador from "./components/Buscador/Buscador";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";
import Carrousel from "./components/Carrousel/Carrousel";
import Footer from "./components/Footer/Footer";
import Contactarme from "./components/Contactame/Contactame";
import Recursos from "./components/Recursos/Recursos";

function App() {
  return (
      <React.Fragment>
          <NavBar />
          <Route exact path="/">
            <Carrousel />
            <Buscador />
          </Route>
          <Route path="/favs" component={Favorites} />
          <Route path="/movie/:aux" component={Movie} />
          <Route path="/contactarme" component={Contactarme} />
          <Route path="/recursos" component={Recursos} />
          <Footer />
      </React.Fragment>
  );
}

export default App;
