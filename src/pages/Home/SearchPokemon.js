import React from "react";
import { useFormik } from "formik";
import { FormControl, TextField, Button } from "@mui/material";
import { ContainerSearch } from "./Style";

const SearchPokemon = (props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      props.sendData(values.name);
    },
  });

 




  return (
    <ContainerSearch>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          type="text"
          label="Pesquisar pelo nome..."
          id="name"
          variant="outlined"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />



        <Button variant="contained" type="submit">
         Pesquisar
        </Button>
      </form>
    </ContainerSearch>
  );
};

export default SearchPokemon;
