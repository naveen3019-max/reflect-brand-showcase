import { motion } from "framer-motion";

const StoreLocation = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Visit Us
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground">
            The Store
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-square lg:aspect-auto lg:min-h-[400px] bg-secondary"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5!2d72.83!3d19.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzEyLjAiTiA3MsKwNDknNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Reflect Clothing store location"
            />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-10">
              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                  Address
                </p>
                <p className="font-body text-base text-foreground leading-relaxed">
                  123 Fashion Street, Linking Road
                  <br />
                  Bandra West, Mumbai — 400050
                </p>
              </div>

              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                  Opening Hours
                </p>
                <p className="font-body text-base text-foreground leading-relaxed">
                  Monday — Saturday: 11:00 AM – 9:00 PM
                  <br />
                  Sunday: 12:00 PM – 8:00 PM
                </p>
              </div>

              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                  Contact
                </p>
                <p className="font-body text-base text-foreground">
                  +91 99999 99999
                </p>
                <p className="font-body text-base text-muted-foreground">
                  hello@reflectclothing.in
                </p>
              </div>

              <a
                href="https://wa.me/919999999999?text=Hi, I'd like to know more about Reflect Clothing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-body text-xs tracking-[0.25em] uppercase bg-foreground text-primary-foreground px-10 py-4 hover:bg-accent hover:text-accent-foreground transition-all duration-500"
              >
                Message Us on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocation;
