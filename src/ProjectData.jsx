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

import intro_clinic from "./assets/projects/Intro/clinic.webp";
import intro_mobhie from "./assets/projects/Intro/mobhie.webp";
import intro_nft from "./assets/projects/Intro/nft.webp";
import intro_pennywise from "./assets/projects/Intro/pennywise.webp";
import intro_shopeeling from "./assets/projects/Intro/shopeeling.webp";

import banner_clinic from "./assets/projects/Info/online-appointment-and-consultation-clinic/banner.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faLaravel, faPython } from "@fortawesome/free-brands-svg-icons";

let project_url = "/project/";
let github_url = "https://github.com/wilhelmusolejr/";

function updateProjectLink(projects) {
  projects.forEach((project) => {
    project.link.github = `${github_url}${project.link.name}`;
    project.link.project = `${project_url}${project.link.name}`;
  });

  return projects;
}

function getAllProjects() {
  return [
    // 1 Philippine Currency Identifier
    {
      id: 1,
      name: "Philippine Currency Identifier",
      information: {
        short_description: "Currency Recognition.",
        description: [
          "Philippine Currency Identifier is a thesis-developed app that helps visually impaired people in the Philippines identify currency denominations using a convolutional neural network. It offers vocal denomination recognition and a user-friendly interface for easy accessibility, enabling independent financial transactions through a quick smartphone scan. This app represents a significant advancement in assistive technology and inclusivity",
        ],
        features: [
          "Denomination Recognition: Instantly identifies and vocalizes the denomination of Philippine currency, aiding users in recognizing various banknotes and coins",
          "Accessibility Optimized: Specifically designed to enhance usability for visually impaired individuals, ensuring that navigation and interaction are intuitive and straightforward",
          "Real-Time Identification: Employs advanced convolutional neural network technology to deliver swift and precise currency identification, facilitating immediate feedback",
          "Money Counter Tool: Includes an integrated money counter feature that assists users in calculating the total value of a batch of currency, simplifying financial transactions and money management",
        ],
        type: ["design", "develop"],
        tags: {
          technology: [
            "TensorFLOW",
            "Kotlin",
            "Python",
            "Goole Colab",
            "Adobe XD",
            "Adobe PS",
            "Text-To-Speech API",
            "Label Img",
            "Video to Image",
          ],
          project: [
            "Voice-Assistance",
            "Currency-Identification",
            "Machine-learning",
            "Visually-Impaired-Assistance",
            "Mobile-Application",
            "Object-Detection",
            "Image-Classification",
          ],
        },
      },
      project_showcase: {
        is_intro: {
          order: 1,
          image: philippinecurrency,
        },
        is_pinned: {
          order: 1,
          image: philippinecurrency,
        },
        is_other: null,
        project: {
          banner_image: banner_clinic,
        },
      },
      link: {
        name: "philippine-currency-identifier",
        github: undefined,
        project: undefined,
        external: null,
      },
      design: {
        font: ["poppins"],
        color: ["#327b36", "#fbca01", "#f36969"],
      },
    },
    // 4 Foodify

    // 3 Online Consultationn Clinic
    {
      id: 3,
      name: "Consultation Clinic",
      information: {
        short_description: "Online Consultation Clinic.",
        description: [
          "Online Appointment and Consultation Clinic is an innovative service provided by the Department of Nutrition and Dietetics at Western Mindanao State University. This platform is designed to offer convenient and accessible health nutrition consultations to individuals, particularly students of the university. It leverages advanced technology to deliver expert advice from experienced professors, ensuring high-quality and professional guidance.",
          "The clinic features a user-friendly online interface, a live chatting system for real-time communication, and an optional food monitoring system for comprehensive dietary management. This initiative aims to enhance the accessibility of nutritional support and promote healthy living among the university community and beyond.",
        ],
        features: [
          "Online Convenience: Provides a hassle-free platform for individuals seeking health nutrition consultations, enabling easy access from anywhere.",
          "Free Access for Students: Available at no cost for students of Western Mindanao State University, offering valuable support without financial burden.",
          "Expert Consultation: Consultations are conducted by professors from Western Mindanao State University, ensuring high-quality and knowledgeable guidance.",
          "Live Chatting System: Includes a real-time chat feature for instant communication between users and consultants, enhancing the consultation experience.",
          "Food Monitoring System: Optional food monitoring feature, if mandated by the RND, to assist in tracking and managing dietary habits.",
        ],
        type: ["design", "develop"],
        tags: {
          technology: [
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
            "MySQL",
            "Adobe XD",
            "Adobe PS",
          ],
          project: [
            "Online-Consultation",
            "Health-Tech",
            "Nutrition-Management",
            "Live-Chat",
            "Web-Application",
            "Student-Support",
            "Dietary-Monitoring",
          ],
        },
      },
      project_showcase: {
        is_intro: {
          order: 2,
          image: intro_clinic,
        },
        is_pinned: {
          order: 3,
          image: clinic,
        },
        is_other: null,
        project: {
          banner_image: banner_clinic,
        },
      },
      link: {
        name: "online-appointment-and-consultation-clinic",
        github: undefined,
        project: undefined,
        external: null,
      },
      design: {
        font: ["poppins"],
        color: ["#2E6a45", "#3ee57f", "#222222", "#f5f5f5"],
      },
    },

    // 2 Depression Predictor
    {
      id: 2,
      name: "Depression Level Predictor (DASS)",
      information: {
        short_description: "Predicts person's depression level.",
        description: [
          "Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest. It is also called as major depressive disorder or clinical depression, it affects how you feel, think and behave, and can lead to a variety of emotional and physical problems.",
          "Depression Anxiety Stress Scales Responses is a dataset that was collected online from the various countries during the year of 2017 to 2019 by Openpsychometrics.org on Psychology Foundation of Australia | DASS in effort to educate the public about psychology. This dataset contains some background information of the respondents such as their race, education, religion, gender, etc. Furthermore, this dataset includes their responses from the 42 related negative emotional questions which is answerable from the scale of 1 to 4, and the 10-item personality test which is answerable from the scale of 1 to 7. Lastly, this dataset also contains the technical information of the respondent such as, what device they used while taking the test, where they found the test, etc.",
          "https://www.kaggle.com/datasets/lucasgreenwell/depression-anxiety-stress-scales-responses",
          "This machine learning project will create a predictive model using an algorithm that has the highest possible decent accuracy from the various machine learning algorithms. The said model will predict the level of depression of a respondent based on their responses from the 14 depressive emotional questions, 10-item personality test, and their basic information. Lastly, this project will also extract insights and interpret it from the given dataset.",
        ],
        features: [
          "Predicts the level of depression based on responses to the questionnaire and basic information.",
          "Provides insights and interpretation from the dataset.",
          "Aids in tracking and understanding personal depression levels.",
        ],
        type: ["develop"],
        tags: {
          technology: [
            "Python",
            "Machine Learning",
            "Project Jupyter",
            "Kaggle",
          ],
          project: [
            "Depression-Prediction",
            "Mental-Health",
            "Data-Analysis",
            "Predictive-Modeling",
            "Healthcare-Technology",
          ],
        },
      },
      project_showcase: {
        is_intro: null,
        is_pinned: {
          order: 4,
          image: depression,
        },
        is_other: null,
        project: {
          banner_image: banner_clinic,
        },
      },
      link: {
        name: "dass-depression-level-predictor",
        github: undefined,
        project: undefined,
        external: null,
      },
      design: {
        font: ["poppins"],
        color: ["#000000", "#ffffff"],
      },
    },

    // -- /////////////////

    // 6 mobhie = other = 2
    {
      id: 6,
      name: "Mobhie",
      information: {
        short_description: "Online movie platform",
        description: ["test", "test"],
        features: ["test"],
        type: ["Design", "Develop"],
        tags: {
          technology: ["test"],
          project: ["test"],
        },
      },
      project_showcase: {
        is_intro: {
          order: 1,
          image: intro_mobhie,
        },
        is_pinned: null,
        is_other: {
          orderr: 2,
          image: mobhie,
        },
      },
      link: {
        name: "mobhie",
        github: undefined,
        project: undefined,
        external: null,
      },
      design: {
        font: ["poppins"],
        color: ["#000000", "#ffffff"],
      },
    },

    // 5 PennyWise = other = 1
    {
      id: 5,
      name: "PennyWISE PH",
      information: {
        short_description: "Online money tracker application",
        description: ["test", "test"],
        features: ["test"],
        type: ["Design", "Develop"],
        tags: {
          technology: ["test"],
          project: ["test"],
        },
      },
      project_showcase: {
        is_intro: {
          order: 4,
          image: intro_pennywise,
        },
        is_pinned: null,
        is_other: {
          orderr: 1,
          image: pennywise,
        },
      },
      link: {
        name: "pennywise",
        github: undefined,
        project: undefined,
        external: null,
      },
      design: {
        font: ["poppins"],
        color: ["#000000", "#ffffff"],
        structure: [
          {
            name: "html",
            percent: "80",
          },
          {
            name: "css",
            percent: "20",
          },
        ],
      },
    },

    // 7 JollyMax = other = 3
    {
      id: 7,
      name: "J077YM4X PH",
      information: {
        short_description: "Bot for auto buy digital items.",
        description: ["test", "test"],
        features: ["test"],
        type: ["automate"],
        tags: {
          technology: ["test"],
          project: ["test"],
        },
      },
      project_showcase: {
        is_intro: null,
        is_pinned: null,
        is_other: {
          orderr: 3,
          image: jollymax_bot,
        },
      },
      link: {
        name: "jollymax",
        github: undefined,
        project: undefined,
        external: null,
      },
      design: null,
    },

    // 12 Tech Vuitton = other = 7
    {
      id: 12,
      name: "Tech Vuitton",
      information: {
        short_description: "Minimalist high tech E-Commerce",
        description: ["test", "test"],
        features: ["test"],
        type: ["design"],
        tags: {
          technology: ["test"],
          project: ["test"],
        },
      },
      project_showcase: {
        is_intro: null,
        is_pinned: null,
        is_other: {
          order: 7,
          image: techvouitton,
        },
      },
      link: {
        name: "tech-vuitton",
        github: undefined,
        project: undefined,
        external: null,
      },
      design: {
        font: ["poppins"],
        color: ["#000000", "#ffffff"],
        structure: [
          {
            name: "html",
            percent: "80",
          },
          {
            name: "css",
            percent: "20",
          },
        ],
      },
    },

    // 8 Shopeeling = other = 4
    {
      id: 8,
      name: "Shopeeling",
      information: {
        short_description: "E-commerce platform",
        description: ["test", "test"],
        features: ["test"],
        type: ["automate"],
        tags: {
          technology: ["test"],
          project: ["test"],
        },
      },
      project_showcase: {
        is_intro: {
          order: 3,
          image: intro_shopeeling,
        },
        is_pinned: null,
        is_other: {
          order: 4,
          image: shopeeling,
        },
      },
      link: {
        name: "shopeeling",
        github: undefined,
        project: undefined,
        external: null,
      },
      design: {
        font: ["poppins"],
        color: ["#000000", "#ffffff"],
        structure: [
          {
            name: "html",
            percent: "80",
          },
          {
            name: "css",
            percent: "20",
          },
        ],
      },
    },

    // Video to image converter

    // 13 MoneyTracker v1 = other = 8
    {
      id: 13,
      name: "Money Tracker v1",
      information: {
        short_description: "Money Tracker Version 1",
        description: ["test", "test"],
        features: ["test"],
        type: ["design", "develop"],
        tags: {
          technology: ["test"],
          project: ["test"],
        },
      },
      project_showcase: {
        is_intro: null,
        is_pinned: null,
        is_other: {
          order: 8,
          image: money_tracker_v1,
        },
      },
      link: {
        name: "money-tracker-v1",
        github: undefined,
        project: undefined,
        external: null,
      },
      design: {
        font: ["poppins"],
        color: ["#000000", "#ffffff"],
        structure: [
          {
            name: "html",
            percent: "80",
          },
          {
            name: "css",
            percent: "20",
          },
        ],
      },
    },

    // 14 Gcash PH = other = 9
    {
      id: 14,
      name: "GC4SH PH",
      information: {
        short_description: "Bot for account auto create",
        description: ["test", "test"],
        features: ["test"],
        type: ["automate"],
        tags: {
          technology: ["test"],
          project: ["test"],
        },
      },
      project_showcase: {
        is_intro: null,
        is_pinned: null,
        is_other: {
          orderr: 9,
          image: gcash_bot,
        },
      },
      link: {
        name: "gc4sh",
        github: undefined,
        project: undefined,
        external: null,
      },
      design: null,
    },

    // 11 NFT Marketplace = other = 6
    {
      id: 11,
      name: "NFT marketplace",
      information: {
        short_description: "NFT marketplace platform",
        description: [],
        features: [],
        type: ["design"],
        tags: {
          technology: [],
          project: [],
        },
      },
      project_showcase: {
        is_intro: {
          order: 5,
          image: intro_nft,
        },
        is_pinned: null,
        is_other: {
          order: 6,
          image: nft,
        },
      },
      link: {
        name: "nft-marketplace",
        github: undefined,
        project: undefined,
        external: null,
      },
      design: {
        font: ["poppins"],
        color: ["#000000", "#ffffff"],
        structure: [
          {
            name: "html",
            percent: "80",
          },
          {
            name: "css",
            percent: "20",
          },
        ],
      },
    },

    // 10 Microsoft Reward Bot = 5
    {
      id: 10,
      name: "M1cros0ft R3w4rd BOT",
      information: {
        short_description: "Bot for auto grind points",
        description: ["test", "test"],
        features: ["test"],
        type: ["automate"],
        tags: {
          technology: ["test"],
          project: ["test"],
        },
      },
      project_showcase: {
        is_intro: null,
        is_pinned: null,
        is_other: {
          orderr: 5,
          image: microsoft_bot,
        },
      },
      link: {
        name: "microsoft-reward",
        github: undefined,
        project: undefined,
        external: null,
      },
      design: null,
    },

    // 9 Netflakes = other = 10
    {
      id: 9,
      name: "Netflakes",
      information: {
        short_description: "Online movie platform",
        description: ["test", "test"],
        features: ["test"],
        type: ["Design", "Develop"],
        tags: {
          technology: ["test"],
          project: ["test"],
        },
      },
      project_showcase: {
        is_intro: null,
        is_pinned: null,
        is_other: {
          order: 10,
          image: netflakes,
        },
      },
      link: {
        name: "netflakes",
        github: undefined,
        project: undefined,
        external: null,
      },
      design: {
        font: ["poppins"],
        color: ["#000000", "#ffffff"],
        structure: [
          {
            name: "html",
            percent: "80",
          },
          {
            name: "css",
            percent: "20",
          },
        ],
      },
    },

    // 15 E-Commerce = other 11
    {
      id: 15,
      name: "E-commerce",
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
        is_intro: null,
        is_pinned: null,
        is_other: {
          order: 11,
          image: ecommerce,
        },
      },
      link: {
        name: "",
        github: undefined,
        project: undefined,
        external: null,
      },
      design: {
        font: ["poppins"],
        color: ["#000000", "#ffffff"],
        structure: [
          {
            name: "html",
            percent: "80",
          },
          {
            name: "css",
            percent: "20",
          },
        ],
      },
    },
  ];
}

export function intro_projects() {
  const intro_projects = [
    // 3 Online Consultationn Clinic
    {
      id: 3,
      name: "Consultation Clinic",
      information: {
        short_description: "Online Consultation Clinic",
        description: [],
        features: [],
        type: [],
        tags: {
          technology: [],
          project: [],
        },
      },
      project_showcase: {
        is_intro: {
          order: 2,
          image: intro_clinic,
        },
        is_pinned: {
          order: 3,
          image: clinic,
        },
        is_other: null,
      },
      link: {
        name: "online-appointment-and-consultation-clinic",
        github: undefined,
        project: undefined,
        external: null,
      },
      design: {
        font: ["poppins"],
        color: ["#000000", "#ffffff"],
        structure: [
          {
            name: "html",
            percent: "80",
          },
          {
            name: "css",
            percent: "20",
          },
        ],
      },
    },

    // 6 mobhie = other = 2
    {
      id: 6,
      name: "Mobhie",
      information: {
        short_description: "Online movie platform",
        description: ["test", "test"],
        features: ["test"],
        type: ["Design", "Develop"],
        tags: {
          technology: ["test"],
          project: ["test"],
        },
      },
      project_showcase: {
        is_intro: {
          order: 1,
          image: intro_mobhie,
        },
        is_pinned: null,
        is_other: {
          orderr: 2,
          image: mobhie,
        },
      },
      link: {
        name: "mobhie",
        github: undefined,
        project: undefined,
        external: null,
      },
      design: {
        font: ["poppins"],
        color: ["#000000", "#ffffff"],
        structure: [
          {
            name: "html",
            percent: "80",
          },
          {
            name: "css",
            percent: "20",
          },
        ],
      },
    },

    // 5 PennyWise = other = 1
    {
      id: 5,
      name: "PennyWISE PH",
      information: {
        short_description: "Online money tracker application",
        description: ["test", "test"],
        features: ["test"],
        type: ["Design", "Develop"],
        tags: {
          technology: ["test"],
          project: ["test"],
        },
      },
      project_showcase: {
        is_intro: {
          order: 4,
          image: intro_pennywise,
        },
        is_pinned: null,
        is_other: {
          orderr: 1,
          image: pennywise,
        },
      },
      link: {
        name: "pennywise",
        github: undefined,
        project: undefined,
        external: null,
      },
      design: {
        font: ["poppins"],
        color: ["#000000", "#ffffff"],
        structure: [
          {
            name: "html",
            percent: "80",
          },
          {
            name: "css",
            percent: "20",
          },
        ],
      },
    },

    // 8 Shopeeling = other = 4
    {
      id: 8,
      name: "Shopeeling",
      information: {
        short_description: "E-commerce platform",
        description: ["test", "test"],
        features: ["test"],
        type: ["automate"],
        tags: {
          technology: ["test"],
          project: ["test"],
        },
      },
      project_showcase: {
        is_intro: {
          order: 3,
          image: intro_shopeeling,
        },
        is_pinned: null,
        is_other: {
          order: 4,
          image: shopeeling,
        },
      },
      link: {
        name: "shopeeling",
        github: undefined,
        project: undefined,
        external: null,
      },
      design: {
        font: ["poppins"],
        color: ["#000000", "#ffffff"],
        structure: [
          {
            name: "html",
            percent: "80",
          },
          {
            name: "css",
            percent: "20",
          },
        ],
      },
    },

    // 11 NFT Marketplace = other = 6
    {
      id: 11,
      name: "NFT marketplace",
      information: {
        short_description: "NFT marketplace platform",
        description: [],
        features: [],
        type: ["design"],
        tags: {
          technology: [],
          project: [],
        },
      },
      project_showcase: {
        is_intro: {
          order: 5,
          image: intro_nft,
        },
        is_pinned: null,
        is_other: {
          order: 6,
          image: nft,
        },
      },
      link: {
        name: "nft-marketplace",
        github: undefined,
        project: undefined,
        external: null,
      },
      design: {
        font: ["poppins"],
        color: ["#000000", "#ffffff"],
        structure: [
          {
            name: "html",
            percent: "80",
          },
          {
            name: "css",
            percent: "20",
          },
        ],
      },
    },
  ];

  const projects = updateProjectLink(intro_projects);

  return projects;
}

export function pin_projects() {
  let projects = all_projects();
  let temp_projects = [];

  projects.forEach((project) => {
    if (project.project_showcase.is_pinned != null) {
      temp_projects.push(project);
    }
  });

  return temp_projects;
}

export function other_projects() {
  let projects = all_projects();
  let temp_projects = [];

  projects.forEach((project) => {
    if (project.project_showcase.is_other != null) {
      temp_projects.push(project);
    }
  });

  return temp_projects;
}

export function all_projects() {
  return updateProjectLink(getAllProjects());
}

export function getProject(target) {
  let projects = all_projects();

  for (let project of projects) {
    if (project.link.name.includes(target)) {
      return project;
    }
  }

  return null; // Return null if no project is found
}
