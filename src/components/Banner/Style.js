import styled from "styled-components";
import wallpaper from "../../assets/wallpaper.png";

export const ContainerBanner = styled.section`
  width: 100%;
  height: 65vh;

  background-image: url(${wallpaper});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: end;
  box-sizing: border-box;
  padding-bottom: 25px;
`;
