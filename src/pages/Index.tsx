import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-streetwear.jpg";
import categoryHoodies from "@/assets/category-hoodies.jpg";
import categorySneakers from "@/assets/category-sneakers.jpg";
import categoryBottoms from "@/assets/category-bottoms.jpg";
import categoryAccessories from "@/assets/category-accessories.jpg";

const trendingProducts = products.filter(p => p.isTrending);
const newProducts = products.filter(p => p.isNew);

const categoryImages = [
  { name: "HOODIES", image: categoryHoodies, slug: "hoodies" },
  { name: "SNEAKERS", image: categorySneakers, slug: "sneakers" },
  { name: "BOTTOMS", image: categoryBottoms, slug: "bottoms" },
  { name: "ACCESSORIES", image: categoryAccessories, slug: "accessories" },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <img
          src={heroImage}
          alt="Streetwear fashion"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="container relative z-10 pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-primary text-primary-foreground font-heading font-bold text-xs tracking-[0.3em] px-4 py-2 rounded-sm mb-6">
              NEW SEASON DROP
            </span>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter">
              WEAR THE
              <br />
              <span className="text-gradient-neon">CULTURE</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Premium streetwear built for those who move different. Limited drops, unlimited attitude.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg" className="font-heading font-bold tracking-widest text-sm h-14 px-8">
                <Link to="/shop">SHOP NOW <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-heading font-bold tracking-widest text-sm h-14 px-8 border-foreground/20 text-foreground hover:bg-foreground/10 hover:text-foreground">
                <Link to="/shop?category=hoodies">NEW ARRIVALS</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Banner */}
      <section className="border-y border-border py-4 overflow-hidden bg-primary">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="font-heading text-lg font-black tracking-[0.3em] text-primary-foreground">
              FREE SHIPPING OVER $150 ★ NEW DROPS WEEKLY ★ EXCLUSIVE MEMBERS ONLY ★
            </span>
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl font-black tracking-tighter mb-10"
        >
          SHOP BY CATEGORY
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categoryImages.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/shop?category=${cat.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden rounded-lg"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/30 group-hover:bg-background/50 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-xl md:text-2xl font-black tracking-widest text-foreground">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trending */}
      <section className="container pb-20">
        <div className="flex items-end justify-between mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-5xl font-black tracking-tighter"
          >
            TRENDING NOW 🔥
          </motion.h2>
          <Link to="/shop" className="text-sm font-heading font-bold tracking-widest text-primary hover:underline hidden md:block">
            VIEW ALL <ArrowRight className="inline ml-1" size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trendingProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-secondary/50 border-y border-border">
        <div className="container py-20">
          <div className="flex items-end justify-between mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-5xl font-black tracking-tighter"
            >
              JUST DROPPED ⚡
            </motion.h2>
            <Link to="/shop" className="text-sm font-heading font-bold tracking-widest text-primary hover:underline hidden md:block">
              VIEW ALL <ArrowRight className="inline ml-1" size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {newProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-neon p-12 md:p-20 text-center"
        >
          <h2 className="font-heading text-3xl md:text-6xl font-black tracking-tighter text-primary-foreground">
            JOIN THE MOVEMENT
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-lg mx-auto">
            Sign up for exclusive drops, early access, and member-only discounts.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-primary-foreground/20 border border-primary-foreground/30 rounded-md px-6 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 w-72"
            />
            <Button variant="secondary" size="lg" className="font-heading font-bold tracking-widest text-sm h-12">
              SUBSCRIBE
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Index;
