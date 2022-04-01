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
  padding: 20px;
  width: 30%;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.65);

  form {
    display: flex;
    align-items: center;
    justify-content: space-around;
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
    background-color: #3c5aa6;
    color: white;

    height: 55px;

    :hover {
      background-color: white;
      color: #3c5aa6;
    }
  }
`;
