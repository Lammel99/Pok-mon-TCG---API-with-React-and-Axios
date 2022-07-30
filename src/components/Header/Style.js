import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  padding: 0 10%;
  box-sizing: border-box;
  background-color: #f5f5f5;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  border-bottom: solid thin #2a75bb;
  position: sticky;
  top: 0;
  z-index: 10000;

  nav {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    align-items: center;
  }

  img {
    width: 100px;
    justify-self: start;
  }

  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;

    list-style: none;

    a {
      text-decoration: none;
    }
  }

  li {
    font-size: 1rem;
    color: #3c5aa6;
    font-weight: bold;

    cursor: pointer;
    border-bottom: solid medium transparent;

    :hover {
      border-bottom: solid medium #c7a008;
    }
  }
`;
export const Icons = styled.div`
  justify-self: end;
  display: flex;
  gap: 15px;
  align-items: center;

  img {
    width: 20px;
  }
`;
