import { PriceCards } from "../cards/PriceCards";
import "./pricingStyles.css";
import { motion } from "framer-motion";

export const Pricing = () => {
  return (
    <section className="pricing py-16">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}
      >
        <div className="pricingWrapInfo mb-5">
          <h1 className="text-white font-black text-4xl text-center">
            Our Pricing
          </h1>
          <p className="text-white text-center">
            We offer the best prices on the market
          </p>
        </div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="prices p-3 flex flex-wrap items-center justify-center gap-5"
        >
          <PriceCards
            title="Free"
            description="For individual CEOs"
            price="0"
            advantage1="1 GB storage"
            advantage2="1 dashboard"
            advantage3="1 admin user"
            advantage4="Cloud repository"
            styles={false}
          />

          <PriceCards
            title="Premium"
            description="For a small team"
            price="16"
            advantage1="5 GB storage"
            advantage2="3 dashboard"
            advantage3="10 admin users"
            advantage4="Cloud repository"
            styles={true}
          />

         
            <PriceCards
              title="Ultimate"
              description="For a large companies"
              price="99"
              advantage1="100 GB storage"
              advantage2="Unlimited dashboard"
              advantage3="Unlimited admin users"
              advantage4="Cloud and local repository"
              styles={false}
            />
          
        </motion.div>
      </motion.div>
    </section>
  );
};
