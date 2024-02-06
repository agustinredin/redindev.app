import { Hero, ScrollAnim, Works } from "./components";
import * as chakra from '@chakra-ui/react'
import ContextProvider from "./Context";

function App() {
  return (
    <ContextProvider>
      <Hero/>
      <Works/>
    </ContextProvider>
  );
}

export default App;