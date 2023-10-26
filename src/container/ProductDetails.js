import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct } from "./redux/actions/productActions";
import { removeSelectedProduct } from "./redux/actions/productActions";
import { addToCart } from "./redux/actions/productActions";
import {   library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faShoppingCart);

const ProductDetails = () => {
  
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  
  const { image, category, title, description, price,  } = product;
  

  const handleAddToCart = () => {
    dispatch(addToCart(product));
   };

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("err: ", err)
      });
    dispatch(selectedProduct(response.data));
    console.log(response.data)
  };


  useEffect(() => {

    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    }
  }, [productId]);

  


  return (
    <div className="flex justify-center  m-8 mb-20">
      {Object.keys(product).length === 0 ? (
        <div>Loading Product And Its Details...</div>
      ) : (
        <div className="w-screen">
          <div className="relative flex items-center justify-center border-4 border-gray-200 p-4">
            <div className="flex">
              <div className=" border-r-2 w-1/2 relative">
                <img className=" pr-6 h-80 " src={image} alt={title} />
                <p className=" bg-white absolute top-56 right-0 -mr-5 font-bold z-10"> AND</p>
              </div>
              <div className="w-1/2 ml-4 flex flex-col  justify-center  pl-8" >
                <h1 className=" mb-3 text-3xl font-bold">{title}</h1>
                <h2 className="bg-teal-500 text-white px-2 py-1 rounded-md mb-1">
                  ${price}
                </h2>
                <h3 className="bg-cyan-300 text-brown-700 font-bold px-2 py-1 rounded-md w-full">
                  {category}
                </h3>
                <p className="mb-4 text-gray-400">{description}</p>
                <div className="flex">
                  <button onClick={handleAddToCart} className="relative inline-flex items-center 
                  justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md
                   text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Add
                    <span className="absolute left-0 right-0 bottom-[-40px] 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FontAwesomeIcon icon="shopping-cart" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    /* <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>Loading Product And Its Details...</div>
      ) : (
        <div className="flex items-center justify-center w-screen">
          <div className="w-1/2 border border-gray-200 p-4">
            <div className="mb-4 text-center">
              <div className="mb-4">AND</div>
            </div>
            <div className="flex items-center">
              <div className="w-1/2">
                <img className="w-full" src={image} alt={title} />
              </div>
              <div className="w-1/2 ml-4">
                <h1 className="text-3xl text-bold">{title}</h1>
                <h2 className=" rounded-md pl-2 bg-teal-500 text-white mb-1 w-15">
                  <p >${price}</p>
                </h2>
                <h3 className="pl-2 text-brown-700 font-bold w-full bg-cyan-300 rounded-md">{category}</h3>
                <p className="mb-4 text-gray-400">{description}</p>
                <div className="flex">
                  <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md">
                    <i className="mr-2 fas fa-shopping-cart"></i>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

       
      )}
    </div> */
  );
}

export default ProductDetails;
