import React from 'react';
import { Form } from "react-bootstrap";
import SelectPaises from './SelectPaises';

const Formulario = () => {
    

    return (
        <section className="mt-4 ">
      <Form className="p-4 text-bg-secondary rounded">
        <Form.Group
          className="mb-3 d-flex justify-content-around "
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Buscar por categoria:</Form.Label>
          <Form.Select
            aria-label="Default select example"
            className="w-75"
            
          >
            <option value="world">General</option>
            <option value="business">business</option>
            <option value="domestic">domestic</option>
            <option value="education">education</option>
            <option value="entertainment">entertainment</option>
            <option value="environment">environment</option>
            <option value="food">food</option>
            <option value="health">health</option>
            <option value="lifestyle">lifestyle</option>
            <option value="politics">politics</option>
            <option value="science">science</option>
            <option value="sports">sports</option>
            <option value="technology">technology</option>
            <option value="top">top</option>
            <option value="tourism">tourism</option>
            <option value="other">other</option>
          </Form.Select>
        </Form.Group>

        <SelectPaises></SelectPaises>
      </Form>
    </section>
    );
};

export default Formulario;