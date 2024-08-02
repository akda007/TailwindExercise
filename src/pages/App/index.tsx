import Footer from '../../shared/components/Footer'
import Navbar from '../../shared/components/Navbar'
import Button from './components/Button'

export default function App() {

  return (
    <>
        <Navbar/>

        <div className='main-content' style={{minHeight: "80vh", marginTop: "10vh"}}>
            <Button onClick={() => {alert("Botao")}}>
                Texto
            </Button>
        </div>

        <Footer/>
    </>
  )
}

