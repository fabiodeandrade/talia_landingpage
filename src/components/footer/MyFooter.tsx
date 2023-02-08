import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import "./MyFooterStyles.css";

export const MyFooter = () => {
  return (
    <footer>
      <div className="topFooter py-8 p-5 flex flex-col gap-5 md:flex-row">
        <div className="footerRow flex flex-col gap-3 w-1/2">
          <h1 className="text-white font-semibold">Careers</h1>
          <p className="text-slate-400 font-thin text-sm">
            Do you like technology and want to make an incredible career? See
            our job positions
          </p>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="green"
            variant="outline"
            size="xs"
          >
            Call us
          </Button>
        </div>
        <div className="footerRow flex flex-col gap-3 w-1/2">
          <h1 className="text-white font-semibold">Plataforms</h1>
          <p className="text-slate-400 font-thin text-sm">
            Become a TALiO partner in an easy, safe and fast way
          </p>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="green"
            variant="outline"
            size="xs"
          >
            Be a partner
          </Button>
        </div>
        <div className="footerRow flex flex-col gap-3 w-1/2">
          <h1 className="text-white font-semibold">Let's Talk</h1>
          <p className="text-slate-400 font-thin text-sm">
            Have a suggestion or just want to chat about TalIA? Contact
          </p>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="green"
            variant="outline"
            size="xs"
          >
            Let's Talk
          </Button>
        </div>
      </div>
      <div className="botFooter p-5 flex flex-col items-center justify-center ">
        <p className="text-slate-400 font-thin text-sm">
          © TalIA Fábio de Andrade - 2023 - 2023 - All rights reserved
        </p>
        <p className="text-slate-400 font-thin text-sm">Our politics</p>
        <p className="text-slate-400 font-thin text-sm">
          Quality Management Policy
        </p>
      </div>
    </footer>
  );
};
