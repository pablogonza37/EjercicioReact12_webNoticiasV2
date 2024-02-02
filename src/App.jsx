
import './App.css'
import Formulario from './components/Formulario';
import Titulo from './components/Titulo'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
 

  return (
    <>
      <Titulo></Titulo>
      <Container className="mainPage">
        
        <Formulario></Formulario>
      </Container>
    </>
  )
}

export default App
