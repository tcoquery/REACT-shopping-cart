import React from "react";
import Navbar from "./components/Navbar";
import background from "./img/background.jpg";
import { Link } from "react-router-dom";

function App() {

  return (
    <div class="h-screen w-full overflow-hidden">
      <Navbar />
      <div class="h-full bg-center bg-cover flex flex-col items-center justify-center"  style={{backgroundImage: `url(${background})`}}>
        <div class="bg-transparent px-2 py-4 border-2 border-white">        
        <Link to={process.env.PUBLIC_URL + '/shop'} class="font-serif text-black bg-white border border-white focus:outline-none hover:bg-gray-100 font-medium text-sm p-2.5">SHOP NOW</Link>
        </div>

      </div>
    </div>
  );
}

export default App;
