import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Artisans from '../pages/Artisans'
import ArtisanDetails from '../pages/ArtisanDetails'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Auth from '../pages/Auth'
import Dashboard from '../pages/Dashboard'
import PrivateRouteMiddleware from './PrivateRouteMiddleware'

const RouteApp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='artisans'>
            <Route index element={<Artisans />} /> {/* Route <domaine>/artisans */}
            <Route path=':artisanSlug' element={<ArtisanDetails />} /> {/* Route <domaine>/artisans/<ID> */}
          </Route>
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='contact' element={<Contact />} />
          <Route path='authentication' element={<Auth />} />
          <Route path='dashboard' element={<PrivateRouteMiddleware />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouteApp
