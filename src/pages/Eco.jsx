import React, { useEffect, useState } from "react";
import { getPropiedadId } from "../helpers/rutaPropiedades";
import PropiedadDetail from "../components/PropiedadDetail";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"
// import video from '../videos/recicla.mp4'
import logo from '../images/recicla.png'

import "../css/eco.css";

const Eco = () => {
  const [data, setData] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    getPropiedadId(id).then((datos) => {
      console.log(datos);
      setData(datos);
    })
  }, [id])

  return (
    <>
    <div className="container">
      <div className="row mt-3">
            <div className="col-lg-6">
              <h2>Reciclado de basura - Un cambio necesario</h2>
              <iframe id="video" className="mb-3"
                  width="560"
                  height="400"
                  // src={video}
                  src="https://www.youtube.com/embed/M1hoDdFWepk"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <div className="col-lg-4 mt-1">
            
             <h3 className="mt-5">Reducir</h3>
             <h4 className="mb-5">El consumo de materia prima y energiapara respetar el tiempo 
                 de la generació natural de la tierra</h4>
             <h3>Reutilizar</h3>
             <h4 className="mb-5">Infraestructuras y productos antes de comprar nuevos</h4>
             <h3>Reciclar</h3>
             <h4>Todos los residuos para evitar que se acumulen en el medio ambiente</h4>
             <h3 className="mt-5">Conciencia</h3>
             <h4>Procuremos siempre que nuestros actos, dejen una huella verde en 
                nuestros caminos</h4>
            </div>
            <div id="imagen" className="col-lg-2 mt-5">
              <img
                width="120"
                height="120"
                src={logo}
                alt="Third slide"
              />
            </div>
      
            </div>
   
    </div>
    <Footer />
    </>
  )
}
export default Eco;

  