import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

library.add(faShoppingCart);

const Header = ( ) => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    return (
        <div className=" flex items-center text-gray-700 px-4 w-full
         bg-white shadow-lg">
            <div className="container mx-auto py-4">
                <h2 className="text-2xl font-bold ml-20">Gidado's Store</h2>
            </div>
            <Link to="/cart" className='flex mr-11 '>
                <FontAwesomeIcon className="relative text-2xl " icon="shopping-cart" />
                <span className=' rounded-full absolute right-11 top-2 
                text-center text-black w-6 h-6 bg-teal-400'>{cartItems.length}</span>


            </Link >
        </div>



    );
}

export default Header;
