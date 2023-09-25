import React from "react";
import { Link } from 'react-router-dom';

const Description = () => {
  return (
    <div className="col-md-6 pd-l">
      <div className="col-content">
        <div className="container-type"><br />
          <span className="hello">Hola,</span>
          <small>Bienvenidos a nuestra página de Técnicas de IA</small>
          <h2>Somos <span className="txt-type" data-wait="3000" data-words='["Cristian", "Camila", "Anna","Isaac"]'></span></h2>
          <p>En esta pestaña haga una breve descripción de cuáles son las tecnologías de la cuarta revolución industrial.</p>
          <p>Mencione las tecnologías vistas hasta el momento (IoT, IA y Cloud Computing), en cada nombre de estas
          tecnologías use imágenes creadas por IA para mencionar estas tecnologías.</p>
           <div className="btn_home">
            <a
              href="mailto: @live.com"
              aria-label="Enchufe Virtual"
              target="_blank"
              className="btn btn-chendo btn-ev btn-block mb-4">
                Contacto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Description };
