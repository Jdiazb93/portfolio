import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import Main from "@pages/mainPage";
import "./locale/index";
import "primeicons/primeicons.css";

function App() {
  const value = {
    zIndex: {
      modal: 1100,
      overlay: 1000,
      menu: 1000,
      tooltip: 1100,
      toast: 1200,
    },
    autoZIndex: true,
    ripple: true,
  };

  return (
    <PrimeReactProvider
      value={{
        unstyled: true,
        pt: Tailwind,
        zIndex: value.zIndex,
        autoZIndex: value.autoZIndex,
        ripple: value.ripple,
      }}
    >
      <Main />
    </PrimeReactProvider>
  );
}

export default App;
