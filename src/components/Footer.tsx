const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-heading text-xl tracking-wide text-foreground">
            REFLECT
          </p>
          <p className="font-body text-xs tracking-wide text-muted-foreground">
            © 2025 Reflect Clothing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
