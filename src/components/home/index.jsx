import React from "react"
import Mapa from '@assets/mapa.png';

import { Description } from "./Description";
import { init } from "@utils/TypeWriter";
import useMediaQuery from '@hooks/useMediaQuery';

const Home = () => {
  const matches = useMediaQuery('(min-width: 768px)');

  return(
    <main onLoad={init} className="container-menu">
      <div  className="map"><img src={Mapa} alt="Background Image - @chendodev" /></div>

      <div className="grid-menu mb-4 Home">
        <Description />
      </div>
    </main>
  );
}

export default Home;

