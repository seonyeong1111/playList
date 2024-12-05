import { CartIcon } from "../constants/icons";
import { useSelector } from "../hooks/useCustomRedux";

const Header = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <header>
      UMC PlayList
      <div className="cart-icon">
        <CartIcon />
        <span className="cart-badge">{totalAmount}</span>
      </div>
    </header>
  );
};

export default Header;
