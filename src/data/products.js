export const products = [
    // CATEGORY 1: SMARTPHONES
    {
        id: 1,
        name: "Samsung Galaxy A54 5G",
        category: "smartphones",
        brand: "Samsung",
        price: 8999,
        originalPrice: 10499,
        image: "https://picsum.photos/id/1/600/600",
        description: "Premium features without the premium price. 5G ready with a stunning 6.4\" Super AMOLED display.",
        specs: ["5G Ready", "128GB Storage", "8GB RAM", "Triple Camera"],
        rating: 4.5,
        reviews: 128
    },
    {
        id: 2,
        name: "iPhone 13 (Renewed)",
        category: "smartphones",
        brand: "Apple",
        price: 11499,
        originalPrice: 14999,
        image: "https://picsum.photos/id/2/600/600",
        description: "Apple quality at an unbeatable price. Certified renewed with full 1-year TaylorCare warranty.",
        specs: ["Certified Renewed", "A15 Bionic", "128GB", "Cinematic Mode"],
        rating: 4.8,
        reviews: 342
    },
    {
        id: 3,
        name: "Xiaomi Redmi Note 12 Pro",
        category: "smartphones",
        brand: "Xiaomi",
        price: 6499,
        originalPrice: null,
        image: "https://picsum.photos/id/3/600/600",
        description: "Powerhouse performance on a budget. 108MP camera, 120Hz AMOLED display.",
        specs: ["108MP Camera", "120Hz Display", "67W Fast Charge", "256GB Storage"],
        rating: 4.3,
        reviews: 89
    },
    {
        id: 4,
        name: "Google Pixel 7a",
        category: "smartphones",
        brand: "Google",
        price: 9799,
        originalPrice: 11299,
        image: "https://picsum.photos/id/4/600/600",
        description: "The best camera in its class with Google's legendary software. Tensor G2 chip and Night Sight.",
        specs: ["Tensor G2 Chip", "Best-in-Class Camera", "5-Year Updates", "Wireless Charging"],
        rating: 4.6,
        reviews: 156
    },
    {
        id: 5,
        name: "Samsung Galaxy S21 FE",
        category: "smartphones",
        brand: "Samsung",
        price: 10299,
        originalPrice: 12999,
        image: "https://picsum.photos/id/5/600/600",
        description: "Fan Edition with flagship features. Pro-grade camera and 120Hz display.",
        specs: ["120Hz Display", "Pro Camera", "256GB", "IP68 Waterproof"],
        rating: 4.4,
        reviews: 210
    },
    {
        id: 6,
        name: "Huawei P50 Pro",
        category: "smartphones",
        brand: "Huawei",
        price: 12999,
        originalPrice: null,
        image: "https://picsum.photos/id/6/600/600",
        description: "Photography reimagined. Dual-matrix camera system with True-Chroma technology.",
        specs: ["Dual-Matrix Camera", "HarmonyOS", "4360mAh Battery", "120Hz OLED"],
        rating: 4.5,
        reviews: 76
    },
    {
        id: 7,
        name: "Nokia G50 5G",
        category: "smartphones",
        brand: "Nokia",
        price: 4999,
        originalPrice: null,
        image: "https://picsum.photos/id/7/600/600",
        description: "Built to last with 3-day battery life. 5G connectivity and pure Android experience.",
        specs: ["3-Day Battery", "Pure Android", "5G Ready", "Durable Build"],
        rating: 4.0,
        reviews: 45
    },
    {
        id: 8,
        name: "Oppo Reno8 T 5G",
        category: "smartphones",
        brand: "Oppo",
        price: 7799,
        originalPrice: 9299,
        image: "https://picsum.photos/id/8/600/600",
        description: "Portrait expert with 108MP camera and Orbit Light. Ultra-slim design.",
        specs: ["108MP Portrait Camera", "67W Fast Charge", "Orbit Light", "256GB"],
        rating: 4.2,
        reviews: 67
    },

    // CATEGORY 2: LAPTOPS
    {
        id: 9,
        name: "Lenovo IdeaPad 3",
        category: "laptops",
        brand: "Lenovo",
        price: 8499,
        originalPrice: 9999,
        image: "https://picsum.photos/id/9/600/600",
        description: "Perfect for students and remote work. AMD Ryzen 5, 8GB RAM, 256GB SSD.",
        specs: ["AMD Ryzen 5", "8GB RAM", "256GB SSD", "Full HD"],
        rating: 4.3,
        reviews: 112
    },
    {
        id: 10,
        name: "Apple MacBook Air M1",
        category: "laptops",
        brand: "Apple",
        price: 15999,
        originalPrice: 18499,
        image: "https://picsum.photos/id/10/600/600",
        description: "The legendary ultrabook with Apple Silicon. 18-hour battery life and silent fanless design.",
        specs: ["Apple M1 Chip", "18-Hour Battery", "Fanless Design", "Retina Display"],
        rating: 4.9,
        reviews: 520
    },
    {
        id: 11,
        name: "HP Pavilion 15",
        category: "laptops",
        brand: "HP",
        price: 11299,
        originalPrice: null,
        image: "https://picsum.photos/id/11/600/600",
        description: "Balance of performance and style. Intel i5, 16GB RAM, 512GB SSD.",
        specs: ["Intel i5 12th Gen", "16GB RAM", "512GB SSD", "Micro-Edge Display"],
        rating: 4.4,
        reviews: 88
    },
    {
        id: 12,
        name: "Microsoft Surface Pro 9",
        category: "laptops",
        brand: "Microsoft",
        price: 22999,
        originalPrice: 25999,
        image: "https://picsum.photos/id/12/600/600",
        description: "Laptop to tablet in a snap. Intel i5, 8GB RAM, with detachable keyboard (sold separately).",
        specs: ["2-in-1 Convertible", "Intel i5", "Touch Screen", "13\" PixelSense"],
        rating: 4.6,
        reviews: 45
    },

    // CATEGORY 3: AUDIO
    {
        id: 17,
        name: "Samsung Galaxy Buds2 Pro",
        category: "audio",
        brand: "Samsung",
        price: 3499,
        originalPrice: 4199,
        image: "https://picsum.photos/id/13/600/600",
        description: "True 24-bit Hi-Fi sound with intelligent ANC. 360 Audio and IPX7 water resistance.",
        specs: ["24-bit Hi-Fi", "Intelligent ANC", "360 Audio", "IPX7 Waterproof"],
        rating: 4.5,
        reviews: 230
    },
    {
        id: 18,
        name: "Apple AirPods Pro (2nd Gen)",
        category: "audio",
        brand: "Apple",
        price: 4999,
        originalPrice: null,
        image: "https://picsum.photos/id/14/600/600",
        description: "Industry-leading noise cancellation with Adaptive Audio and Personalized Spatial Audio.",
        specs: ["Adaptive ANC", "Spatial Audio", "MagSafe Charging", "Find My"],
        rating: 4.8,
        reviews: 850
    },
    {
        id: 19,
        name: "Sony WH-1000XM5",
        category: "audio",
        brand: "Sony",
        price: 6799,
        originalPrice: 7999,
        image: "https://picsum.photos/id/15/600/600",
        description: "The world's best noise cancellation. 30-hour battery and pristine sound quality.",
        specs: ["Best-in-Class ANC", "30-Hour Battery", "Speak-to-Chat", "Hi-Res Audio"],
        rating: 4.9,
        reviews: 410
    },

    // CATEGORY 4: WATCHES
    {
        id: 23,
        name: "Apple Watch SE (2nd Gen)",
        category: "watches",
        brand: "Apple",
        price: 5499,
        originalPrice: null,
        image: "https://picsum.photos/id/16/600/600",
        description: "Essential Apple Watch features. Crash Detection, fitness tracking, and Retina display.",
        specs: ["Crash Detection", "Fitness Tracking", "Retina Display", "Water Resistant"],
        rating: 4.7,
        reviews: 320
    },
    {
        id: 24,
        name: "Samsung Galaxy Watch 5",
        category: "watches",
        brand: "Samsung",
        price: 4999,
        originalPrice: 5799,
        image: "https://picsum.photos/id/17/600/600",
        description: "Advanced health monitoring with Body Composition. Sapphire glass and sleep coaching.",
        specs: ["Body Composition", "Sapphire Glass", "Sleep Coaching", "Google Wear OS"],
        rating: 4.4,
        reviews: 180
    },

    // CATEGORY 5: ACCESSORIES
    {
        id: 29,
        name: "Anker 737 Power Bank",
        category: "accessories",
        brand: "Anker",
        price: 1899,
        originalPrice: null,
        image: "https://picsum.photos/id/18/600/600",
        description: "140W GaNPrime power bank with digital display. Charges laptops and phones fast.",
        specs: ["140W Output", "Digital Display", "Laptop Charging", "24,000mAh"],
        rating: 4.9,
        reviews: 95
    },
    {
        id: 30,
        name: "Logitech MX Master 3S",
        category: "accessories",
        brand: "Logitech",
        price: 1799,
        originalPrice: 2199,
        image: "https://picsum.photos/id/19/600/600",
        description: "Advanced wireless mouse for productivity. Ultra-quiet clicks and MagSpeed scrolling.",
        specs: ["Ultra-Quiet Clicks", "MagSpeed Scroll", "Cross-Computer", "Ergonomic"],
        rating: 4.8,
        reviews: 310
    }
];

export const categories = [
    { id: 'smartphones', label: 'Smartphones', count: 8 },
    { id: 'laptops', label: 'Laptops', count: 8 },
    { id: 'audio', label: 'Audio', count: 6 },
    { id: 'watches', label: 'Smartwatches', count: 6 },
    { id: 'accessories', label: 'Accessories', count: 6 }
];
