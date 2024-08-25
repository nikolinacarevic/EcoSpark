export interface Car {
    id: number;
    name: string;
    brand: string;
    price: string;
    image: string;
    image1: string;
    image2: string;
    image3: string;
    link: string;
    details: string;
    description: string;
  }
  
  export const products: Car[] = [
    {
      id: 1,
      name: 'Mercedes Benz EQS',
      brand: 'Mercedes',
      price: 'from 105 000 €',
      image: '/images/mercedes.png',
      image1: '/images/mercedes1.png',
      image2: '/images/mercedes2.png',
      image3: '/images/mercedes3.png',
      link: "/products/1",
      details: "Battery: 107.8 kWh\n Range: up to 780 km\n Top Speed: 210 km/h\n Acceleration: 0-100 km/h in 4.1 seconds\n Seats: 5\n Color: Grey and Black",
      description: "The Mercedes Benz EQS is a luxury electric sedan that combines cutting-edge technology with exceptional comfort. With its aerodynamic design, advanced driver-assistance systems, and impressive range, the EQS sets a new standard in the electric vehicle market."
    },
    {
      id: 2,
      name: 'Škoda Enyaq',
      brand: 'Škoda',
      price: 'from 48 458 €',
      image: '/images/skoda.png',
      image1: '/images/skoda1.png',
      image2: '/images/skoda2.png',
      image3: '/images/skoda3.png',
      link: "/products/2",
      details: "Battery: 107.8 kWh\n Range: 770 km\n Top Speed: 210 km/h\n Acceleration: 0-100 km/h in 4.3 seconds\n Seats: 5\n Color: Blue",
      description: "The Škoda Enyaq is a versatile and spacious electric SUV that offers a perfect balance of practicality and innovation. Featuring a modern design, high-quality interior, and advanced connectivity features, the Enyaq is ideal for families and tech enthusiasts alike."
    },
    {
      id: 3,
      name: 'Volkswagen ID.3',
      brand: 'Volkswagen',
      price: 'from 41 950 €',
      image: '/images/vw.png',
      image1: '/images/vw1.png',
      image2: '/images/vw2.png',
      image3: '/images/vw3.png',
      link: "/products/3",
      details: "Battery: 77 kWh\n Range: up to 550 km\n Top Speed: 160 km/h\n Acceleration: 0-100 km/h in 7.3 seconds\n Seats: 5\n Color: White",
      description: "The Volkswagen ID.3 is a versatile and eco-friendly compact hatchback that offers a blend of modern technology and impressive efficiency. With its striking design, spacious interior, and advanced electric drivetrain, the ID.3 stands out as a smart choice for urban driving and daily commutes. The vehicle features an intuitive infotainment system, a comfortable cabin with ample room, and a range of advanced safety features, making it an excellent option for those seeking a reliable and forward-thinking electric car."
    }
  ];  