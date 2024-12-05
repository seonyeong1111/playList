import { create } from "zustand";

interface IStore {
  isOpen: Boolean;
  open: () => void;
  close: () => void;
}
//Zustand는 리액트 상태 관리를 위한 라이브러리이지만,
//상태를 커스텀 훅 형태로 반환하기 때문에 React에서 흔히 볼 수 있는
//useState, useEffect 같은 내장 훅처럼 이름을 짓는 것이 좋습니다.
const useZustandStore = create<IStore>((set) => ({
  isOpen: false,
  open: () =>
    set((state) => ({
      isOpen: true,
    })),
  close: () =>
    set((state) => ({
      isOpen: false,
    })),
}));

export default useZustandStore;
