import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { ContainerHome, ContainerList } from "./Style";
import SearchPokemon from "./SearchPokemon";
import { getCards } from "../../services/get";
import { Pagination } from "@mui/material";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  const [cards, setCards] = React.useState("");
  const [searchName, setSearchName] = React.useState("");
  const [sets, setSets] = React.useState("");
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    getCards(searchName, page).then((response) => setCards(response.data));
  }, [searchName, page]);

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
          count={Math.round(cards.totalCount / 20) || 0}
          page={page}
          onClick={(event) => setPage(event.target.textContent)}
        />
      </ContainerHome>
    </div>
  );
};

export default Home;
