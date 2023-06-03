import "normalize.css";
import Loading from "components/Loading/Loading";
import React, {lazy, Suspense} from "react";
import { Outlet } from "react-router-dom";
const Container = lazy(() => import("./components/Container/Container"));
const Content = lazy(() => import("./components/Content/Content"));
const Menu = lazy(() => import("./components/Menu/Menu"));
const ButtonTheme = lazy(() => import("global/themes/ButtonTheme/ButtonTheme"));
const Message = lazy(() => import("components/Message/Message"));

function App() {
  return (
    <div style={{ overflow: "hidden" }} className="App">
      <Container>
        <Suspense fallback={<Loading/>}>
          <Menu />
          <Message />
          <Content>
            <Outlet />
          </Content>
          <ButtonTheme />
        </Suspense>
      </Container>
    </div>
  );
}

export default App;
