import { formatPrice } from "../../utils/format";
import "./CartTotal.css";

type CartTotalProps = {
    total: number;  //hoac total:number; thi se phai tu tinh
    clearCart: () => void;
}

export default function CartTotal({total, clearCart}: CartTotalProps) {
    return (
        <div className="cart-footer">
            <div className="cart-total">
                <div className="label">Total</div>
                <div className="value">{formatPrice(total)}</div>
            </div>

            <div className="cart-action">
                <button className="clear" onClick={clearCart}>Clear cart</button>
            </div>
        </div>
    );
}