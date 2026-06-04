import { Link } from "react-router-dom";
import tangyIcon from "../../assets/icon_tangy/tangy-1.png";
import { TangyIcon, TangyLogoBox, TangyTitle } from "./LogoTangy.styled";

export function LogoTangy() {
  return (
    <>
      <Link to="/">
        <TangyLogoBox>
          <TangyIcon src={tangyIcon} alt="Tangy Logo" />
          <TangyTitle variant="inherit">碳吉學院</TangyTitle>
        </TangyLogoBox>
      </Link>
    </>
  );
}
