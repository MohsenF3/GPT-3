import "./App.css";
import Brand from "./components/brand/Brand";

import { Navbar, CTA } from "./components/index";
import {
  Header,
  WhatGPT3,
  Features,
  Possibilities,
  Blog,
  Footer,
} from "./pages/index";

function App() {
  return (
    <>
      <div className="app">
        <div className="gradient-bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibilities />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App;
