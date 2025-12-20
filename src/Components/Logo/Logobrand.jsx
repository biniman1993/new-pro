import React from 'react';
import './Logobrand.css';

// Import images explicitly
import addis from '../../assets/brandslogo/HP_Logo.png';
import cbe1 from '../../assets/brandslogo/Lenovo.png';
import def from '../../assets/brandslogo/Dell.png';
import ethoair from '../../assets/brandslogo/ThinkPad.png';
import helth from '../../assets/brandslogo/ZTE.png';
import image from '../../assets/brandslogo/canon.jpg';
import insa from '../../assets/brandslogo/asus.png';
import prim from '../../assets/brandslogo/apple.png';
import trad from '../../assets/brandslogo/acer.png';
import atrad from '../../assets/brandslogo/SanDisk.png';
import btrad from '../../assets/brandslogo/HP_Logo.png';
import ctrad from '../../assets/brandslogo/epson.png';
import dtrad from '../../assets/brandslogo/Huawei.png';
import etrad from '../../assets/brandslogo/benq.png';

const Logo = () => {
  const logos = [
    { id: 1, src: addis },
    { id: 2, src: cbe1 },
    { id: 3, src: def },
    { id: 4, src: ethoair },
    { id: 5, src: helth },
    { id: 6, src: image },
    { id: 7, src: insa },
    { id: 8, src: prim },
    { id: 9, src: trad },
    { id: 11, src: atrad },
    { id: 12, src: btrad },
    { id: 13, src: ctrad },
    { id: 14, src: dtrad },
    { id: 15, src: etrad }
  ];

  const duplicated = [...logos, ...logos];

  return (
    <div className="logo-container">
  
      <div className="logo-scroll">
        {duplicated.map((logo, index) => (
          <div key={`${logo.id}-${index}`} className="logo-item">
            <img 
              src={logo.src}
              alt="partner-logo"
              className="logo-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logo;
