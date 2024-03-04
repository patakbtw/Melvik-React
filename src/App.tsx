import "./styles/App.scss";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Sidebar from "./Components/Sidebar";
import Catalog from "./Components/Catalog";

function App() {
  return (
    <>
      <div className="app-container">
        <Header></Header>
        <Body>
          {[<Sidebar/>, <Catalog/>]}
        </Body>
      </div>
    </>
  );
}

export default App;
