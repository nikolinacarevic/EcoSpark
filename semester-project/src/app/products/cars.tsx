import React from "react";
const Cars = () =>{
  return(
    <div>cars</div>
  )
}
export default Cars

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
    },
    {
      id: 4,
      name: 'BMW i4',
      brand: 'BMW',
      price: 'from 58 300 €',
      image: '/images/bmw.png',
      image1: '/images/bmw1.png',
      image2: '/images/bmw2.png',
      image3: '/images/bmw3.png',
      link: "/products/4",
      details: "Battery: 83.9 kWh\n Range: up to 590 km\n Top Speed: 225 km/h\n Acceleration: 0-100 km/h in 4.0 seconds\n Seats: 5\n Color: Black",
      description: "The BMW i4 is a premium electric sedan that combines BMW's hallmark driving dynamics with cutting-edge electric performance. With a sleek, aerodynamic design and luxurious interior, the i4 offers an exhilarating driving experience. Equipped with advanced technology, a high-capacity battery, and a range of over 500 km, the i4 is perfect for long-distance travel as well as city driving. The vehicle also features BMW's state-of-the-art infotainment system, a host of driver assistance features, and the iconic kidney grille reinterpreted for the electric era."
    },
    {
      id: 5,
      name: 'Tesla Model 3',
      brand: 'Tesla',
      price: 'from 42 990 €',
      image: '/images/tesla.png',
      image1: '/images/tesla1.png',
      image2: '/images/tesla2.png',
      image3: '/images/tesla3.png',
      link: "/products/5",
      details: "Battery: 82 kWh\n Range: up to 614 km\n Top Speed: 261 km/h\n Acceleration: 0-100 km/h in 3.3 seconds\n Seats: 5\n Color: Black",
      description: "The Tesla Model 3 is a high-performance electric sedan that sets the standard for efficiency, range, and technology in its class. With its minimalist interior design, cutting-edge autopilot features, and impressive acceleration, the Model 3 delivers a dynamic driving experience. Its long-range battery allows for extensive travel between charges, while the sleek exterior design and spacious cabin ensure comfort and style. The vehicle also boasts a large touchscreen interface that controls most of the car's functions, providing an intuitive and modern user experience."
    },
    {
      id: 6,
      name: 'Volkswagen ID.4',
      brand: 'Volkswagen',
      price: 'from 44 990 €',
      image: '/images/vww.png',
      image1: '/images/vww1.png',
      image2: '/images/vww2.png',
      image3: '/images/vww3.png',
      link: "/products/6",
      details: "Battery: 77 kWh\n Range: up to 520 km\n Top Speed: 180 km/h\n Acceleration: 0-100 km/h in 8.5 seconds\n Seats: 5\n Color: Silver",
      description: "The Volkswagen ID.4 is a versatile and stylish electric SUV that combines practicality with advanced technology. With a spacious interior, generous cargo space, and a long-range battery, the ID.4 is well-suited for both urban and long-distance travel. It features an intuitive infotainment system, a range of driver assistance technologies, and a comfortable cabin that accommodates five passengers. The ID.4's sleek exterior design and robust performance make it a compelling choice for those seeking a modern and eco-friendly SUV."
    }    
  ];  