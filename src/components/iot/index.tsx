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
              Para más inspiración, mira nuestro video del reto 1 en{" "}
              <a
                href="https://www.youtube.com/watch?si=b0oLERG07VgR6bcS&v=HWt8zBulk9A&feature=youtu.be"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
              .  ¡Y aquí tienes una previsualización de un video de un caso de uso adicional!
            </p>
          </div>
        </div>

        {/* Visualización del Video de YouTube */}
        <div className="col-md-12 pd-l">
          <div className="col-content">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/HGlwKCWEIQ0"
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
