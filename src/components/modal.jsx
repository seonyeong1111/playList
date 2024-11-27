import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { modalSliceActions } from "../store/slices/modal";
import { cartSliceActions } from "../store/slices/cart";

const Modal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  return (
    isOpen && (
      <div className="MyModal">
        <div className="Mask"></div>
        <div className="Modal-body">
          <h3>담아두신 모든 음반을 삭제하시겠습니까?</h3>
          <div className="content">
            <button
              className="modalBtn"
              onClick={() => {
                dispatch(modalSliceActions.close());
                dispatch(cartSliceActions.clearCart());
              }}
            >
              네
            </button>
            <button
              className="modalBtn"
              onClick={() => dispatch(modalSliceActions.close())}
            >
              아니요
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
