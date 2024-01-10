import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store/store.ts";
import { App } from "./app/App.tsx";
import { StyledEngineProvider } from "@mui/material/styles";
import "./shared/styles/styles-global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </Provider>
  </BrowserRouter>
);
