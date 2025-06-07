import {
  About,
  Hero,
  Works,
  Skills,
  CustomCursor,
  Timeline,
  StickyGradient,
  Navbar,
} from "./components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import * as chakra from "@chakra-ui/react";
import ContextProvider from "./Context";
import { Home } from "./components/pages/Home";
import ContactForm from "./components/pages/ContactForm";


function App() {
  return (
    <ContextProvider>
      <StickyGradient />
      <CustomCursor />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
