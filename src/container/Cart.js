import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from 'react-icons/fa';
import { removeFromCart } from "./redux/actions/productActions";
import { incrementCount, decrementCount } from "./redux/actions/productActions";

const Cart = () => {
  const incrCount = (productId) => {
    dispatch(incrementCount(), {payload: productId})
  };
  const decrCount = (productId) => {
    dispatch(decrementCount(), {payload: productId})
  }
  const cartItems = useSelector((state) => state.cart.cartItems);
  const count = useSelector((state) => state.count.cartItems);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const renderList = cartItems.map((cartItem, idx) => {
    const { title, price, id, image, quantity } = cartItem;
    const truncatedTitle = title.length > 20 ? `${title.slice(0, 20)}...` : title;
    console.log(cartItems[1])

    return (
      <div className=" w-full px-10">

        <ul className=" ">
          <li key={idx} className="flex flex-wrap items-center mb-4 justify-between px-6 p-2 font-bold bg-teal-400">
            <div className=" w-1/2 flex gap-3 justify-start items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white p-1 flex justify-center items-center">
                <img className="w-9 h-9 rounded-full " src={image} alt="Avatar" />
              </div>
              <p className=" overflow-hidden">{truncatedTitle}</p>
            </div>

            <ul className=" w-1/2 flex justify-between items-center gap-10">
              <div className=" flex gap-2">
                <button  className="flex items-center justify-center h-5 w-5 rounded-full bg-white">
                  <span className="text-l">-</span>
                </button>
                <p>{count} </p>
                <button  className="flex items-center justify-center h-5 w-5 rounded-full bg-white">
                  <span className="text-l">+</span>
                </button>
              </div>
              <li ><p>${price}</p></li>
              <li><FaTrash onClick={() => handleRemoveFromCart(id)} cursor="pointer" /></li>
            </ul>
          </li>
        </ul>
      </div>
    )
  });

  return (
    <div className=" w-screen h-screen bg-white rounded-xl">
      <p className=" text-center font-bold mb-3">Cart items</p>
      {renderList.length === 0 ? (<div className=" pl-10 pt-10"><p className=" ml-9 ">Your Cart is empty</p></div>) : (
        <div>
          {renderList}
        </div>
      )}

    </div >
  );
};

export default Cart;