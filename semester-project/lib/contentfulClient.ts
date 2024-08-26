const gqlAllProductsQuery = `query ProductList {
  carBoxCollection {
    items {
      sys {
        id
      }
      carName
      price
      brand
      image {
        url
      } 
      image1 {
        url
      } 
      image2 {
        url
      } 
			image3 {
        url
      }       
      link
      details
      description
      
    
      
    }
  }
}`;

interface CarCollectionResponse {
    carBoxCollection: {
      items: CarItem[];
    };
  }
  
  interface CarItem {
    sys: {
      id: string;
    };
    carName: string;
    price: string;
    brand: string;
    image: {
      url: string;
    };
    image1: {
      url: string;
    };
    image2: {
      url: string;
    };
    image3: {
      url: string;
    };
    link: string;
    details: string;
    description: string;
  }  
  const CONTENTFUL_ACCESS_TOKEN = "KVM5eBiqjmHMvGa49xusjSddyw5Dbn8OXIWDmYli45U"
const CONTENTFUL_SPACE_ID = "6ufbm13204ba"

  export const fetchCars = async (): Promise<CarItem[]> => {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/master`,
      {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: gqlAllProductsQuery }),
      }
    );
    
    const json = await response.json();
    console.log(response.json())
    return json.data.carBoxCollection.items;
  };