import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";

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
      <div>content</div>
    </PrimeReactProvider>
  );
}

export default App;
