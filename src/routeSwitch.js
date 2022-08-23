import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";


const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={process.env.PUBLIC_URL + '/'} element={<App />} />
        <Route path={process.env.PUBLIC_URL + '/shop'} element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
