import "./translations/i18n";
import React from "react";
import PlatformProvider from "./platform/chakra";
import Home from "./pages/home/HomePage";
import { Provider } from "react-redux";
import { store } from "./redux/Store";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <PlatformProvider>
        <Home />
      </PlatformProvider>
    </Provider>
  );
}

export default App;
