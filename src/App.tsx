import { Button, ButtonOutlined } from "./components/Button";
import AddIcon from "@mui/icons-material/Add";
import { LinkPrimary } from "./components/Link";
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
          <LinkPrimary text={"測試"} />
        </div>
      </section>
    </>
  );
}

export default App;
