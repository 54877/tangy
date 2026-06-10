import { Link } from "react-router-dom";
import { TangyIcon, TangyLogoBox, TangyTitle } from "./LogoTangy.styled";
import logo2 from "../../assets/icon_tangy/logo2.png";
import { FlexType } from "../../styles/components/flex";
import { SpanType } from "../../styles/components/span";
export function LogoTangy() {
  return (
    <>
      <Link to="/">
        <TangyLogoBox>
          <TangyIcon src={logo2} alt="Tangy Logo" />
          <FlexType
            $direction={"column"}
            $align={"center"}
            $justify={"center"}
            $gap={"none"}
          >
            <TangyTitle variant="inherit">碳吉學院</TangyTitle>
            <SpanType $size={"xs"}>TANJI ACADEMY</SpanType>
          </FlexType>
        </TangyLogoBox>
      </Link>
    </>
  );
}
