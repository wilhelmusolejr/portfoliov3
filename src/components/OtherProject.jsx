import shopeeling from "../assets/projects/shopeeling/banner.webp";
import pennywise from "../assets/projects/pennywise/banner.webp";
import netflakes from "../assets/projects/netflakes/banner.webp";
import moneytrackerv1 from "../assets/projects/money-tracker-v1/banner.webp";
import mobhie from "../assets/projects/mobhie/banner.webp";
import microsoftrewardbot from "../assets/projects/microsoft-reward-bot/banner.webp";
import j0llym4xph from "../assets/projects/j0llym4x-ph/banner.webp";
import gc4shph from "../assets/projects/gc4sh-ph/banner.webp";
import ecommerce from "../assets/projects/e-commerce/banner.webp";
import nft from "../assets/projects/nft-marketplace/banner.webp";
import louis from "../assets/projects/louis-tech-vuitton/banner.webp";
import crossfire from "../assets/projects/crossfire-autoclicker/banner.webp";

import Image from "./Image";

function OtherProject(prop) {
  const project = prop.project;

  let image;

  switch (project.link.name.toLowerCase()) {
    case "mobhie":
      image = mobhie;
      break;
    case "pennywise":
      image = pennywise;
      break;
    case "j0llym4x-ph":
      image = j0llym4xph;
      break;
    case "shopeeling":
      image = shopeeling;
      break;
    case "money-tracker-v1":
      image = moneytrackerv1;
      break;
    case "gc4sh-ph":
      image = gc4shph;
      break;
    case "nft-marketplace":
      image = nft;
      break;
    case "microsoft-reward-bot":
      image = microsoftrewardbot;
      break;
    case "netflakes":
      image = netflakes;
      break;
    case "e-commerce":
      image = ecommerce;
      break;
    case "louis-tech-vuitton":
      image = louis;
      break;
    case "crossfire-autoclicker":
      image = crossfire;
  }

  return (
    <>
      <div key={project.id} className="child position-relative">
        <a href={project.link.project} className="image-parent rounded">
          <Image url={image} alt={project.name} />
          <div className="image-design"></div>
        </a>
        <p className="text-center my-3 text-light text-capitalize">
          {project.name}
        </p>
      </div>
    </>
  );
}

export default OtherProject;
