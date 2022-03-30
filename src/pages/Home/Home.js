import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import axios from "axios";
import { ContainerHome } from "./Style";

const Home = () => {
  const [cards, setCards] = React.useState("");
  const [filteredCards, setFilteredCards] = React.useState(cards);

  useEffect(() => {
    const getCards = async () => {
      const response = await axios
        .request({
          url: "https://api.pokemontcg.io/v2/cards?orderBy=number/",
          headers: { "X-Api-Key": "c34280d4-eee4-4fc7-87ea-9472dc4c5ad5" },
          params: { orderBy: "set.releaseDate" },
        })
        .then((response) => setCards(response.data.data));
    };
    getCards();
  }, []);


  return (
    <div>
      <Header />
      <ContainerHome>
        {cards &&
          cards.map((card) => (
            <div>
              <p>{card.name}</p>
              <img src={card.images.small} />
            </div>
          ))}
      </ContainerHome>
    </div>
  );
};

export default Home;
