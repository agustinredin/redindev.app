import { About, Hero, Works, Skills, CustomCursor, Timeline, StickyGradient, Navbar } from "./components";
import * as chakra from '@chakra-ui/react'
import ContextProvider from "./Context";

function App() {
  return (
    <ContextProvider>
      <StickyGradient/>
      <CustomCursor />
      <Navbar/>
      <Hero/>
      <Works/>
      <Timeline/>
      <Skills/>
      <About/>
    </ContextProvider>
  );
}

export default App;