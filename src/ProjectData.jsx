import ecommerce from "./assets/projects/Portfolio/ecommerce.jpg";
import netflakes from "./assets/projects/Portfolio/netflakes.jpg";
import microsoft_bot from "./assets/projects/Portfolio/microsoft_bot.jpg";
import nft from "./assets/projects/Portfolio/nft.jpg";
import gcash_bot from "./assets/projects/Portfolio/gcash_bot.jpg";
import shopeeling from "./assets/projects/Portfolio/shopeeling.jpg";
import depression from "./assets/projects/Portfolio/depression.jpg";
import techvouitton from "./assets/projects/Portfolio/techvouitton.jpg";
import jollymax_bot from "./assets/projects/Portfolio/jollymax_bot.jpg";
import clinic from "./assets/projects/Portfolio/clinic.jpg";
import pennywise from "./assets/projects/Portfolio/pennywise.jpg";
import mobhie from "./assets/projects/Portfolio/mobhie.jpg";
import philippinecurrency from "./assets/projects/Portfolio/philippinecurrency.jpg";
import money_tracker_v1 from "./assets/projects/Portfolio/money_tracker_v1.jpg";

let project_url = "/project/";
let github_url = "https://github.com/wilhelmusolejr/";

export const projects = [
  {
    id: 1,
    title: "",
    description: "",
    type: ["develop", "design"],
    file: {
      intro: null,
      portfolio: philippinecurrency,
    },
    project_showcase: 1,
    link: {
      github:
        "https://github.com/wilhelmusolejr/Philippine-Currency-Identifier",
      project: "philippine-currency-identifier",
    },
    tags: {
      technology: ["React", "CSS", "JavaScript"],
      project: ["currency-identifier", "responsive-design"],
    },
  },

  // Philippine Currency Identifier
  {
    id: 1,
    name: "Philippine Currency Identifier",
    information: {
      short_description: "Currency Recognition",
      description: [],
      features: [],
      type: [],
      tags: {
        technology: [],
        project: [],
      },
    },
    project_showcase: {
      intro: {
        order: 1,
        image: ecommerce,
      },
      project: {
        is_pinned: {
          order: 1,
          image: ecommerce,
        },
        other: {
          order: 1,
          image: ecommerce,
        },
      },
    },
    link: {
      name: "",
      github: "",
      project: "",
    },
    design: {
      font: [],
      color: [],
      structure: {
        html: "80",
      },
    },
  },
  // Foodify
  // Online Consultationn Clinic
  // Depression Predictor

  // mobhie
  // PennyWise
  // JollyMax
  // Tech Vuitton
  // Shopeeling
  // Video to image converter
  // MoneyTracker v1
  // Gcash PH
  // NFT Marketplace
  // Microsoft Reward Bot
  // Netflakes
  // E-Commerce

  {
    id: 1,
    name: "",
    information: {
      short_description: "",
      description: [],
      features: [],
      type: [],
      tags: {
        technology: [],
        project: [],
      },
    },
    project_showcase: {
      intro: {
        order: 1,
        image: ecommerce,
      },
      project: {
        is_pinned: {
          order: 1,
          image: ecommerce,
        },
        other: {
          order: 1,
          image: ecommerce,
        },
      },
    },
    link: {
      name: "",
      github: "",
      project: "",
    },
    design: {
      font: [],
      color: [],
      structure: {
        html: "",
      },
    },
  },

  {
    id: 1,
    name: "E-commerce",
    information: {
      short_description: "E-commerce application",
      description: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nulla blanditiis praesentium unde voluptate accusantium omnis deserunt natus delectus neque?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptas perferendis sit? Id voluptatem repudiandae et hic tenetur, molestiae a aut inventore, corporis consequuntur repellat aliquid recusandae, aspernatur at asperiores.",
      ],
      features: [
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quae!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident inventore, corporis totam maiores ut obcaecati.",
      ],
      type: ["design"],
      tags: {
        technology: ["React", "CSS", "JavaScript"],
        project: ["e-commerce", "responsive-design"],
      },
    },
    project_showcase: {
      intro: {
        order: 1,
        image: ecommerce,
      },
      project: {
        is_pinned: {
          order: 1,
          image: ecommerce,
        },
        other: {
          order: 1,
          image: ecommerce,
        },
      },
    },
    link: {
      name: "e-commerce",
      github: undefined,
      project: undefined,
    },
  },
  //
  //
  //
  //
  //
  //
  //
  {
    id: 2,
    title: "Netflakes",
    description: "Movie website platform",
    type: ["develop", "design"],
    file: {
      intro: null,
      portfolio: netflakes,
    },
    project_showcase: null,
    link: {
      github: "https://github.com/wilhelmusolejr/Netflakes",
      project: "netflakes",
    },
    tags: {
      technology: ["React", "CSS", "JavaScript"],
      project: ["movie-platform", "responsive-design"],
    },
  },
  {
    id: 3,
    title: "Microsoft Reward BOT",
    description: "Bot for auto grind points",
    type: ["automate"],
    file: {
      intro: null,
      portfolio: microsoft_bot,
    },
    project_showcase: null,
    link: {
      github: "https://github.com/wilhelmusolejr/Microsoft-Reward-BOT",
      project: "microsoft-reward",
    },
    tags: {
      technology: ["Python", "Selenium"],
      project: ["bot", "automation"],
    },
  },
  {
    id: 4,
    title: "NFT marketplace",
    description: "NFT marketplace site",
    type: ["design"],
    file: {
      intro: nft,
      portfolio: nft,
    },
    project_showcase: null,
    link: {
      github: "https://github.com/wilhelmusolejr/NFT-Marketplace",
      project: "nft-marketplace",
    },
    tags: {
      technology: ["React", "CSS"],
      project: ["nft", "marketplace"],
    },
  },
  {
    id: 5,
    title: "GC4SH PH",
    description: "Bot for auto create account",
    type: ["automate"],
    file: {
      intro: null,
      portfolio: gcash_bot,
    },
    project_showcase: null,
    link: {
      github: "https://github.com/wilhelmusolejr/GC4SH-PH",
      project: "gc4sh",
    },
    tags: {
      technology: ["Python", "Playwright"],
      project: ["bot", "automation"],
    },
  },
  {
    id: 6,
    title: "Money Tracker v1",
    description: "Money Tracker",
    type: ["develop", "design"],
    file: {
      intro: null,
      portfolio: money_tracker_v1,
    },
    project_showcase: null,
    link: {
      github: "https://github.com/wilhelmusolejr/Money-Tracker-v1",
      project: "money-tracker-v1",
    },
    tags: {
      technology: ["Laravel", "Bootstrap", "MySQL"],
      project: ["money-tracker", "responsive-design"],
    },
  },
  {
    id: 7,
    title: "Shopeeling",
    description: "E-commerce application",
    type: ["develop", "design"],
    file: {
      intro: shopeeling,
      portfolio: shopeeling,
    },
    project_showcase: null,
    link: {
      github: "https://github.com/wilhelmusolejr/Shopeeling",
      project: "shopeeling",
    },
    tags: {
      technology: ["React", "CSS", "JavaScript"],
      project: ["e-commerce", "responsive-design"],
    },
  },
  {
    id: 8,
    title: "DASS Depression Level Predictor",
    description: "Predicts person's depression level",
    type: ["develop"],
    file: {
      intro: null,
      portfolio: depression,
    },
    project_showcase: 3,
    link: {
      github:
        "https://github.com/wilhelmusolejr/DASS-Depression-Level-Predictor",
      project: `${project_url}dass-depression-level-predictor`,
    },
    tags: {
      technology: ["Python", "TensorFlow"],
      project: ["ml", "depression-prediction"],
    },
  },
  {
    id: 9,
    title: "Tech Vuitton",
    description: "Minimalist high tech design",
    type: ["design"],
    file: {
      intro: null,
      portfolio: techvouitton,
    },
    project_showcase: null,
    link: {
      github: "https://github.com/wilhelmusolejr/Tech-Vuitton",
      project: "tech-vuitton",
    },
    tags: {
      technology: ["React", "CSS"],
      project: ["minimalist", "high-tech-design"],
    },
  },
  {
    id: 10,
    title: "J077YM4X PH",
    description: "Bot for auto buy",
    type: ["automate"],
    file: {
      intro: null,
      portfolio: jollymax_bot,
    },
    project_showcase: null,
    link: {
      github: "https://github.com/wilhelmusolejr/Jollymax-BOT",
      project: "jollymax",
    },
    tags: {
      technology: ["Python", "Selenium"],
      project: ["bot", "automation"],
    },
  },
  {
    id: 11,
    title: "Consultation Clinic",
    description: "Online Consultation Clinic",
    type: ["develop", "design"],
    file: {
      intro: clinic,
      portfolio: clinic,
    },
    project_showcase: 2,
    link: {
      github:
        "https://github.com/wilhelmusolejr/Online-appointment-and-consultation-clinic",
      project: "online-appointment-and-consultation-clinic",
    },
    tags: {
      technology: ["Laravel", "Bootstrap", "MySQL"],
      project: ["consultation", "clinic"],
    },
  },
  {
    id: 12,
    title: "PennyWISE PH",
    description: "Money tracker application",
    type: ["develop", "design"],
    file: {
      intro: pennywise,
      portfolio: pennywise,
    },
    project_showcase: 4,
    link: {
      github: "https://github.com/wilhelmusolejr/PennyWISE",
      project: "pennywise",
    },
    tags: {
      technology: ["Bootstrap", "Laravel", "HTML", "CSS", "MySQL"],
      project: [
        "mobile-responsive",
        "dark-theme",
        "static-website",
        "money-tracker",
      ],
    },
  },
  {
    id: 13,
    title: "Mobhie",
    description: "Movie website platform",
    type: ["develop", "design"],
    file: {
      intro: mobhie,
      portfolio: mobhie,
    },
    project_showcase: null,
    link: {
      github: "https://github.com/wilhelmusolejr/Mobhie",
      project: "mobhie",
    },
    tags: {
      technology: ["React", "CSS", "JavaScript"],
      project: ["movie-platform", "responsive-design"],
    },
  },
];
