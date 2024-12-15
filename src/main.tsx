import "./index.css";
import Root from "./root/root";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./components/ui/provider";
import StaffListProvider from "./context/StaffListDataTable";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <StaffListProvider>
          <Root />
        </StaffListProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
