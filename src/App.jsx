import "./App.css";
import Formulario from "./components/Formulario";
import Titulo from "./components/Titulo";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import ListaNoticias from "./components/ListaNoticias";

function App() {
  return (
    <>
      <Titulo></Titulo>
      <Container className="mainPage">
        <Formulario></Formulario>
        <ListaNoticias></ListaNoticias>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
