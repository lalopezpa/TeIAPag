import React from "react";
import { WebChatContainer, setEnableDebug } from '@ibm-watson/assistant-web-chat-react';

const webChatOptions = {
  integrationID: '713c4cf4-c068-49f0-8b6d-5759221ae248',
  region: 'us-south' as const,
  serviceInstanceID: 'bb474fb6-6a5e-4a83-ba80-93a2060b17e4',
  // subscriptionID: 'only on enterprise plans',
  // Note that there is no onLoad property here. The WebChatContainer component will override it.
  // Use the onBeforeRender or onAfterRender prop instead.
};

// Include this if you want to get debugging information from this library. Note this is different than
// the web chat "debug: true" configuration option which enables debugging within web chat.
setEnableDebug(true);

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
                el aprendizaje, el razonamiento, la resolución de problemas, el
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
              Código embebido del Asistente de Watson Assistant.
            </p>
            <p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ flex: 1, textAlign: "center",}}>
                  <img src="../assets/chrono_laughter.jpeg" alt="Imagen 1" />
                </div>

                <div style={{ flex: 1, textAlign: "center" }}>
                  <h3>Chrono Laughter</h3>
                  <h3>Assistant</h3>
                </div>
                <div style={{ flex: 1, textAlign: "center" }}>
                  <h3></h3>
                </div>
              </div>
            </p>
            <WebChatContainer config={webChatOptions} />
            <p>
              ¡Deja fuera la timidez y saluda a Chrono, pídele un chiste, preguntale sobre IoT, IA y Cloud! Y no olvides despedirte, sé educado u.u
            </p>
            <p>
              <h3>• Sección IA en la creación de música:</h3> Conviertete en un prodigio al instante con Beethoven AI.
              {/* Visualización del Video de YouTube */}
              <div className="col-md-12 pd-l" style={{ textAlign: "center" }}>
                <div className="col-content">
                  <iframe
                    width="77%"
                    height="225"
                    src="https://www.youtube.com/embed/nwtAawAaNNI"
                    title="Video de IoT"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </p>

            <p>
              <h3>• Sección de IA en la creación de textos.</h3> Aprende sobre el generador de texto que está revolucionando a diestra y siniestra, ChatGPT.
              <div className="col-md-12 pd-l" style={{ textAlign: "center" }}>
                <div className="col-content">
                  <iframe
                    width="77%"
                    height="225"
                    src="https://www.youtube.com/embed/1k_WwjqDi5Q"
                    title="Video de IoT"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Ia;
