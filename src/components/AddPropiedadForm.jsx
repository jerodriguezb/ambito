import React, { useState } from "react";
import {addPropiedad} from "../helpers/rutaPropiedades";

const AddPropiedadForm = ({ setShow }) => {
  const id = JSON.parse(localStorage.getItem("id"));
  const [formValues, setFormValues] = useState({
    CodigoPropiedad: "",
    Titulo: "",   
    EstadoPropiedad: "",
    TipoPropiedad: "",
    DireccionFisica: "",
    Descripcion: "",
    Barrio: "",
    Lugar: "",
    Valor: "",
    SuperficieTotal: "",
    Ambientes: "",
    Dormitorio: "",
    Baño: "",
    usuario: id,
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPropiedad(formValues).then((resp) => {
      console.log(resp);

      setFormValues({
        CodigoPropiedad: "",

        Titulo: "",

        EstadoPropiedad: "",
      });

      setShow(false);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Título</label>
        <input
          type="text"
          className="form-control"
          name="Titulo"
          required
          value={formValues.Titulo}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Codigo Propiedad</label>
        <input
          type="text"
          className="form-control"
          rows="1"
          name="CodigoPropiedad"
          value={formValues.CodigoPropiedad}
          onChange={handleChange}
        />
        {/* <small>Url de imagen</small> */}
      </div>
      <div className="form-group">
        <label>Estado Propiedad</label>
        <textarea
          className="form-control"
          rows="1"
          required
          name="EstadoPropiedad"
          value={formValues.EstadoPropiedad}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-group">
        <label>Tipo Propiedad</label>
        <textarea
          className="form-control"
          rows="1"
          required
          name="TipoPropiedad"
          value={formValues.TipoPropiedad}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-group">
        <label>Direccion</label>
        <input
          type="text"
          className="form-control"
          name="DireccionFisica"
          value={formValues.DireccionFisica}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Descripcion</label>
        <input
          type="text"
          className="form-control"
          name="Descripcion"
          value={formValues.Descripcion}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Barrio</label>
        <input
          type="text"
          className="form-control"
          name="Barrio"
          value={formValues.Barrio}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Lugar</label>
        <input
          type="text"
          className="form-control"
          name="Lugar"
          value={formValues.Lugar}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Valor</label>
        <input
          type="text"
          className="form-control"
          name="Valor"
          value={formValues.Valor}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Superficie Total</label>
        <input
          type="text"
          className="form-control"
          name="SuperficieTotal"
          value={formValues.SuperficieTotal}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Ambientes</label>
        <input
          type="text"
          className="form-control"
          name="Ambientes"
          value={formValues.Ambientes}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Dormitorio</label>
        <input
          type="text"
          className="form-control"
          name="Dormitorio"
          value={formValues.Dormitorio}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Baño</label>
        <input
          type="text"
          className="form-control"
          name="Baño"
          value={formValues.Baño}
          onChange={handleChange}
        />
      </div>


      {/* <div className="form-group">
        <label>Video</label>
        <input
          type="text"
          className="form-control"
          name="video"
          value={formValues.video}
          onChange={handleChange}
        />
        <small>Url del video de youtube</small>
      </div>
      <div className="form-group">
        <label>Mentor</label>
        <input
          type="text"
          className="form-control"
          placeholder="Nombre del mentor"
          name="mentor"
          required
          value={formValues.mentor}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Avatar Mentor</label>
        <input
          type="text"
          className="form-control"
          name="img_mentor"
          value={formValues.img_mentor}
          onChange={handleChange}
        />
        <small>Url de imagen</small>
      </div> */}
      <div>
        <button type="submit" className="btn btn-outline-info">
          Guardar
        </button>
      </div>
    </form>
  );
};

export default AddPropiedadForm;
