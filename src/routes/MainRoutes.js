import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../components/GlobalStyle/GlobalStyle";
import Home from "../pages/Home/Home";
import MasterPage from "../components/MasterPage/MasterPage";
import PokemonList from "../pages/PokemonList/PokemonList";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <MasterPage>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ='/lista' element={<PokemonList/>}/>
        </Routes>
      </MasterPage>
    </BrowserRouter>
  );
};

export default MainRoutes;
