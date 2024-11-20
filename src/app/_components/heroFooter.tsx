"use client";

import React from "react";
import Image from "next/image";
import htmlIcon from "../_assets/img/html.webp";
import cssIcon from "../_assets/img/css.png";
import jsIcon from "../_assets/img/js.png";
import reactIcon from "../_assets/img/react.png";
import photoshopIcon from "../_assets/img/ps.png";

const HeroFooter = () => {
  return (
    <div className="hero-footer">
      <div className="footer-icon">
        <Image
          src={htmlIcon}
          alt="HTML"
          width={50}
          height={50}
        />
      </div>

      <div className="footer-icon">
        <Image
          src={cssIcon}
          alt="CSS"
          width={55}
          height={50}
        />
      </div>

      <div className="footer-icon">
        <Image
          src={jsIcon}
          alt="JavaScript"
          width={48}
          height={50}
        />
      </div>

      <div className="footer-icon">
        <Image
          src={reactIcon}
          alt="React"
          width={50}
          height={50}
        />
      </div>

      <div className="footer-icon">
        <Image
          src={photoshopIcon}
          alt="Photoshop"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default HeroFooter;
