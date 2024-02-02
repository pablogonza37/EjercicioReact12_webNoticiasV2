import { Row, Col } from "react-bootstrap";
import Noticia from "./Noticia";
import React, { useState, useEffect } from 'react';

const ListaNoticias = ({categoria}) => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetchNoticias(categoria);
  }, [categoria]);

  const fetchNoticias = (categoria) => {
    fetch(
      `https://newsdata.io/api/1/news?apikey=pub_374867eb717c36cfe3081169e0a55ea02fe14&country=au,us&category=${categoria}`
    )
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Respuesta de red incorrecta");
        }
        return resp.json();
      })
      .then((data) => {
        setNoticias(data.results || []);
      })
      .catch((error) => {
        console.error("Error al recuperar noticias:", error);
      });
  };

  return (
    <div className="py-3 mt-3">
      <Row className="d-flex justify-content-center">
        {noticias.map((item, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Noticia item={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ListaNoticias;
