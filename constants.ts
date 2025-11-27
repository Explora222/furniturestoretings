import { Product } from './types';

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 2,
  }).format(amount); // R 12 999.00
};

export const CATEGORIES = ["All", "Sofas", "Chairs", "Tables", "Lighting", "Storage"];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Copenhagen Sofa",
    category: "Sofas",
    price: 18999,
    sku: "SF-001",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "The Copenhagen Sofa brings Danish design principles to your living room. Featuring clean lines, deep seating, and premium linen upholstery, it is as comfortable as it is stylish.",
    isNew: true,
    dimensions: "220cm W x 95cm D x 80cm H",
    material: "Solid Oak, Belgian Linen"
  },
  {
    id: "2",
    name: "Aero Lounge Chair",
    category: "Chairs",
    price: 8499,
    sku: "CH-002",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Sculptural and distinct, the Aero Lounge Chair is a statement piece. The curved backrest offers superior lumbar support while the solid wood frame ensures durability.",
    dimensions: "80cm W x 75cm D x 70cm H",
    material: "Walnut, Velvet"
  },
  {
    id: "3",
    name: "Marble Coffee Table",
    category: "Tables",
    price: 6200,
    sku: "TB-003",
    image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&w=1000&q=80",
    images: [
        "https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1532323544230-7191fd510c59?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "A minimalist coffee table featuring a solid Carrara marble top resting on a slender matte black steel frame. Perfect for modern interiors.",
    dimensions: "90cm Dia x 40cm H",
    material: "Carrara Marble, Powder-coated Steel"
  },
 
  {
    id: "5",
    name: "Minimalist Bookshelf",
    category: "Storage",
    price: 12500,
    sku: "ST-005",
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=1000&q=80",
    images: ["https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=1000&q=80"],
    description: "Store your treasures in style. This open-back bookshelf serves as both storage and a room divider, featuring adjustable oak shelves.",
    dimensions: "120cm W x 35cm D x 190cm H",
    material: "White Oak"
  },
  {
    id: "6",
    name: "Velluto Dining Chair",
    category: "Chairs",
    price: 3200,
    sku: "CH-006",
    image: "https://images.unsplash.com/photo-1617364852223-75f57e78dc96?auto=format&fit=crop&w=1000&q=80",
    images: ["https://images.unsplash.com/photo-1617364852223-75f57e78dc96?auto=format&fit=crop&w=1000&q=80"],
    description: "Dining in luxury. The Velluto chair features rich velvet upholstery with diamond stitching and tapered brass legs.",
    material: "Velvet, Brass"
  },
 

  {
    id: "9",
    name: "Nordic Pendant Light",
    category: "Lighting",
    price: 2800,
    sku: "LG-009",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=1000&q=80",
    images: ["https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=1000&q=80"],
    description: "Simple, elegant, and functional. This pendant light features a matte finish shade with a wooden accent top.",
    material: "Aluminum, Wood"
  },
  {
    id: "10",
    name: "Modern Bed Frame",
    category: "Bedroom",
    price: 22000,
    sku: "BD-010",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80",
    images: ["https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80"],
    description: "A low-profile platform bed with an upholstered headboard. The minimalist design promotes a calm and restful sleep environment.",
    dimensions: "Queen Standard",
    material: "Fabric, Steel"
  },
  
  {
    id: "12",
    name: "Studio Desk",
    category: "Tables",
    price: 9500,
    sku: "TB-012",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80",
    images: ["https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80"],
    description: "Create your best work at the Studio Desk. Features integrated cable management and a spacious drawer for essentials.",
    material: "Ash Wood"
  }
];