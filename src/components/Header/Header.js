import React from "react";
import logo from "../../assets/logo.png";
import { Container, Icons } from "./Style";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import GithubLogo from "../../assets/github.png";
const Header = () => {
  return (
    <Container>
      <nav>
        <img src={logo} />

        <ul>
          <li>Cartas</li>

          <li>Minha coleção</li>
        </ul>
        <Icons>
          <a href="https://github.com/Lammel99/Lammel99">
            <img src={GithubLogo} />
          </a>
          <a href="https://www.instagram.com/mateus_lammel/"></a>
        </Icons>
      </nav>
    </Container>
  );
};

export default Header;
