import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Noticia = ({ item }) => {
  return (
    <Card className="shadow">
      <Card.Img variant="top" src={item.image_url} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Footer className="text-muted text-center">
          <Button variant="primary" href={item.link} target="_blank">
            Ver noticia completa
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default Noticia;