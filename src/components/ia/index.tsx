import React from "react";


const Ia = (): JSX.Element => {
  return(
    <div className="container-menu">

     <div className="grid-menu">
         <div className="col-md-12 pd-l">
            <div className="container-contact">
              <p>• En esta pestaña haga una breve descripción de que se entiende por Inteligencia Artificial.</p>
              <p>• Sección IA en la creación de imágenes: Colocar imágenes creadas por IA de un tema específico.</p>
              <p>• Sección IA en la creación de Bots: Colocar el codigo embebido del Asistente de Watson Assistant.</p>
              <p>Nota: Este asistente debe tener al menos las siguientes intensiones: Saludos, Despedidas, IoT, IA y Cloud.</p>
              <p>• Sección IA en la creación de música: Colocar un Video que muestre como se usa Beethoven AI.</p>
              <p>• Sección de IA en la creación de textos. Colocar un video que muestre como se usa ChatGPT</p>
            </div>
         </div>
     </div>
    </div>
  );
}

export default Ia;
