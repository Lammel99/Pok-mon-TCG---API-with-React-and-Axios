import axios from 'axios';


const apiSets = axios.create({
    baseURL: "https://api.pokemontcg.io/v2/sets",
    headers: { "X-Api-Key": "c34280d4-eee4-4fc7-87ea-9472dc4c5ad5" },
  });

  export default apiSets;