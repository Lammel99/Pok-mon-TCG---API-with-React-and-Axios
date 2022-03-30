import styled from "styled-components";

export const ConteinerHeader = styled.div`
  height: 125px;
  padding: 0 5%;

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  border-bottom: solid thin #2a75bb;

  nav {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }

  img {
    width: 180px;
  }

  ul {
    display: flex;
    flex-flow: row nowrap;
    gap: 20px;
    list-style: none;
  }

  li {
    color: #2a75bb;
  }
`;
