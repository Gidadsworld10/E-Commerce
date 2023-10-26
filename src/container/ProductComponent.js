import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const ProductComponent = () => {

  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product, idx) => {
    const { title, id, image, category, price } = product;
    return (

      <div className=" w-1/4 p-4" key={idx}>
        <Link to={`/product/${id}`}>
          <div className=" bg-white rounded-lg shadow-md  " >

            <img src={image} alt={title} className=" w-full h-48  rounded-t-lg" />
            <div className="p-4 flex flex-col flex-wrap ">
              <div className="">
                <div className="text-lg font-bold overflow-hidden">
                  {title.length > 18 ? `${title.split("").slice(0, 17)
                    .join("") + "..."}` : `${title}`}

                </div>
              </div>

              <div className="text-teal-900">${price}</div>

              <div className="text-gray-500">{category}</div>
            </div>
          </div>
        </Link>
      </div>

    )
  })
  return (
    <>
      {renderList}
    </>

  );
}

export default ProductComponent;
