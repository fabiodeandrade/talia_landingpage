import { MainCard } from "../cards/MainCard";
import "./advantagesStyles.css";
import { motion } from "framer-motion";
import adv from "../../assets/adv.mp4";

export const Advantages = () => {
  return (
    <section className="advantages duration-500 transition-opacity w-full flex flex-col flex-wrap items-center justify-center gap-6 py-16">
      <div className="videobg">
        <video autoPlay muted loop>
          <source src={adv} type="video/mp4" />
        </video>
      </div>
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}
      >
        <div className="advantagesInfo flex flex-col gap-5 items-center justify-center mb-9">
          <h1 className="text-white text-center font-black text-4xl">
            Advantages to <span className="gradient">use</span>
          </h1>
          <p className="text-white text-center w-4/5">
            In addition to bringing all the intelligence you need, Talia also
            solves other infrastructure problems for your company
          </p>
        </div>
        <div className="cardsArea w-full flex flex-wrap items-center justify-center gap-7">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <MainCard
              title="Easy"
              description="Easy to use, even for people who don't have any contact with technology, the learning curve is very low."
            />
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <MainCard
              title="Security"
              description="Data security and privacy is our main motto, with Talia you are safe in all areas of your company."
            />
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 1 }}
          >
            <MainCard
              title="Aanalytics"
              description="Easy to use, even for people who don't have any contact with technology, the learning curve is very low."
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
