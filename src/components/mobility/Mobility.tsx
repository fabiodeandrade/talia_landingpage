import "./MobilityStyles.css";
import mockup from "../../assets/mockus.png";
import { motion } from "framer-motion";

export const Mobility = () => {
  return (
    <section className="mobility w-full flex flex-col py-16 items-center justify-center">
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}
        className="mobilityWrap w-4/5 mt-7 flex flex-col gap-5 items-center justify-center"
      >
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <h1 className="text-white text-center font-black text-4xl">
            Monitor TALIA from{" "}
            <span className="gradient">anywhere anytime with any device</span>.
            It works when you need it.
          </h1>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex w-full items-center justify-center"
        >
          <p className="text-white text-center w-4/5">
            Practiced at any moment of your day, with TalIA you can take action
            in the most critical moments of your company
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <img src={mockup} alt="Mockuop" className="my-11" />
        </motion.div>
      </motion.div>
    </section>
  );
};
