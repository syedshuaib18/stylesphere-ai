import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Minus, Plus, X, ShoppingBag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const CartPage = () => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  return (
    <main className="pt-24 pb-20">
      <div className="container max-w-4xl">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft size={16} /> Continue shopping
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-4xl font-black tracking-tighter mb-8"
        >
          YOUR BAG ({items.reduce((s, i) => s + i.quantity, 0)})
        </motion.h1>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag size={64} className="mx-auto text-muted-foreground mb-4" />
            <p className="font-heading text-2xl font-bold text-muted-foreground">Your bag is empty</p>
            <Button asChild className="mt-6 font-heading font-bold tracking-widest">
              <Link to="/shop">START SHOPPING</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map(item => (
                <motion.div
                  key={`${item.product.id}-${item.size}`}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex gap-6 border-b border-border pb-6"
                >
                  <Link to={`/product/${item.product.id}`}>
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-32 w-28 rounded-lg object-cover bg-secondary"
                    />
                  </Link>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <Link to={`/product/${item.product.id}`}>
                        <h3 className="font-heading font-bold hover:text-primary transition-colors">{item.product.name}</h3>
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">Size: {item.size}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                          className="h-8 w-8 flex items-center justify-center border border-border rounded-sm text-muted-foreground hover:text-foreground"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                          className="h-8 w-8 flex items-center justify-center border border-border rounded-sm text-muted-foreground hover:text-foreground"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-heading font-bold text-lg">${item.product.price * item.quantity}</span>
                        <button onClick={() => removeItem(item.product.id, item.size)} className="text-muted-foreground hover:text-destructive">
                          <X size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              <button onClick={clearCart} className="text-sm text-muted-foreground hover:text-destructive transition-colors">
                Clear all items
              </button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-xl p-6 space-y-4 sticky top-24">
                <h2 className="font-heading text-xl font-bold">ORDER SUMMARY</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${totalPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{totalPrice >= 150 ? "FREE" : "$12"}</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between font-heading font-bold text-lg">
                    <span>Total</span>
                    <span>${totalPrice >= 150 ? totalPrice : totalPrice + 12}</span>
                  </div>
                </div>
                <Button className="w-full h-12 font-heading font-bold tracking-widest text-sm">
                  PROCEED TO CHECKOUT
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  {totalPrice < 150 && `Add $${150 - totalPrice} more for free shipping`}
                  {totalPrice >= 150 && "🎉 You qualify for free shipping!"}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default CartPage;
