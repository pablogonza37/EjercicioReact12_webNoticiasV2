import React from 'react';
import { Form } from "react-bootstrap";
import SelectPaises from './SelectPaises';
import ListaNoticias from './ListaNoticias';
import SelectCategoria from './SelectCategoria';


const Formulario = ({ onCategoryChange, onPaisChange, categoria, pais }) => {
    


    return (
        <section className="mt-4 ">
      <Form className="p-4 text-bg-secondary rounded">
        <SelectCategoria onCategoryChange={onCategoryChange}></SelectCategoria>
        <SelectPaises onPaisChange={onPaisChange}></SelectPaises>
      </Form>
      <ListaNoticias categoria={categoria} pais={pais}></ListaNoticias>
    </section>
    );
};

export default Formulario;