import { Row, Col } from "react-bootstrap";
import Noticia from "./Noticia";
import React, { useState, useEffect } from 'react';

const ListaNoticias = ({categoria, pais}) => {
  const [noticias, setNoticias] = useState([]);
  const [error, setError] = useState(null);
  const apiKey = 'pub_374867eb717c36cfe3081169e0a55ea02fe14'

  useEffect(() => {
    fetchNoticias(categoria, pais);
  }, [categoria, pais]);

  const fetchNoticias = (categoria, pais) => {
    fetch(
      `https://newsdata.io/api/1/news?apikey=${apiKey}&country=${pais}&category=${categoria}`
    )
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Respuesta de red incorrecta");
        }
        return resp.json();
      })
      .then((data) => {
        setNoticias(data.results || []);
        setError(null);
      })
      .catch(() => {
        setError("Error al recuperar noticias: intentalo nuevamente");
      });
  };

  return (
    <div className="py-3 mt-3">
      {error && <div className="alert alert-danger">{error}</div>}
      {!error && noticias.length === 0 && (
        <div className="alert alert-info">No hay noticias disponibles.</div>
      )}
      {noticias.length > 0 && (
        <Row className="d-flex justify-content-center">
          {noticias.map((item, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Noticia item={item} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default ListaNoticias;
