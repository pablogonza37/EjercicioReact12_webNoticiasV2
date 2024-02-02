import "./App.css";
import Formulario from "./components/Formulario";
import Titulo from "./components/Titulo";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [categoria, setCategoria] = useState('world');
  const [pais, setPais] = useState('ar');

  const handleCategoryChange = (nuevaCategoria) => {
    setCategoria(nuevaCategoria);
  };

  const handlePaisChange = (nuevoPais) => {
    setPais(nuevoPais);
  };

  return (
    <>
      <Titulo></Titulo>
      <Container className="mainPage">
        <Formulario onCategoryChange={handleCategoryChange} onPaisChange={handlePaisChange} categoria={categoria} pais={pais}></Formulario>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
