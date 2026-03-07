import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Minus, Plus, ShoppingBag, Heart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import ProductCard from "@/components/ProductCard";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="pt-24 pb-20 container text-center">
        <h1 className="font-heading text-3xl font-bold">Product not found</h1>
        <Link to="/shop" className="text-primary mt-4 inline-block">Back to shop</Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize);
    }
    toast.success(`${product.name} added to bag!`);
  };

  return (
    <main className="pt-24 pb-20">
      <div className="container">
        {/* Breadcrumb */}
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-[3/4] overflow-hidden rounded-xl bg-secondary"
          >
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              {product.isNew && (
                <span className="bg-primary text-primary-foreground text-[10px] font-heading font-bold tracking-widest px-3 py-1 rounded-sm">NEW</span>
              )}
              {product.originalPrice && (
                <span className="bg-destructive text-destructive-foreground text-[10px] font-heading font-bold tracking-widest px-3 py-1 rounded-sm">SALE</span>
              )}
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-black tracking-tight">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className={i < Math.round(product.rating) ? "fill-primary text-primary" : "text-muted-foreground"} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mt-6">
              <span className="font-heading text-3xl font-black">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
              )}
              {product.originalPrice && (
                <span className="bg-destructive/20 text-destructive text-xs font-bold px-2 py-1 rounded-sm">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>

            <p className="mt-6 text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Colors */}
            <div className="mt-6">
              <h3 className="font-heading font-bold text-sm tracking-widest mb-3">COLORS</h3>
              <div className="flex gap-2">
                {product.colors.map(color => (
                  <span key={color} className="px-4 py-2 border border-border rounded-sm text-sm text-foreground bg-secondary">
                    {color}
                  </span>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mt-6">
              <h3 className="font-heading font-bold text-sm tracking-widest mb-3">SIZE</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-11 min-w-[44px] px-4 border rounded-sm text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-foreground hover:border-foreground/50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="mt-8 flex gap-4">
              <div className="flex items-center border border-border rounded-md">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 text-muted-foreground hover:text-foreground">
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 text-muted-foreground hover:text-foreground">
                  <Plus size={16} />
                </button>
              </div>
              <Button onClick={handleAddToCart} size="lg" className="flex-1 font-heading font-bold tracking-widest text-sm h-12">
                <ShoppingBag className="mr-2" size={18} /> ADD TO BAG
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-4 border-border text-foreground hover:bg-secondary hover:text-foreground">
                <Heart size={18} />
              </Button>
            </div>

            {/* Info pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["Free Shipping", "Easy Returns", "Secure Checkout"].map(info => (
                <span key={info} className="text-xs text-muted-foreground border border-border rounded-full px-4 py-2">
                  {info}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="font-heading text-2xl md:text-3xl font-black tracking-tighter mb-8">YOU MIGHT ALSO LIKE</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;
