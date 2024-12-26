import { FlatList } from "react-native";
import products from '../assets/products.json'
import ProductListItem from "@/components/productListItem";
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";


export default function Index() {
 
  const numColumns = useBreakpointValue({

    default: 2,
    sm:3,
    lg:4, 
  })

  return (
    <FlatList 
      key= {numColumns}
      data={products}
      numColumns={numColumns}
      contentContainerClassName="gap-2 bg-red-300 max-w-[960] mx-auto w-full"
      columnWrapperClassName="gap-2"
      renderItem={({item}) => <ProductListItem product={item}/>}
      /> 
     
  );
}
