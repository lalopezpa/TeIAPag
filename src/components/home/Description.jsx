import React from "react";
import { Link } from 'react-router-dom';

const Description = () => {
  return (
    <div className="col-md pd-l mr-md-3"> 
      <div className="col-content border"> 
        <div className="container-type">
          <br />
          <span className="hello">Hola,</span>
          <small>Bienvenidos a nuestra página de Técnicas de IA</small>
          <h2>Somos <span className="txt-type" data-wait="3000" data-words='["Cristian", "Camila", "Anna","Isaac"]'></span></h2>
          <p>
            Algunas de las tecnologías clave de la Cuarta Revolución Industrial incluyen:
          </p>
          <ul>
            <li><h4>Inteligencia Artificial (IA):</h4> Sistemas y algoritmos que permiten a las máquinas realizar tareas que normalmente requieren inteligencia humana, como el aprendizaje automático y el procesamiento de lenguaje natural.</li>
            <li><h4>Internet de las cosas (IoT):</h4> Conecta dispositivos y objetos cotidianos a internet, permitiéndoles recopilar y compartir datos. Esto facilita la automatización y la toma de decisiones basada en datos.</li>
            <li><h4>Big Data y Análisis de Datos:</h4> El procesamiento y análisis de grandes conjuntos de datos para extraer información significativa. Esto ayuda a las empresas y organizaciones a tomar decisiones informadas.</li>
            <li><h4>Computación en la nube:</h4> Proporciona acceso a recursos informáticos a través de internet, permitiendo almacenamiento y procesamiento escalables sin la necesidad de infraestructura física local.</li>
            <li><h4>Robótica avanzada:</h4> Robótica inteligente y colaborativa que va más allá de simples tareas repetitivas, involucrando robots capaces de aprender y adaptarse.</li>
            <li><h4>Realidad Aumentada (AR) y Realidad Virtual (VR):</h4> Tecnologías que alteran la percepción del usuario, ya sea superponiendo información digital en el mundo real (AR) o sumergiendo al usuario en un entorno virtual (VR).</li>
            <li><h4>Impresión 3D:</h4> Proceso de construcción de objetos tridimensionales capa por capa a partir de datos digitales. Se utiliza en la fabricación de prototipos, producción personalizada y más.</li>
            <li><h4>Blockchain:</h4> Una tecnología de registro distribuido que garantiza la seguridad y la transparencia en las transacciones digitales. Es conocida por ser la base de las criptomonedas, como Bitcoin.</li>
          </ul>
          <p>
            Estas tecnologías no solo están cambiando la forma en que interactuamos con la tecnología, sino que también están transformando industrias enteras, desde la fabricación hasta la atención médica y la educación. La Cuarta Revolución Industrial está marcando un cambio significativo en la forma en que vivimos y trabajamos.
          </p>
          <p>
            Mencione las tecnologías vistas hasta el momento (IoT, IA y Cloud Computing), en cada nombre de estas tecnologías use imágenes creadas por IA para mencionar estas tecnologías.
          </p>
          <div className="btn_home">
            <a
              href="mailto: @live.com"
              aria-label="Enchufe Virtual"
              target="_blank"
              className="btn btn-chendo btn-ev btn-block mb-4"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Description };
