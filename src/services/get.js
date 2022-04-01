import api from "./api";
import apiSets from "./ApiSets";

export const getCards = (name, page) => {
  try {
    return api
      .request({
        params: {
          q: name && `name:${name}*`,
          pageSize: "20",
          orderBy: "set.releaseDate",
          page: `${page}`,
        },
      })
      
  } catch (error) {
    Response.reject(error);
  }
};

export const getSets = () =>{
  try {
    return apiSets
      .request({
        method: 'get',
        params:{
          orderBy: 'releaseDate'
        }
      })
      
  } catch (error) {
    Response.reject(error);
  }
};