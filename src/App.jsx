import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./routes";
import { ConfigProvider } from "antd";

function App() {
  return (
    <>
      <ConfigProvider>
        <GlobalStyles />
        <Routes />
      </ConfigProvider>
    </>
  );
}

export default App;
