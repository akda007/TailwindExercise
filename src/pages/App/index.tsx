import { useState } from 'react'
import Footer from '../../shared/components/Footer'
import Navbar from '../../shared/components/Navbar'
import Button from './components/Button'
import Alert from './components/Alert'
import Card from './components/Card'
import Table from './components/Table'

const columns: string[] = ['Nome', 'Idade', 'Cidade'];
const data: (string | number)[][] = [
  ['João', 28, 'São Paulo'],
  ['Maria', 34, 'Rio de Janeiro'],
  ['Pedro', 23, 'Belo Horizonte'],
  ['Ana', 30, 'Curitiba'],
];

export default function App() {
  const [open, setOpen] = useState(true)

  return (
    <>
      <Alert open={open} setOpen={setOpen} timeout={2}>
        Teste
      </Alert>
      <Navbar/>

      <div className='main-content' style={{minHeight: "calc(90vh - 60px)", marginTop: "60px"}}>
          <Button onClick={() => {setOpen(true)}}>
              Texto
          </Button>

          <div className='mt-5 w-full flex items-center justify-evenly'>
            <Card text='Teste card1'/>
            <Card text='Teste card2'/>
            <Card text='Teste card3'/>
            <Card text='Teste card4'/>
          </div>
        
          <Table columns={columns} data={data}/>
      </div>




      <Footer/>
    </>
  )
}

