import './App.css'
import NavBarHeader from './components/artisans/header/NavBarHeader'
import RouteApp from './navigation/RouteApp'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App () {
  return (
    <>
      <NavBarHeader />
      <RouteApp />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </>
  )
}

export default App
