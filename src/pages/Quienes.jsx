import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCarousel } from "../helpers/rutaPropiedades";
import Footer from "../components/Footer";
import "../css/quienes.css";
import living from '../images/living.jpg'
import "bootstrap/dist/css/bootstrap.min.css";


const Quienes = () => {
  const [carousel, setCarousel] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getCarousel().then((carousel) => {
      setCarousel({
        data: carousel,
        loading: false,
      });
    });
  }, []);

  return (
    <div>
      <div
        id="carousel"
        clad
        className="carousel slide carousel-fade"
        data-ride="carousel"
        data-pause="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={living}
              className="d-block w-100"
              alt="site 1"
            />
          </div>
           <div className="overlay">
            <div className="container">
              <div className="row align-items-center">
                <div id="cartel" className="col-md-6 text-center text-md-left">
                  <h1 className="ambito">Ambito Inmobiliaria</h1>
                  <p className="d-none d-md-block mt-4">
                    Ambito Inmobiliaria es un equipo de profesionales con vasta
                    experiencia en desarrollos de proyectos de inversión,
                    convertido en un equipo multidisciplinario. También te
                    ofrecemos la posibilidad de alquilar. Desde hace años
                    estamos abocados a la administración y alquiler de
                    propiedades brindando a nuestros clientes asesoramiento
                    administrativo y legal. Tenemos a disposición departamentos,
                    casas, oficinas, cocheras, terrenos y locales comerciales.
                    Hoy incorporamos un Desarrollo Web imnovador permitiendo la
                    comunicación e interacción con el cliente, facilitando la
                    busqueda de propiedades. Comunicados por la nueva plataforma 
                    en forma directa a travez de las redes sociales.
                  </p>
                  <Link to="/propiedades">
                    <button type="button" className="btn btn-info mt-4">
                      Encontra tu Propiedad
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  
  );

};

export default Quienes;