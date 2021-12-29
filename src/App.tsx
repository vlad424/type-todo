import MainArea from './components/MainArea';
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
    </div>
  );
}

export default App;
