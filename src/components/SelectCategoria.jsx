import Form from "react-bootstrap/Form";

const SelectCategoria = ({ onCategoryChange }) => {
  const categorias = [
    "world",
    "business",
    "crime",
    "domestic",
    "education",
    "entertainment",
    "environment",
    "food",
    "health",
    "lifestyle",
    "other",
    "politics",
    "science",
    "sports",
    "technology",
    "top",
    "tourism",
  ];

  const handleCategoryChange = (e) => {
    const newCategoria = e.target.value;
    onCategoryChange(newCategoria);
  };

  return (
    <Form.Group
      className="mb-3 d-flex justify-content-around "
      controlId="exampleForm.ControlInput1"
    >
      <Form.Label>Buscar por categoria:</Form.Label>
      <Form.Select
        aria-label="Default select example"
        className="w-75"
        onChange={handleCategoryChange}
      >
        {categorias.map((categoria, index) => (
          <option key={index} value={categoria}>
            {categoria}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default SelectCategoria;
