import "./HeroStyles.css";
import { Button } from "@chakra-ui/react";
import heroImg from "../../assets/heroimg.png";

export const Hero = () => {
  return (
    <>
      <section className="hero p-5 flex flex-col justify-center items-center py-16 md:flex-row md:justify-around">
        <div className="left w-4/5 flex flex-col gap-7 my-7 md:w-1/3">
          <h1 className="text-white font-black text-4xl text-center md:text-left">
            Your AI to{" "}
            <span className="gradient">
              check data from your app and business
            </span>
          </h1>
          <p className="text-white text-center  md:text-left">
            Let artificial intelligence help you make the best decision within
            your company, which will bring benefits to your business and
            especially to your customer
          </p>
          <div className="buttons flex items-center justify-center gap-3 md:justify-start">
            <Button colorScheme="green">Try free </Button>
            <Button colorScheme="green" variant="outline">
              Download TalIA
            </Button>
          </div>
        </div>
        <div className="rigthContent py-9 flex md:w-2/4">
          <img src={heroImg} alt="Talia Dashboard IA working" />
        </div>
      </section>
    </>
  );
};
