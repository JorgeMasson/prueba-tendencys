import "./translations/i18n";
import PlatformProvider from "./platform/chakra";
import Home from "./pages/home/HomePage";
import { Provider } from "react-redux";
import { store } from "./redux/Store";

function App() {
  return (
    <PlatformProvider>
      <Provider store={store}>
        <Home />
      </Provider>
    </PlatformProvider>
  );
}

export default App;
