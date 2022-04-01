import styled from "styled-components";

export const ContainerHome = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 50px;
  width: 100%;
 
  padding: 50px 0;
  box-sizing: border-box;
`;
export const ContainerList = styled.div`
  background-color: blue;
  width: 80%;
  background-color: aliceblue;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 25px;
  box-sizing: border-box;

  div {
    width: 100%;

    box-sizing: border-box;
  }

  img {
    width: 100%;

    :hover {
      box-shadow: 0px 0px 10px 1px rgba(129, 129, 129, 0.51);
    }
  }
`;

export const ContainerSearch = styled.div`
  box-sizing: border-box;
  padding: 25px;
  width: 30%;

  form {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  input {
    color: #3c5aa6;
    outline: #3c5aa6;
    background-color: white;
    border-radius: 5px;
  }
  label {
    color: #3c5aa6;
  }

  button {
    background-color: #f5f5f5;
    color: #3c5aa6;

    height: 55px;

    :hover {
      background-color: #3c5aa6;
      color: white;
    }
  }
`;
