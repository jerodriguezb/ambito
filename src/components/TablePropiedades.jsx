import React, { useState, useEffect } from "react";
import { getPropiedades, delPropiedad, getPropiedadId } from "../helpers/rutaPropiedades";
import ModalPropiedad from "./ModalPropiedad";
import { Table } from "react-bootstrap";

const TablePropiedades = () => {
  let id_propiedad = "";

  const [propiedades, setPropiedades] = useState({
    data: {},
    loading: true,
  });

  const [propiedad, setPropiedad] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    consultaPropiedades();
  }, []);

  const consultaPropiedades = (desde) => {
    getPropiedades(desde, 20).then((datos) => {
      setPropiedades({
        data: datos,
        loading: false,
      });
    });
  };

  const handleClose = () => {
    setShow(false);
    consultaPropiedades();
  };
  const handleShow = () => setShow(true);

  const modificaPropiedad = (id) => {
    id_propiedad = id;

    getPropiedadId(id_propiedad).then((resp) => {
      console.log(resp);
      setPropiedad(resp);

      handleShow();
    });
  };

  const deletePropiedad = (id) => {
    let validar = window.confirm("está seguro que desea borrar la Propiedad?");
    if (validar) {
      delPropiedad(id).then((resp) => {
        consultaPropiedades();
      });
    }
  };

  return (
    <div>
      {!propiedades.loading && (
        <>
          <div className="col-12 mt-4"></div>
          <Table striped bordered hover className="mt-2">
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Título</th>
                <th>Estado</th>
                <th>Tipo</th>
                <th>Direccion</th>
                <th>Descripcion</th>
                <th>Barrio</th>
                <th>Lugar</th>
                <th>Valor</th>
                <th>Sup.Tot.</th>
                <th>Ambientes</th>
                <th>Dormitorio</th>
                <th>Baño</th>
                <th>Modif/Eliminar</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {propiedades.data.propiedades.map((propiedad) => (
                <tr key={propiedad._id}>
                  <td>{propiedad.CodigoPropiedad}</td>
                  <td>{propiedad.Titulo}</td>
                  <td>{propiedad.EstadoPropiedad}</td>
                  <td>{propiedad.TipoPropiedad}</td>
                  <td>{propiedad.DireccionFisica}</td>
                  <td>{propiedad.Descripcion}</td>
                  <td>{propiedad.Barrio}</td>
                  <td>{propiedad.Lugar}</td>
                  <td>{propiedad.Valor}</td>
                  <td>{propiedad.SuperficieTotal}</td>
                  <td>{propiedad.Ambientes}</td>
                  <td>{propiedad.Dormitorio}</td>
                  <td>{propiedad.Baño}</td>
                  {/* <td>{usuario.nombre}</td> */}
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        modificaPropiedad(propiedad._id);
                      }}
                    >
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>
                    </button>
                    <button
                      className="btn btn-danger ml-2"
                      onClick={() => {
                        deletePropiedad(propiedad._id);
                      }}
                    >
                      <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <ModalPropiedad
            show={show}
            handleClose={handleClose}
            propiedad={propiedad.propiedad}
          />
        </>
      )}
    </div>
  );
};

export default TablePropiedades;
