import logoHeader from "../../assets/imagens/logoHeader.png";
import { LogoContainer } from "./style";

const Logo = () => {
  return (
    <>
      <LogoContainer>
        <img src={logoHeader} alt="logo" />
      </LogoContainer>
    </>
  );
};

export default Logo;
