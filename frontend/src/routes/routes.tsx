import { createBrowserRouter, useNavigate } from "react-router-dom";
import App from "../App";
import PageMain from "../pages/PageMain/PageMain";
import PageAboutMe from "../pages/PageAboutMe/PageAboutMe";
import PageCertification from "../pages/PageCertification/PageCertification";
import PageProjects from "../pages/PageProjects/PageProjects";
import PageSkills from "../pages/PageSkills/PageSkills";
import PageContacts from "../pages/PageContacts/PageContacts";
import Button from "components/Button/Button";
import error from "../assets/imgs/404.png";
import styled from "styled-components";
import PageProject from "pages/PageProject/PageProject";
import PageSettings from "pages/PageSettings/PageSettings";

const Error = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  h1 {
    font-size: 125px;
    margin: 0;
  }
  img {
    width: 350px;
  }
  p {
    margin: 20px 0px;
  }
`;
const PageError = () => {
  const navigate = useNavigate();
  const handleError = () => navigate(-1);
  return (
    <Error>
      <h1>404</h1>
      <img src={error} alt="imagem de 404" />
      <p>Parece que nos perdemos.</p>
      <Button functions={handleError} text="Voltar"></Button>
    </Error>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageError />,
    children: [
      { path: "/", element: <PageMain /> },
      { path: "/aboutme", element: <PageAboutMe /> },
      { path: "/certifications", element: <PageCertification /> },
      { path: "/projects", element: <PageProjects /> },
      { path: "/projects/:id", element: <PageProject /> },
      { path: "/skills", element: <PageSkills /> },
      { path: "/contacts", element: <PageContacts /> },
      { path: "/settings", element: <PageSettings /> },
      { path: "*", element: <PageError /> },
    ],
  },
]);

export default router;
