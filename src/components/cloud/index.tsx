import React from "react";

const Cloud = (): JSX.Element => {
  return (
    <div className="container-menu">
      <div className="grid-menu">
        {/* Sección de Descripción de Cloud Computing */}
        <div className="col-md-12 pd-l">
          <div className="container-contact">
            <span className="section-title"><h1>Cloud Computing</h1></span>
            <p>
              Un dato curioso: mucho de lo que hacemos en nuestros computadores
              personales no es estrictamente necesario ejecutar en nuestros
              computadores personales, nuevamente gracias a la gracia y poder
              del internet.
            </p>
            <p>
            La computación en la nube permite hacer uso de servicios de cómputo a distancia, 
            es decir, ya no necesito comprar un computador que cuesta 8 meses de trabajo para 
            poder realizar renders de animaciones en alta calidad, si hay un proveedor que ofrezca
            este servicio en la nube puedo hacer uso del hardware de ellos desde mi humilde pc que 
            tiene un procesador de hace 8 generaciones. Eso sí, la conexión a internet es indispensable.
            </p>
            <p>
            ¡Allí está la magia de la computación en la nube! Dejas de depender de tu hardware 
            (incluyendo almacenamiento) en enorme medida, solo necesitas un proveedor y buena 
            conexión a internet.
            </p>
         </div>
        </div>

        {/* Sección de Proveedores Cloud */}
        <div className="col-md-12 pd-l">
          <span className="section-title" style={{ textAlign: "center" }}><h1>Proveedores Cloud</h1></span>
          <div className="provider-section">
            {/* AWS */}
            <div className="provider-item" style={{ textAlign: "center" }}>
              <p>Amazon Web Services (AWS)</p>
              <div className="video-preview">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/a9__D53WsUs"
                  title="Video de AWS"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Azure */}
            <div className="provider-item" style={{ textAlign: "center" }}>
              <p>Microsoft Azure</p>
              <div className="video-preview">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/oPSHs71mTVU"
                  title="Video de Azure"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Google Cloud */}
            <div className="provider-item" style={{ textAlign: "center" }}>
              <p>Google Cloud</p>
              <div className="video-preview">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/tCHYMtccduY"
                  title="Video de Google Cloud"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* IBM Cloud */}
            <div className="provider-item" style={{ textAlign: "center" }}>
              <p>IBM Cloud</p>
              <div className="video-preview">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/HzugDzl2cfg"
                  title="Video de IBM Cloud"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <span className="line"></span>
      </div>
    </div>
  );
};

export default Cloud;
