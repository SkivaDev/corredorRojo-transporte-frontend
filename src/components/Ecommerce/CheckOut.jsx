import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PriceDetails from "./PriceDetails";
import { getCart } from "../../api/CartService";
import { listCartItems } from "../../api/CartItemService";
import { MapPinHouse } from "lucide-react";
import { getUser } from "../../api/UserService";
import { useForm } from "react-hook-form";

const CheckOut = () => {
  const [cart, setCart] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState({});

  const [isFormActive, setIsFormActive] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  useEffect(() => {
    const fetchData = async () => {
      try {
        const savedUserId = parseInt(localStorage.getItem("userId"), 10);

        const userData = await getUser(savedUserId);
        setUser(userData);

        const cartData = await getCart(savedUserId);
        setCart(cartData);

        const cartItemsData = await listCartItems(cartData.id);
        setCartItems(cartItemsData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const handlePaymentMethod = () => {
    alert("Pago realizado");
  };

  return (
    <div className="p-4 mt-16 sm:ml-64 bg-gray-100 min-h-screen">
      <div>
        <div className="flex justify-start items-center mb-4 bg-transparent">
          <h2 className="text-2xl font-bold">Dirección de envio</h2>
        </div>

        <div className="w-full flex gap-8">
          <div className="flex-1 space-y-6">
            <div className="w-full bg-white p-6 rounded-md shadow-md">
              <div className="flex justify-end">
                <button
                  onClick={() => setIsFormActive(!isFormActive)}
                  className="p-2 border border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition-all duration-200 text-[12px]"
                >
                  {isFormActive ? "Cancelar" : "Cambiar dirección"}
                </button>
              </div>
              {isFormActive ? (
                <>
                  <div className="flex gap-2">
                    <span>
                      <MapPinHouse />
                    </span>
                    <p>Ingresa tu nueva dirección de envío</p>
                  </div>

                  <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <textarea
                        rows={3}
                        // Que sea estatico y que no se pueda agrander el textarea

                        placeholder="Dirección *"
                        {...register("address", { required: true, maxLength: 50 })}
                        className="w-full mt-6 p-2 border border-gray-300 rounded-md hover:border-gray-400 focus:border-gray-400 transition-all duration-200 resize-none"
                      />
                      {errors.address && errors.address.type === "required" && (
                        <span>Debe agregar una dirección</span>
                      )}
                      {errors.address && errors.address.type === "maxLength" && (
                        <span>La dirección no puede exceder los 50 caracteres</span>
                      )}
                      <input
                        type="submit"
                        className="block mt-4 p-2 border border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition-all duration-200 text-[14px] cursor-pointer"
                      />
                    </form>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex mt-4 gap-2">
                    <span>
                      <MapPinHouse />
                    </span>
                    <p>
                      Dirección de envío (Entregas de Lun a Sáb de 8am-10pm)
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-bold">Nombre: {user.username}</h3>
                    <p>Dirección: {user.address}</p>
                    <h3 className="font-bold">Número de Telefono: </h3>
                    <p>{user.phone}</p>
                  </div>
                </>
              )}
            </div>

            <div>
              <div className="flex justify-start items-center mb-4 bg-transparent">
                <h2 className="text-2xl font-bold">Método de Canje</h2>
              </div>

              <div className="w-full bg-white p-6 rounded-md shadow-md">
                <div className="flex gap-3">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="" className="text-red-500 font-bold">
                    Canje Puntos de Tarjeta
                  </label>
                </div>
                <div>----</div>
                {/* Elige la dirección de envio asociada con este método de pago */}

                <p>Elige la direccíon asociada con este método de pago</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="shippingAddress"
                      id="shippingAddressYes"
                      className="form-radio h-4 w-4 text-blue-600"
                    />
                    <label htmlFor="shippingAddressYes" className="ml-2">
                      Sí
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="shippingAddress"
                      id="shippingAddressNo"
                      className="form-radio h-4 w-4 text-blue-600"
                    />
                    <label htmlFor="shippingAddressNo" className="ml-2">
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-start items-center mb-4 bg-transparent">
                <h2 className="text-2xl font-bold">Tus Productos</h2>
              </div>
              <ul className="space-y-3">
                {cartItems.map((item) => (
                  <ProductCheckOut key={item.id} item={item} />
                ))}
              </ul>
            </div>
          </div>

          <PriceDetails cart={cartItems} handleMethod={handlePaymentMethod} />
        </div>
      </div>
    </div>
  );
};

const ProductCheckOut = ({ item }) => {
  return (
    <li key={item.id} className="w-full bg-white p-6 rounded-md shadow-md">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <img
            src={item.product.imageUrl}
            alt="product image"
            className="w-[130px] h-[130px] object-cover rounded-md"
          />
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-xs text-gray-400">Envio</span>
              <h3 className="font-bold">{item.product.name}</h3>
              <p>{item.product.description}</p>
              <span className="text-xs text-gray-400">Nuevo</span>
            </div>
            <div className="flex gap-3 items-center">
              <p className="font-bold">
                <span></span> {item.product.pointsNeeded * item.quantity} pts.
              </p>
            </div>
          </div>
        </div>
        <div className="text-gray-400">
          <span>Cantidad: {item.quantity}</span>
        </div>
      </div>
    </li>
  );
};

export default CheckOut;
