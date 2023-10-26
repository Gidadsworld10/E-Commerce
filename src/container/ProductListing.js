
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./redux/actions/productActions"


const ProductListing = () => {
  
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
      dispatch(setProducts(response.data)); 
  };

  useEffect(() => {
   fetchProducts()
  }, []);
  
  

  return (
    <div className=" flex gap-2 flex-wrap justify-center mx-20">
      <ProductComponent />
    </div>
  );
}

export default ProductListing;
