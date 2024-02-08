import { Hero, ScrollAnim, Works, CustomCursor } from "./components";
import * as chakra from '@chakra-ui/react'
import ContextProvider from "./Context";

function App() {
  return (
    <ContextProvider>
      <CustomCursor />
      <Hero/>
      <Works/>
    </ContextProvider>
  );
}

export default App;