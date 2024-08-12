import useCart from "../hooks/useCart";
import { useState } from "react";
import CartLineItem from "./CartLineItem";
import { PaystackButton } from "react-paystack";

const Cart = () => {
  const [confirm, setConfirm] = useState(false);

  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();

  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setConfirm(true);
  };

  const componentProps = {
    email: "azeemolajide7@gmail.com",
    amount: totalPrice * 100,  // Convert to kobo
    publicKey: "pk_test_a596e9ec3cae8111ee3d7f161fb3540d18f5575b",
    text: "Order",
    onSuccess: () => {
      alert("Payment Successful");
      onSubmitOrder();
    },
    onClose: () => alert("Payment dialog closed"),
  };

  const pageContent = confirm ? (
    <h2>Thank you for your order</h2>
  ) : (
    <>
      <h2 className="offscreen">Cart</h2>
      <ul className="cart">
        {cart.map((item) => (
          <CartLineItem
            key={item.sku}
            item={item}
            dispatch={dispatch}
            REDUCER_ACTIONS={REDUCER_ACTIONS}
          />
        ))}
      </ul>

      <div className="cart__totals">
        <p>Total Items: {totalItems}</p>
        <p>Total Price: ₦{totalPrice.toFixed(2)}</p> {/* Formatting for display */}
        <PaystackButton {...componentProps} />
      </div>
    </>
  );

  const content = <main className="main main--cart">{pageContent}</main>;
  return content;
};

export default Cart;