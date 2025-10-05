const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Sri Durgas Vocational Training Institute</h3>
          <p className="text-primary-foreground/80 mb-4">
            Empowering creativity, building futures
          </p>
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Sri Durgas Vocational Training Institute. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
