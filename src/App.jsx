import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="main-body">
        <Header />
        <SideBar />
        <Main />
      </div>
    </>
  );
}

export default App;
