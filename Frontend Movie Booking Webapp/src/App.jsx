import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import MainBanner from "./components/MainBanner";

function App() {
  return (
    <>
      <Header></Header>
      <MainBanner></MainBanner>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
