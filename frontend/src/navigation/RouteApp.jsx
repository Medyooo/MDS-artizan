import {BrowserRouter,Routes, Route} from "react-router-dom"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Artisans from "../pages/Artisans";
import ArtisanDetails from "../pages/ArtisanDetails";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Auth from "../pages/Auth";

const RouteApp = () => {

    return (
      <>
      <BrowserRouter>
        <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path='artisans'> 
          <Route index element={<Artisans />} /> {/* Route <domaine>/artisans */}
          <Route path=':artisanSlug' element={<ArtisanDetails />} /> {/* Route <domaine>/artisans/<ID> */}
        </Route>
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/authentication" element={<Auth/>} />
        </Routes>
      </BrowserRouter>
      </>
    )
}
   
export default RouteApp