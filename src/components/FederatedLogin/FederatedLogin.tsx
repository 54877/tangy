import google from "../../assets/icon_tangy/google.png";
import fb from "../../assets/icon_tangy/facebook.png";
import ig from "../../assets/icon_tangy/IG.png";
import { FlexType } from "../../styles/components/flex";
import { SpanType } from "../../styles/components/span";
import { ButtonSec, Icon } from "./FederatedLogin.styled";

interface Type {
  readonly location?: "up" | "down";
}

export function Federated({ location = "up" }: Type) {
  return (
    <>
      {location == "up" && (
        <FlexType style={{ width: "100%" }}>
          <hr style={{ width: "100%" }} />
          <SpanType>or</SpanType>
          <hr style={{ width: "100%" }} />
        </FlexType>
      )}
      <ButtonSec
        textStyle={{ width: "200px", textAlign: "start" }}
        icon_left={<Icon src={google} alt="Google" />}
        text={"Continue with Google "}
      />
      <ButtonSec
        textStyle={{ width: "200px", textAlign: "start" }}
        icon_left={<Icon src={fb} alt="fb" />}
        text={"Continue with FaceBook "}
      />
      <ButtonSec
        textStyle={{ width: "200px", textAlign: "start" }}
        icon_left={<Icon src={ig} alt="ig" />}
        text={"Continue with Instagram "}
      />
      {location == "down" && (
        <FlexType style={{ width: "100%" }}>
          <hr style={{ width: "100%" }} />
          <SpanType>or</SpanType>
          <hr style={{ width: "100%" }} />
        </FlexType>
      )}
    </>
  );
}
