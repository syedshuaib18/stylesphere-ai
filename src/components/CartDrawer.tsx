import { useCart } from "@/contexts/CartContext";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CartDrawer = () => {
  const { items, removeItem, updateQuantity, totalPrice, isCartOpen, setIsCartOpen } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />
          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md border-l border-border bg-background flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border p-6">
              <h2 className="font-heading text-xl font-bold">YOUR BAG</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X size={24} />
              </button>
            </div>

            {/* Items */}
            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 p-6">
                <ShoppingBag size={48} className="text-muted-foreground" />
                <p className="text-muted-foreground font-heading text-lg">Your bag is empty</p>
                <Button onClick={() => setIsCartOpen(false)} asChild>
                  <Link to="/shop">START SHOPPING</Link>
                </Button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {items.map(item => (
                    <div key={`${item.product.id}-${item.size}`} className="flex gap-4 border-b border-border pb-4">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-24 w-20 rounded-md object-cover bg-secondary"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-heading font-semibold text-sm leading-tight">{item.product.name}</h3>
                          <p className="text-xs text-muted-foreground mt-1">Size: {item.size}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                              className="h-7 w-7 flex items-center justify-center border border-border rounded-sm text-muted-foreground hover:text-foreground"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                              className="h-7 w-7 flex items-center justify-center border border-border rounded-sm text-muted-foreground hover:text-foreground"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-heading font-bold">${item.product.price * item.quantity}</span>
                            <button onClick={() => removeItem(item.product.id, item.size)} className="text-muted-foreground hover:text-destructive">
                              <X size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="border-t border-border p-6 space-y-4">
                  <div className="flex justify-between font-heading text-lg font-bold">
                    <span>TOTAL</span>
                    <span>${totalPrice}</span>
                  </div>
                  <Button className="w-full h-12 font-heading font-bold tracking-widest text-sm" onClick={() => setIsCartOpen(false)} asChild>
                    <Link to="/cart">CHECKOUT</Link>
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
