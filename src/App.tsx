import MainArea from './components/MainArea';
import Modal from './components/modal/Modal';
import ModalEdit from './components/edit_modal/ModalEdit'
import SideBar from './components/SideBar';
import './styles/app.css'
import { useEffect} from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  
  //dispatch({type: "STORAGE_PUSH", payload: {content: "0", id: 0}})
  return (
    <div className="App">
      <div className="wrap">
        <div className="main">
          <aside className="left_side">
            <SideBar/>
          </aside>
          <aside className="right_side">
            <MainArea/>
          </aside>
        </div>
      </div>
      <Modal/>
      <ModalEdit/>
    </div>
  );
}

export default App;
