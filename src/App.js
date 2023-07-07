import NavBar from "./components/NavBar/NavBar";
import Porfolio from "./components/Portfolio/Porfolio";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="text-darkText font-epilogue font-normal">
      <NavBar />  
      <Porfolio />
      <Footer/>
    </div>
  );
}

export default App;
