import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Header } from './components/Header'
import { Oders } from './components/Orders'
import { GlobalStyles } from './styles/GlobalStyles'

export function App() {

  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Oders/>
      <ToastContainer position='bottom-center'/>
    </>
  )
}