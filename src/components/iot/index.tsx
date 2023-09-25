import React from "react";


const Iot = (): JSX.Element => {


  return (
    <main className="container-menu">
      <div className="grid-menu mb-4">
        <div className="col-md-6 pd-l">
          <div className="col-content">
            <span>IoT!</span>
            <p></p>
            <p>&nbsp;</p>
            <p>
              <i>
                En esta pestaña haga una breve descripción de que se entiende
                por Internet de las cosas.
              </i>
            </p>
          </div>
        </div>
        <div className="col-md-6 pd-l">
          <div className="col-content">
            <span>Usos...</span>
            <p>
              • Mencione casos de usos del IoT, en esta sección se podría
              colocar el video del reto 1 hecho por ustedes. 
            </p>
            <p>
              Coloque otro
              video de YouTube de casos de uso de IoT
            </p>
          </div>
        </div>
        <span className="line"></span>
      </div>
    </main>
  );
};

export default Iot;
