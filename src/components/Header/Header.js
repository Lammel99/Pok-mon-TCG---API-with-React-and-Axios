import React from "react";
import logo from "../../assets/logo.png";
import { Navigation, ConteinerHeader, Icons } from "./Style";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <ConteinerHeader>
      <nav>
        <img src={logo} />

        <ul>
          <Link to="/lista">
            {" "}
            <li>Cartas</li>
          </Link>
          <li>Minha coleção</li>
        </ul>

        <Icons>
          <a href="https://github.com/Lammel99/Lammel99">
            {" "}
            <GitHubIcon />
          </a>

          <a href="https://www.instagram.com/mateus_lammel/">
            {" "}
            <InstagramIcon />
          </a>
        </Icons>
      </nav>
    </ConteinerHeader>
  );
};

export default Header;
