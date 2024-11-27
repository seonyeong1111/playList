import "./App.css";
import MyAlbums from "./pages/MyAlbums";
import Header from "./components/header";
import Modal from "./components/modal";
import ModalPortal from "./portal/modalPortal";

function App() {
  return (
    <div>
      <Header></Header>
      <MyAlbums></MyAlbums>
      <ModalPortal>
        <Modal></Modal>
      </ModalPortal>
    </div>
  );
}

export default App;
