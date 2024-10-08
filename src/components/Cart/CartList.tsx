import CartItem, { CartItemObject } from "./CartItem";
import "./CartList.css";
import CartTotal from "./CartTotal";


export type CartListProps = {
    items: CartItemObject[];
    removeItem: (id: number) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    clearCart: () => void;
};

export default function CartList({ items, removeItem, increaseQuantity, decreaseQuantity, clearCart }: CartListProps) {
    const total = items.reduce(
        (acc, item) => acc + item.price * item.quantity, 0
    );

    return (
        <div className="cart-list">
            <div className="cart-header">
                <div className="cart-title">Your Shopping Cart</div>
            </div>

            <div className="cart-items">
                {items.map((item) =>(
                    <CartItem key={item.id} item={item} removeItem={removeItem} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
                ))}
            </div>

            <CartTotal total={total} clearCart={clearCart} />
        </div>
    )
    
}




