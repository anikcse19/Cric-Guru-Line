import { Outlet } from "react-router-dom"
import Footer from "./components/shared/Footer"
import Navbar from "./components/shared/Navbar"
import { Button } from "./components/ui/button"
import MatchesBar from "./components/shared/MatchesBar";


function App() {


  return (
    <div>
      <Navbar></Navbar>
      <MatchesBar></MatchesBar>
      <div className=" bg-[#eef0f3]">
        <div className="max-w-[1400px]  mx-auto">
          <Outlet></Outlet>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App
