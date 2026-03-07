import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      {/* Marquee */}
      <div className="overflow-hidden border-b border-border py-4">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="font-heading text-6xl font-black tracking-tighter text-muted-foreground/10">
              DRIPHAUS ★
            </span>
          ))}
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link to="/" className="font-heading text-2xl font-black tracking-tighter">
              <span className="text-gradient-neon">DRIP</span>
              <span className="text-foreground">HAUS</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Premium streetwear for those who dare to stand out. Born in the streets, made for the culture.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm tracking-widest mb-4">SHOP</h4>
            <ul className="space-y-2">
              {["Hoodies", "Tees", "Bottoms", "Sneakers", "Jackets", "Accessories"].map(item => (
                <li key={item}>
                  <Link to={`/shop?category=${item.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm tracking-widest mb-4">INFO</h4>
            <ul className="space-y-2">
              {["About Us", "Contact", "Shipping", "Returns", "FAQ"].map(item => (
                <li key={item}>
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm tracking-widest mb-4">NEWSLETTER</h4>
            <p className="text-sm text-muted-foreground mb-4">Get early access to drops & exclusive offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-secondary border border-border rounded-l-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground font-heading font-bold text-xs tracking-widest px-4 rounded-r-md hover:opacity-90 transition-opacity">
                JOIN
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 DRIPHAUS. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {["Instagram", "TikTok", "Twitter"].map(social => (
              <span key={social} className="text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
