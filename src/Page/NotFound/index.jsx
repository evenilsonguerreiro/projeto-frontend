import { Link } from "react-router-dom";
import { NotFoundContainer } from "./style";

const NotFound = () => {
  return (
    <>
      <NotFoundContainer>
        <h6>Página não encontrada</h6>
        <span>404</span>
        <Link to="/">Voltar</Link>
      </NotFoundContainer>
    </>
  );
};

export default NotFound;
