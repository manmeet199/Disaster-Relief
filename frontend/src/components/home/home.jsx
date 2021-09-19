import React from "react";
import Navbar from "../navbar/navbar";
import Image from 'react-image-resizer';
import cur from '../assets/download.jpg';
import cur1 from '../assets/images.jpg';

const Home = () => {
  return (
    <div>
      <Navbar />
     

      <Image
          img src={cur} alt="cur" class="center"
          height={350}
          width={700}
        />
        <Image
          img src={cur1} alt="cur" class="center"
          height={350}
          width={700}
        />
    </div>
  );
};

export default Home;
