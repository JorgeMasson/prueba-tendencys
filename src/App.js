import "./translations/i18n";
import PlatformProvider from "./platform/chakra";
import Home from "./pages/home/HomePage";

function App() {
  return (
    <PlatformProvider>
      <Home />
    </PlatformProvider>
  );
}

export default App;
