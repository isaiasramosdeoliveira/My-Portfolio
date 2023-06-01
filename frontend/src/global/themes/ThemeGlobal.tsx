import { createGlobalStyle } from "styled-components";

const ThemeGlobal = createGlobalStyle`
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body{
  position: relative;
  overflow:hidden;
}
a{
  text-decoration:none;
}
li{
  list-style: none;
}
`;

export default ThemeGlobal;
