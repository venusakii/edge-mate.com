import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Professional Hair Clippers Trimmer Kit",
    category: "Grooming",
    image: "https://m.media-amazon.com/images/I/815olt4G15L._AC_SX679_.jpg",
    slug: "professional-hair-clippers-trimmer-kit",
    price: "$49.99",
    url: "https://www.amazon.com/Professional-Hair-Clippers-Trimmer-Kit/dp/B0963152JN",
    description:
      "A complete professional hair clippers and trimmer kit designed for precise grooming at home or in the salon.",
    features: [
      "Cordless operation for flexibility",
      "Multiple length attachments for versatile styling",
      "Ergonomic design for comfortable use",
      "Long-lasting battery",
      "Easy to clean and maintain",
    ],
    specs: {
      "Battery Life": "90 minutes",
      "Charging Time": "2 hours",
      "Number of Attachments": "10",
      Warranty: "1 year",
      "Made in": "China",
    },
  },
  {
    id: 2,
    name: "Visibility Skeleton Lithium-Ion Cordless Rechargeable Clipper",
    category: "Grooming",
    image: "https://m.media-amazon.com/images/I/81+jYy9XlAL._SX679_.jpg",
    slug: "visibility-skeleton-lithium-ion-cordless-rechargeable-clipper",
    price: "$79.99",
    url: "https://www.amazon.com/Visibility-Skeleton-Lithium-Ion-Cordless-Rechargeable/dp/B0CKWKL3DT",
    description:
      "Innovative skeleton design clipper that provides better visibility during cuts, powered by lithium-ion battery for cordless use.",
    features: [
      "Skeleton design for enhanced visibility",
      "Lithium-ion rechargeable battery",
      "Cordless operation",
      "Adjustable blade lengths",
      "Durable construction",
    ],
    specs: {
      "Battery Life": "120 minutes",
      "Charging Time": "1 hour",
      "Blade Material": "Stainless steel",
      Warranty: "2 years",
      "Made in": "China",
    },
  },
  {
    id: 3,
    name: "VGRPRO Professional Clippers Cordless Rechargable",
    category: "Grooming",
    image: "https://m.media-amazon.com/images/I/81PQmH4uPxL._AC_SX679_.jpg",
    slug: "vgrpro-professional-clippers-cordless-rechargable",
    price: "$69.99",
    url: "https://www.amazon.com/VGRPRO-Professional-Clippers-Cordless-Rechargable/dp/B0FGDNB1HJ",
    description: "Professional-grade cordless clippers with rechargeable battery, ideal for barbers and home use.",
    features: [
      "High-torque motor for powerful cutting",
      "Cordless and rechargeable",
      "Precision blades",
      "Ergonomic handle",
      "Multiple speed settings",
    ],
    specs: {
      Motor: "High-torque",
      "Battery Life": "180 minutes",
      "Charging Time": "3 hours",
      Warranty: "3 years",
      "Made in": "China",
    },
  },
  {
    id: 4,
    name: "Remington HC4250 Shortcut Self-Haircut Clippers",
    category: "Grooming",
    image: "https://m.media-amazon.com/images/I/71+IoTEdQ2L._SX679_.jpg",
    slug: "remington-hc4250-shortcut-self-haircut-clippers",
    price: "$64.99",
    url: "https://www.amazon.com/Remington-HC4250-Shortcut-Self-Haircut-Clippers/dp/B014SG66UO",
    description:
      "Dive into the world of premier grooming with Remington's beard trimming kit, a statement of sophistication. This personal trimmer isn't just a tool; it's the crown jewel in men's shaving & hair removal products.",
    features: [
      "BOLD PRECISION: Dive into the world of pro grooming with clippers for men. Our 9 sizes of length combs guarantee hair and beard grooming perfection, ranging from 1/16 - 5/8 inches.",
      "UNBEATABLE POWER: Get 40 minutes of cordless use with the Lithium Rechargeable Battery. Features a 5-minute quick charge. If it doesn’t hold charge, fully discharge and recharge. Charge the clipper for 3-5 hours for best performance.",
      "CURVE, CONTOUR, CUT: Get a smooth, precise trim with the Extra Wide Curved Blade. If the cutters stop moving, try cleaning and oiling the unit. Build-up can block movement—check your user manual for easy cleaning steps.",
      "GROOMING ON THE GO: This 14-piece beard grooming kit includes a handheld clipper, 9 length-adjusting combs, cleaning brush, storage pouch, charging adapter, and oil. After use, brush hair from cutters and rinse the blade.",
      "WATERPROOF & WIRELESS: The ultimate shaver for men – 100% washable and fully cordless. This wireless clipper is designed for modern men, ensuring a seamless grooming experience. Comes with a limited five-year warranty. See manual for details.",
    ],
    specs: {
      "Battery Life": "40 minutes",
      "Charging Time": "3-5 hours",
      "Number of Pieces": "14",
      Warranty: "5 years",
      Waterproof: "Yes",
    },
  },
  {
    id: 5,
    name: "DWARFLAB Dwarf Smart Telescope Auto-Tracking",
    category: "Optics",
    image: "https://m.media-amazon.com/images/I/61dlaZvg2NL._AC_SX679_.jpg",
    slug: "dwarflab-dwarf-smart-telescope-auto-tracking",
    price: "$399.99",
    url: "https://www.amazon.com/DWARFLAB-Dwarf-Smart-Telescope-Auto-Tracking/dp/B0FHP6K4BK",
    description: "Compact smart telescope with auto-tracking technology, perfect for astronomy enthusiasts on the go.",
    features: [
      "Auto-tracking of celestial objects",
      "Smart app integration",
      "Portable and lightweight design",
      "High-resolution imaging",
      "Easy setup for beginners",
    ],
    specs: {
      Aperture: "80mm",
      "Focal Length": "400mm",
      "Mount Type": "Smart Alt-Az",
      Warranty: "2 years",
      Weight: "2.2 lbs",
    },
  },
  {
    id: 6,
    name: "Celestron Travel Scope 70 Portable Refractor Telescope",
    category: "Optics",
    image: "https://m.media-amazon.com/images/I/61T2V+BMJuL._AC_SX679_.jpg",
    slug: "celestron-travel-scope-70-portable-refractor-telescope",
    price: "$99.99",
    url: "https://www.amazon.com/Celestron-Refractor-Telescope-Beginners-Astronomy/dp/B001TI9Y2M",
    description:
      "Portable refractor telescope ideal for beginners and travel, with fully-coated glass optics, tripod, backpack, and software.",
    features: [
      "70mm aperture refractor",
      "Fully-coated glass optics for clear views",
      "Includes adjustable tripod and backpack",
      "Bonus astronomy software download",
      "Perfect for terrestrial and celestial viewing",
    ],
    specs: {
      Aperture: "70mm",
      "Focal Length": "400mm",
      "Focal Ratio": "f/5.7",
      "Mount Type": "Alt-azimuth",
      Weight: "3.3 lbs",
    },
  },
  {
    id: 7,
    name: "Gskyer 130EQ Professional Astronomical Reflector Telescope",
    category: "Optics",
    image: "https://m.media-amazon.com/images/I/71YoEzpBs0L._AC_SY879_.jpg",
    slug: "gskyer-130eq-professional-astronomical-reflector-telescope",
    price: "$264.97",
    url: "https://www.amazon.com/Gskyer-Professional-Astronomical-Technology-EQ-130/dp/B083NPL73W",
    description:
      "This reflector telescope is a great choice for anyone interested in exploring the night sky. Its 5.1 inch aperture and all-glass optical components with high transmission coatings allow for enhanced image brightness and clarity, making it ideal for observing the Moon, planets, brighter galaxies, nebulas, and star clusters.",
    features: [
      "Reflector Telescope with 5.1 inch aperture",
      "Short 24 inch optical tube design and fast f/5 focal ratio",
      "3 eyepieces, 3X Barlow lens, finderscope, and adjustable tripod",
      "Wireless remote control for photography",
      "1-year warranty and lifetime maintenance",
    ],
    specs: {
      Aperture: "130mm",
      "Focal Length": "650mm",
      "Focal Ratio": "f/5",
      "Mount Type": "Equatorial",
      "Optical Tube Length": "24 inches",
    },
  },
  {
    id: 8,
    name: "Gskyer Telescope AZ Astronomical Refracting",
    category: "Optics",
    image: "https://m.media-amazon.com/images/I/71cb2RCy+aL._AC_SX679_.jpg",
    slug: "gskyer-telescope-az-astronomical-refracting",
    price: "$129.99",
    url: "https://www.amazon.com/Gskyer-Telescope-AZ-Astronomical-Refracting/dp/B081RJ8DW1",
    description:
      "Entry-level astronomical refracting telescope with alt-azimuth mount, suitable for beginners observing the night sky and daytime landscapes.",
    features: [
      "70mm aperture for bright views",
      "400mm focal length",
      "Fully coated optics",
      "Phone adapter and wireless remote",
      "Adjustable aluminum tripod",
    ],
    specs: {
      Aperture: "70mm",
      "Focal Length": "400mm",
      "Focal Ratio": "f/5.7",
      "Mount Type": "Alt-azimuth",
      Weight: "5.7 lbs",
    },
  },
  {
    id: 9,
    name: "Dianfan Telescope 90mm Aperture 800mm Professional Refractor",
    category: "Optics",
    image: "https://m.media-amazon.com/images/I/71uep1oHjFL._AC_SX679_.jpg",
    slug: "dianfan-telescope-90mm-aperture-800mm-professional-refractor",
    price: "$159.98",
    url: "https://www.amazon.com/Dianfan-Telescope-Telescopes-Astronomy-Professional/dp/B0CPTTMW9Q",
    description:
      "Superior Optics: Dianfan astronomy telescope features a focal length of 800 mm and a fully coated 90 mm objective lens. The large aperture gathers more light for brighter, clearer views, high-transmission coatings enhance contrast and color for sharp, vivid images for an enjoyable stargazing experience.",
    features: [
      "Superior Optics with 90mm aperture",
      "Powerful Magnification: 32x–240x",
      "Quick Setup & Beginner-Friendly",
      "Portable & Versatile with stainless tripod",
      "Professional Astronomical Telescope",
    ],
    specs: {
      Aperture: "90mm",
      "Focal Length": "800mm",
      "Mount Type": "Altazimuth",
      "Eye Piece Lens": "Kellner",
      Weight: "8 lbs",
    },
  },
]

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20">
          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div>
              <div className="text-xs font-mono text-accent mb-4 tracking-[0.3em] uppercase">{product.category}</div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">{product.name}</h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{product.description}</p>
              <Link href={product.url} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-black hover:bg-white/90">
                  BUY ON AMAZON
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 tracking-tight">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {product.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 border border-white/10 hover:border-white/30 transition-colors"
                >
                  <div className="text-accent font-mono text-sm">0{index + 1}</div>
                  <div className="text-lg">{feature}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section className="py-20 px-4 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 tracking-tight">Technical Specifications</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center p-6 border border-white/10">
                  <div className="font-mono text-sm text-muted-foreground">{key}</div>
                  <div className="font-bold">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Back to Home Button */}
      <Link href="/#products">
        <Button
          variant="outline"
          size="sm"
          className="fixed bottom-8 right-8 z-50 bg-black/80 backdrop-blur-sm border-white/20 hover:bg-black/90 hover:border-white/40 font-mono text-xs tracking-wider"
        >
          BACK TO GALLERY
        </Button>
      </Link>
    </div>
  )
}
