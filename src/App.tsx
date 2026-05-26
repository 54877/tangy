import AddIcon from "@mui/icons-material/Add";
import { Button, ButtonOutlined } from "./components/Button/Button";
import { LinkPrimary } from "./components/Link/Link";

function App() {
  return (
    <>
      <section id="center">
        <h1>Get started</h1>
        <div style={{ margin: "16px" }}>
          <Button
            style={{ marginBottom: "16px" }}
            icon_left={<AddIcon />}
            text={"測試"}
          />
          <ButtonOutlined
            style={{ marginBottom: "16px" }}
            disabled={true}
            icon_left={<AddIcon />}
            text={"測試"}
          />
          <LinkPrimary to={""} text={"測試"} icon_left={<AddIcon />} />
        </div>
      </section>
    </>
  );
}

export default App;
