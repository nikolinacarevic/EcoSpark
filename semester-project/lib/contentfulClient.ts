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

  export const fetchCars = async (): Promise<CarItem[]> => {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
      {
        method: "POST",
        headers: {
          'Authorization': `Bearer eJoEhbMMi_XEcuklMASvT_lpgd-l5FbyEz_gE55T49A`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: gqlAllProductsQuery }),
      }
    );
    
    const json = await response.json();
    console.log(response.json())
    return json.data.carBoxCollection.items;
  };