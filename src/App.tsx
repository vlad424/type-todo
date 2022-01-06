import MainArea from './components/MainArea';
import Modal from './components/modal/Modal';
import SideBar from './components/SideBar';
import './styles/app.css'

function App() {
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
    </div>
  );
}

export default App;
