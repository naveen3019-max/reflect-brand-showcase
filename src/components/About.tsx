import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6"
          >
            Our Story
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-8"
          >
            Confidence Is Not Worn.
            <br />
            It's Carried.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto"
          >
            Reflect Clothing is built for the modern man who values quality over quantity.
            Every piece is crafted with precision — designed to fit your life, not just your body.
            Clean lines. Premium fabrics. Timeless style.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 w-12 h-px bg-accent mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
