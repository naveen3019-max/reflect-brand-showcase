import { motion } from "framer-motion";

const categories = ["Shirts", "Jeans", "T-Shirts", "New Arrivals"];

const CategoryStrip = () => {
  return (
    <section className="py-12 border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center gap-8 md:gap-16 overflow-x-auto">
          {categories.map((cat, i) => (
            <motion.a
              key={cat}
              href="#collection"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 whitespace-nowrap relative group"
            >
              {cat}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryStrip;
