import { media_medio_desktop, media_mini_tablet, media_mobile, media_tablet } from "global/media-query/media-query";
import { ThemeDark, ThemeLight } from "global/themes/Modes/Modes";
import { useAppSelector } from "hook/hooks";
import styled, { ThemeProvider } from "styled-components";

interface IContainer {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  ${media_medio_desktop}
  ${media_tablet}
  ${media_mini_tablet}
  ${media_mobile}
`;
export default ({ children }: IContainer) => {
  const { mode } = useAppSelector(state => state.modeReducer)
  return (
    <ThemeProvider theme={mode == "dark"? ThemeDark : ThemeLight}>
      <Container id="Container">{children}</Container>
    </ThemeProvider>
  );
};
