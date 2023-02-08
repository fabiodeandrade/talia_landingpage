import "./PriceCardsStyles.css";
import { CheckIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

interface PriceCard {
  title: string;
  description: string;
  price: string;
  advantage1: string;
  advantage2: string;
  advantage3: string;
  advantage4: string;
  styles: boolean;
}

export const PriceCards: React.FC<PriceCard> = ({
  title,
  description,
  price,
  advantage1,
  advantage2,
  advantage3,
  advantage4,
  styles,
}) => {
  return (
    <div
      className={
        styles
          ? "priceCard rounded-3xl p-3 stylyes"
          : "priceCard rounded-3xl p-3"
      }
    >
      <div className="topCard flex flex-col items-start">
        <h1 className="text-white text-5xl font-semibold">{title}</h1>
        <p className="text-white font-thin mb-6">{description}</p>
      </div>
      <div className="middleCard flex flex-col gap-1 py-3">
        <div className="middleRow">
          <CheckIcon color="green" boxSize={3} />
          <p className="text-white">{advantage1}</p>
        </div>
        <div className="middleRow">
          <CheckIcon color="green" boxSize={3} />
          <p className="text-white">{advantage2}</p>
        </div>
        <div className="middleRow">
          <CheckIcon color="green" boxSize={3} />
          <p className="text-white">{advantage3}</p>
        </div>
        <div className="middleRow">
          <CheckIcon color="green" boxSize={3} />
          <p className="text-white">{advantage4}</p>
        </div>
      </div>
      <div className="botCard flex flex-col gap-3">
        <h1 className="text-white">
          <span
            className={
              styles ? "font-bold stylyes text-3xl" : "font-bold text-3xl"
            }
          >
            ${price}
          </span>{" "}
          /mounth
        </h1>
        <Button colorScheme={styles ? "gray" : "green"}>Buy Now</Button>
      </div>
    </div>
  );
};
