import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import axios from "axios";
import { ContainerHome, ContainerList } from "./Style";
import SearchPokemon from "./SearchPokemon";
import api from "../../services/api";
import { getCards, Cards, getSets } from "../../services/get";
import { Pagination } from "@mui/material";
import { setNestedObjectValues } from "formik";
import Banner from "../../components/Banner/Banner";
const Home = () => {
  const [cards, setCards] = React.useState("");
  const [filteredCards, setFilteredCards] = React.useState(cards);
  const [searchName, setSearchName] = React.useState("");
  const [sets, setSets] = React.useState("");
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    getCards(searchName, page).then((response) => setCards(response.data));
  }, [searchName, page]);

  useEffect(() => {
    getSets().then((response) => setSets(response));
  }, []);

  console.log(sets.data);

  console.log(cards.data);

  return (
    <div>
      <Header />
      <Banner>
        <SearchPokemon sendData={setSearchName} />
      </Banner>
      <ContainerHome>
        <ContainerList>
          {cards != "" ? (
            cards.data.map((card) => (
              <div key={card.id}>
                {card.images.small ? (
                  <img src={card.images.small} />
                ) : (
                  <p>Loading </p>
                )}
              </div>
            ))
          ) : (
            <p>Loading</p>
          )}
        </ContainerList>
        <Pagination
          defaultPage={1}
          count={Math.round(cards.totalCount / 20)}
          page={page}
          onClick={(event) => setPage(event.target.textContent)}
        />
      </ContainerHome>
    </div>
  );
};

export default Home;
