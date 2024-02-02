import "./App.css";
import Formulario from "./components/Formulario";
import Titulo from "./components/Titulo";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import ListaNoticias from "./components/ListaNoticias";
import { useState } from "react";

function App() {
  const [categoria, setCategoria] = useState('world');

  const handleCategoryChange = (newCategoria) => {
    setCategoria(newCategoria);
  };


  return (
    <>
      <Titulo></Titulo>
      <Container className="mainPage">
        <Formulario onCategoryChange={handleCategoryChange}></Formulario>
        <ListaNoticias categoria={categoria}></ListaNoticias>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
