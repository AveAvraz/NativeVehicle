import { Text, View,FlatList } from "react-native";
import products from '../assets/products.json'
 import ProductListItem from "@/components/productListItem";
import { Button, ButtonText } from "@/components/ui/button";


export default function Index() {
  return (


    <Button>
      <ButtonText>Press</ButtonText>
    </Button>
    
      /*<FlatList 
      data={products}
      renderItem={({item}) => <ProductListItem product={item}/>}
      /> */
     
  );
}
