import { ChevronUp } from "../constants/icons";
import { ChevronDown } from "../constants/icons";
import { useSelector } from "../hooks/useCustomRedux";
import { useDispatch } from "../hooks/useCustomRedux";
import { cartSliceActions } from "../store/slices/cart";
import { useEffect } from "react";
import { modalSliceActions } from "../store/slices/modal";
import useZustandStore from "../store/zustand/zustandStore";

const MyAlbums = () => {
  const { cart: cartItems, totalPrice } = useSelector((state) => state.cart);
  const { open } = useZustandStore();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartSliceActions.calculateTotals());
  }, [cartItems]);

  const handleIncrease = (id: string) => {
    dispatch(cartSliceActions.increase(id));
  };

  const handleDecrease = (id: string, amount: number) => {
    if (amount === 1) {
      dispatch(cartSliceActions.remove(id)); // 수량이 1이면 항목 삭제
    } else {
      dispatch(cartSliceActions.decrease(id)); // 수량이 1보다 크면 수량 감소
    }
  };

  return (
    <div>
      <h1>당신이 선택한 음반</h1>
      {cartItems.length === 0 ? (
        <div>고객님이 좋아하는 음반을 담아보세요~!</div>
      ) : (
        <div>
          <div className="albumBox">
            {cartItems.map((album) => (
              <div className="album" key={album.id}>
                <img src={album.img} alt={album.title} />
                <div className="albumInfo">
                  <p>
                    {album.title} | ({album.singer})
                  </p>
                  <p>$ {album.price}</p>
                </div>
                <div className="albumAmount">
                  <ChevronUp
                    onClick={() => {
                      handleIncrease(album.id);
                    }}
                  />
                  {album.amount}
                  <ChevronDown
                    onClick={() => {
                      handleDecrease(album.id, album.amount);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="totalBox">
            <b>총 수량</b>
            <b>$ {totalPrice}</b>
          </div>
          <button className="resetButton" onClick={open}>
            장바구니 초기화
          </button>
        </div>
      )}
    </div>
  );
};

export default MyAlbums;
