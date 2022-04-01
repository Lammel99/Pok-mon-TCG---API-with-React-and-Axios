import React from "react";
import { ContainerBanner } from "./Style";
const Banner = (props) => {
  return <ContainerBanner>{props.children}</ContainerBanner>;
};

export default Banner;
