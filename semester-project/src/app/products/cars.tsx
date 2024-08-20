export interface Car {
    id: number;
    name: string;
    price: string;
    image: string;
    description: string;
  }
  
  export const products: Car[] = [
    {
      id: 1,
      name: 'Mercedes Benz EQS',
      price: 'from 116 200 €',
      image: '/images/mercedes.png',
      description: "The Mercedes Benz EQS is a luxury electric sedan that combines cutting-edge technology with exceptional comfort. With its aerodynamic design, advanced driver-assistance systems, and impressive range, the EQS sets a new standard in the electric vehicle market."
    },
    {
      id: 2,
      name: 'Škoda Enyaq',
      price: 'from 48 458 €',
      image: '/images/skoda.png',
      description: "The Škoda Enyaq is a versatile and spacious electric SUV that offers a perfect balance of practicality and innovation. Featuring a modern design, high-quality interior, and advanced connectivity features, the Enyaq is ideal for families and tech enthusiasts alike."
    },
    {
      id: 3,
      name: 'Toyota Yaris',
      price: 'from 22 950 €',
      image: '/images/toyota.png',
      description: "The Toyota Yaris is a compact and efficient hatchback that delivers exceptional fuel economy and reliability. With its sleek design, comfortable interior, and advanced safety features, the Yaris is an excellent choice for city driving and everyday commuting."
    }
  ];  