import React from "react";

const ProductCart = ({
  item,
  handleReduceQuantity,
  handleIncreaseQuantity,
  handleRemoveItem,
}) => {
  const imageUrl =
    "https://i.pinimg.com/564x/8e/e4/3c/8ee43c71642a9cb223d0e05dd5a5630a.jpg";

  //const [quantity, setQuantity] = useState(item.quantity)

  return (
    <li className="flex-1 w-full p-[20px] bg-white rounded-lg shadow-md">
      <div className="flex w-full gap-4">
        <div className="max-w-[200px] h-[200px] w-full">
          <img
            src={item.product.imageUrl || imageUrl}
            alt="product image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="py-[20px] flex flex-col justify-between min-h-full">
          <div className="space-y-2">
            <h3 className="text-[20px] font-bold">{item.product.name}</h3>
            <p>{item.product.description}</p>
          </div>
          <div className="flex gap-3 items-center ">
            <p className="text-[14px] line-through">S/.{item.product.price}</p>
            <span className="text-[20px] font-bold">
              {item.product.pointsNeeded * item.quantity} pts.
            </span>
          </div>
        </div>
      </div>
      <div className="flex mt-[20px] items-center gap-8">
        <div className="border">
          <button
            className="p-3"
            onClick={() =>
              item.quantity > 1 && handleReduceQuantity(item.id, item)
            }
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <input
            type="text"
            value={item.quantity}
            className="w-16 p-1 border rounded text-center"
            readOnly
          />
          <button
            className="p-3"
            onClick={() => handleIncreaseQuantity(item.id, item)}
          >
            +
          </button>
        </div>
        <button
          onClick={() => handleRemoveItem(item.id)}
          className="p-3 border text-red-500 hover:text-white hover:bg-red-700 transition-all duration-200 rounded-md"
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default ProductCart;
