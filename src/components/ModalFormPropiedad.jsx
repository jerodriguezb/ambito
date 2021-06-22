import React, { useState } from "react";
import { modifPropiedad } from "../helpers/rutaPropiedades";
import { Modal, Button } from "react-bootstrap";

const ModalFormPropiedad = ({ propiedad, handleClose }) => {
  const id = JSON.parse(localStorage.getItem("id"));
  const [formValues, setFormValues] = useState({
    CodigoPropiedad: propiedad.CodigoPropiedad,
    Titulo: propiedad.Titulo,
    EstadoPropiedad: propiedad.EstadoPropiedad, 
    TipoPropiedad:propiedad.TipoPropiedad,
    DireccionFisica:propiedad.DireccionFisica,
    Descripcion:propiedad.Descripcion,
    Barrio:propiedad.Barrio,
    Lugar:propiedad.Lugar,
    Valor:propiedad.Valor,
    SuperficieTotal:propiedad.SuperficieTotal,
    Ambientes:propiedad.Ambientes,
    Dormitorio:propiedad.Dormitorio,
    Baño:propiedad.Baño,
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

    modifPropiedad(formValues, propiedad._id).then((respuesta) => {
      console.log(respuesta);

      handleClose();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Modal.Body>
        <div className="form-group">
          <label>Codigo Propiedad</label>
          <input
            type="text"
            className="form-control"
            name="CodigoPropiedad"
            required
            value={formValues.CodigoPropiedad}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Titulo</label>
          <input
            type="text"
            className="form-control"
            name="Titulo"
            requerid
            value={formValues.Titulo}
            onChange={handleChange}
          />
          {/* <small>Url de imagen</small> */}
        </div>
        <div className="form-group">
          <label>Estado Propiedad</label>
          <textarea
            className="form-control"
            // rows="3"
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
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" variant="outline-info">
          Guardar22
        </Button>
      </Modal.Footer>
    </form>
  );
};

export default ModalFormPropiedad;
