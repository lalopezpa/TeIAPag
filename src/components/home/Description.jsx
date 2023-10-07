import React from "react";
import { Link } from "react-router-dom";

const Description = () => {
  return (
    <div className="">
      <div className="col-content border">
        <div className="container-type" >
          <div  style={{ textAlign: "center" }}>
          <span className="hello">Hola,</span>
          <br />
          <small>Bienvenidos a nuestra página de Técnicas de IA</small>
          <h2>
            Somos{" "}
            <span
              className="txt-type"
              data-wait="3000"
              data-words='["Cristian", "Camila", "Anna","Isaac"]'
            ></span>
          </h2>
          </div>

          <p>
            Algunas de las tecnologías clave de la Cuarta Revolución Industrial
            incluyen:
          </p>
          <ul>
            <li>
              <h4>Inteligencia Artificial (IA):</h4> Sistemas y algoritmos que
              permiten a las máquinas realizar tareas que normalmente requieren
              inteligencia humana, como el aprendizaje automático y el
              procesamiento de lenguaje natural.
            </li>
            <li>
              <h4>Internet de las cosas (IoT):</h4> Conecta dispositivos y
              objetos cotidianos a internet, permitiéndoles recopilar y
              compartir datos. Esto facilita la automatización y la toma de
              decisiones basada en datos.
            </li>
            <li>
              <h4>Big Data y Análisis de Datos:</h4> El procesamiento y análisis
              de grandes conjuntos de datos para extraer información
              significativa. Esto ayuda a las empresas y organizaciones a tomar
              decisiones informadas.
            </li>
            <li>
              <h4>Computación en la nube:</h4> Proporciona acceso a recursos
              informáticos a través de internet, permitiendo almacenamiento y
              procesamiento escalables sin la necesidad de infraestructura
              física local.
            </li>
            <li>
              <h4>Realidad Aumentada (AR) y Realidad Virtual (VR):</h4>{" "}
              Tecnologías que alteran la percepción del usuario, ya sea
              superponiendo información digital en el mundo real (AR) o
              sumergiendo al usuario en un entorno virtual (VR).
            </li>
          </ul>
          <p>
            Estas tecnologías no solo están cambiando la forma en que
            interactuamos con la tecnología, sino que también están
            transformando industrias enteras, desde la fabricación hasta la
            atención médica y la educación. La Cuarta Revolución Industrial está
            marcando un cambio significativo en la forma en que vivimos y
            trabajamos.
          </p>
          <p>Las tecnologías vistas hasta el momento son: IoT</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: 'center',
              
            }}
          >
            <div style={{ flex: 1 }}>
              <h3>IoT</h3>
              <img src='./assets/iot.jpeg' alt="Imagen 1" />
            </div>

            <div style={{ flex: 1 }}>
              <h3>IA</h3>
              <img src="./assets/ia.jpeg" alt="Imagen 2" />
            </div>

            <div style={{ flex: 1 }}>
              <h3>Cloud Computing</h3>
              <img src="./assets/cp.jpeg" alt="Imagen 3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Description };
