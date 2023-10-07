import React from "react";

const Ia = (): JSX.Element => {
  return (
    <div className="container-menu">
      <div className="grid-menu">
        <div className="col-md-12 pd-l">
          <div className="container-contact">
            <div>
              <h1>
                <strong>Descripción</strong>
              </h1>
              <p>
                La capacidad de una máquina o programa de realizar tareas que
                normalmente requieren inteligencia humana. Estas tareas incluyen
                el aprendizaje, la razonamiento, la resolución de problemas, el
                reconocimiento de voz, la percepción visual, el procesamiento
                del lenguaje natural y la toma de decisiones.
              </p>
            </div>
            <p>
              <h3>• Sección IA en la creación de imágenes:</h3> Imágenes creadas
              por IA de fusiones de personajes de cine y televisón.
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ flex: 1, textAlign: "center" }}>
                  <img src="./assets/ia1.jpeg" alt="Imagen 1" />
                </div>

                <div style={{ flex: 1, textAlign: "center" }}>
                  <img src="./assets/ia2.jpeg" alt="Imagen 2" />
                </div>

                <div style={{ flex: 1, textAlign: "center" }}>
                  <img src="./assets/ia3.jpeg" alt="Imagen 3" />
                </div>
                <div style={{ flex: 1, textAlign: "center" }}>
                  <img src="./assets/ia4.jpeg" alt="Imagen 1" />
                </div>

                <div style={{ flex: 1, textAlign: "center" }}>
                  <img src="./assets/ia5.jpeg" alt="Imagen 2" />
                </div>

                <div style={{ flex: 1, textAlign: "center" }}>
                  <img src="./assets/ia6.jpeg" alt="Imagen 3" />
                </div>
              </div>
            </p>
            <p>
              <h3>• Sección IA en la creación de Bots:</h3>
              Colocar el codigo embebido del Asistente de Watson Assistant.
            </p>
            <p>
              Nota: Este asistente debe tener al menos las siguientes
              intensiones: Saludos, Despedidas, IoT, IA y Cloud.
            </p>
            <p>
              <h3>• Sección IA en la creación de música:</h3> Colocar un Video
              que muestre como se usa Beethoven AI.
              https://www.youtube.com/watch?v=nwtAawAaNNI
            </p>

            <p>
              <h3>• Sección de IA en la creación de textos.</h3>
              Colocar un video que muestre como se usa ChatGPT
              https://www.youtube.com/watch?v=1k_WwjqDi5Q
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ia;
