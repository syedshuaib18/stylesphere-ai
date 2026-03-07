import productHoodie1 from "@/assets/product-hoodie-1.jpg";
import productPants1 from "@/assets/product-pants-1.jpg";
import productTee1 from "@/assets/product-tee-1.jpg";
import productSneakers1 from "@/assets/product-sneakers-1.jpg";
import productJacket1 from "@/assets/product-jacket-1.jpg";
import productAccessory1 from "@/assets/product-accessory-1.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  sizes: string[];
  colors: string[];
  inStock: boolean;
  isNew?: boolean;
  isTrending?: boolean;
}

export const categories = [
  { id: "hoodies", name: "Hoodies", slug: "hoodies" },
  { id: "tees", name: "Tees", slug: "tees" },
  { id: "bottoms", name: "Bottoms", slug: "bottoms" },
  { id: "jackets", name: "Jackets", slug: "jackets" },
  { id: "sneakers", name: "Sneakers", slug: "sneakers" },
  { id: "accessories", name: "Accessories", slug: "accessories" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Graffiti Tag Oversized Hoodie",
    price: 129,
    originalPrice: 159,
    image: productHoodie1,
    category: "hoodies",
    rating: 4.8,
    reviews: 234,
    description: "Heavy-weight 450gsm cotton hoodie with all-over graffiti print. Oversized boxy fit with dropped shoulders and kangaroo pocket. This is the statement piece your wardrobe needs.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Charcoal"],
    inStock: true,
    isNew: true,
    isTrending: true,
  },
  {
    id: "2",
    name: "Tactical Cargo Joggers",
    price: 89,
    image: productPants1,
    category: "bottoms",
    rating: 4.6,
    reviews: 189,
    description: "Military-inspired cargo joggers with multiple utility pockets. Elastic waistband with drawstring. Tapered fit with elasticated ankle cuffs.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Olive", "Black", "Sand"],
    inStock: true,
    isTrending: true,
  },
  {
    id: "3",
    name: "Bold Statement Oversized Tee",
    price: 59,
    originalPrice: 75,
    image: productTee1,
    category: "tees",
    rating: 4.5,
    reviews: 312,
    description: "Premium heavyweight cotton tee with bold typographic print. Oversized drop-shoulder fit. Pre-shrunk and garment dyed for that perfect worn-in feel.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Grey"],
    inStock: true,
    isNew: true,
  },
  {
    id: "4",
    name: "Shadow High-Top Kicks",
    price: 189,
    image: productSneakers1,
    category: "sneakers",
    rating: 4.9,
    reviews: 456,
    description: "Premium leather high-top sneakers with cushioned sole. Classic black and white colorway with signature branding. Built for the streets.",
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Black/White"],
    inStock: true,
    isTrending: true,
  },
  {
    id: "5",
    name: "Patch Collection Bomber",
    price: 219,
    originalPrice: 279,
    image: productJacket1,
    category: "jackets",
    rating: 4.7,
    reviews: 167,
    description: "Satin bomber jacket covered in embroidered patches. Ribbed collar, cuffs and hem. Interior zippered pocket. This is wearable art.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    inStock: true,
    isNew: true,
    isTrending: true,
  },
  {
    id: "6",
    name: "Street Essentials Kit",
    price: 79,
    image: productAccessory1,
    category: "accessories",
    rating: 4.4,
    reviews: 98,
    description: "Curated accessory bundle including snapback cap and gold-tone Cuban link chain. Everything you need to complete the look.",
    sizes: ["One Size"],
    colors: ["Black/Gold"],
    inStock: true,
  },
  {
    id: "7",
    name: "Midnight Black Hoodie",
    price: 99,
    image: productHoodie1,
    category: "hoodies",
    rating: 4.3,
    reviews: 145,
    description: "Clean minimal hoodie in deep black. 400gsm cotton fleece with brushed interior. Regular fit.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    inStock: true,
  },
  {
    id: "8",
    name: "Urban Runner Sneakers",
    price: 149,
    image: productSneakers1,
    category: "sneakers",
    rating: 4.6,
    reviews: 203,
    description: "Lightweight runner sneakers with chunky sole. Mesh and leather upper. All-day comfort with street-ready style.",
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Black/White", "All White"],
    inStock: true,
    isNew: true,
  },
];
