import { Link } from "react-router-dom";
import logo2 from "../../assets/icon_tangy/logo2.png";
import { SpanType } from "../../styles/components/span";
import {
  Container,
  FlexLogo,
  LogoWrapper,
  TangyIcon,
  TangyTitle,
} from "./LogoTangy.styled";

interface LogoType {
  readonly type?: boolean;
}

export function LogoTangy({ type = false }: LogoType) {
  return (
    <Link to="/">
      <Container $type={type}>
        <LogoWrapper>
          <TangyIcon $type={type} src={logo2} alt="Tangy Logo" />
          <FlexLogo
            $type={type}
            $direction={"column"}
            $align={"center"}
            $justify={"center"}
            $gap={"none"}
          >
            <TangyTitle variant="inherit">碳吉學院</TangyTitle>
            <SpanType $size={"xs"}>TANJI ACADEMY</SpanType>
          </FlexLogo>
        </LogoWrapper>
      </Container>
    </Link>
  );
}
