import React from "react";

const Iot = (): JSX.Element => {
  return (
    <main className="container-menu">
      <div className="grid-menu mb-4">
        {/* Sección de Descripción */}
        <div className="col-md-6 pd-l">
          <div className="col-content">
            <span className="section-title"><h1>Internet de las Cosas (IoT)</h1></span>
            <p>
              El Internet de las cosas nos permite conectar y controlar
              dispositivos a través de la red, transformando la forma en que
              interactuamos con el mundo.
            </p>
            <p>
              <i>
                ¿Te imaginas poder encender las luces de tu casa desde tu
                teléfono móvil estando en cualquier lugar del mundo? Eso es IoT.
              </i>
            </p>
            <p>
              Ahora no sólo imagines, ¡mira lo que podemos hacer!
              <div className="col-md-12 pd-l">
                <div className="col-content">
                  <iframe
                    width="100%"
                    height="220"
                    src="https://www.youtube.com/embed/HGlwKCWEIQ0"
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

        {/* Sección de Casos de Uso */}
        <div className="col-md-6 pd-l">
          <div className="col-content">
            <span className="section-title"><h1>Casos de Uso</h1></span>
            <p>
              El potencial de IoT es infinito. Aquí algunos ejemplos destacados:
            </p>
            <ul>
              <li>
                La ciudad de Barcelona utiliza sensores para gestionar el
                tráfico, monitorear la calidad del aire y mejorar la iluminación
                pública, optimizando la calidad de vida de sus habitantes.
              </li>
              <li>
                Dispositivos médicos como monitores de glucosa conectados y
                wearables revolucionan la atención médica, proporcionando datos
                en tiempo real.
              </li>
              <li>
                En nuestros hogares, desde termostatos hasta sistemas de
                seguridad, dispositivos IoT como el sistema Nest hacen nuestra
                vida más cómoda y eficiente.
              </li>
              <li>
                ¡Incluso estudiantes pueden utilizar IoT para desarrollar
                soluciones innovadoras, como un bot para ayudar a personas
                tristes!
              </li>
            </ul>
            <p>
              Para más inspiración, mira nuestro video del reto Nº1 aquí abajo.
            </p>
          </div>
        </div>
        
        {/* Visualización del Video de YouTube */}
        <div className="col-md-12 pd-l">
          <div className="col-content" style={{ textAlign: "center" }}>
            <p>
              ¡Dale rienda suelta a tu creatividad! Nada más recuerda siempre tener... ¡EmpatIA!
            </p>
            <iframe
              width="77%"
              height="315"
              src="https://www.youtube.com/embed/HWt8zBulk9A"
              title="Video de IoT"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <span className="line"></span>
      </div>
    </main>
  );
};

export default Iot;
