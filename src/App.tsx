import "./App.css";
import { MyHeader } from "./components/header/MyHeader";
import { ChakraProvider } from "@chakra-ui/react";
import { Hero } from "./components/hero/Hero";
import { Advantages } from "./components/advantages/Advantages";
import { Mobility } from "./components/mobility/Mobility";
import { Pricing } from "./components/princing/Pricing";
import { MyFooter } from "./components/footer/MyFooter";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <ChakraProvider resetCSS={true}>
        <div className="wrapper">
          <MyHeader />
          <Hero />
          <Advantages />
          <Mobility />
          <Pricing />
          <MyFooter />
        </div>
      </ChakraProvider>
    </>
  );
}

export default App;
