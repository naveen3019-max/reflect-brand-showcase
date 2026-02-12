import { motion } from "framer-motion";
import productShirt from "@/assets/product-shirt.jpg";
import productJeans from "@/assets/product-jeans.jpg";
import productTshirt from "@/assets/product-tshirt.jpg";
import productJacket from "@/assets/product-jacket.jpg";
import productChinos from "@/assets/product-chinos.jpg";
import productPolo from "@/assets/product-polo.jpg";

const products = [
  { name: "Oxford Noir Shirt", price: "₹2,490", image: productShirt },
  { name: "Indigo Slim Jeans", price: "₹3,190", image: productJeans },
  { name: "Essential White Tee", price: "₹1,290", image: productTshirt },
  { name: "Olive Bomber Jacket", price: "₹4,990", image: productJacket },
  { name: "Charcoal Chinos", price: "₹2,790", image: productChinos },
  { name: "Navy Polo", price: "₹1,890", image: productPolo },
];

const WHATSAPP_NUMBER = "919999999999"; // Replace with actual number

const ProductShowcase = () => {
  return (
    <section id="collection" className="py-20 md:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Curated Selection
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground">
            The Collection
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden bg-secondary aspect-[3/4] mb-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-body text-sm font-medium tracking-wide text-foreground">
                    {product.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mt-1">
                    {product.price}
                  </p>
                </div>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in the ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 font-body text-[10px] tracking-[0.15em] uppercase border border-foreground/20 text-foreground px-4 py-2 hover:bg-foreground hover:text-primary-foreground transition-all duration-300 mt-0.5"
                >
                  Enquire
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
