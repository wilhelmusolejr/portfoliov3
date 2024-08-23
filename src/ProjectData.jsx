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

import banner_jollymax from "./assets/projects/Info/j0llym4x-ph/banner.png";
import banner_microsoft from "./assets/projects/Info/microsoft-reward-bot/banner.jpg";

// nft
import nft_banner from "./assets/projects/Info/nft-marketplace/banner.webp";
import nft_screenshot_1 from "./assets/projects/Info/nft-marketplace/screenshot1.png";
import nft_screenshot_2 from "./assets/projects/Info/nft-marketplace/screenshot2.png";

// ecommerce
import ecommerce_banner from "./assets/projects/Info/e-commerce/banner.webp";
import ecommerce_screenshot_1 from "./assets/projects/Info/e-commerce/screenshot1.png";
import ecommerce_screenshot_2 from "./assets/projects/Info/e-commerce/screenshot2.png";
import ecommerce_screenshot_3 from "./assets/projects/Info/e-commerce/screenshot3.png";

// Shopeeling
import shopeeling_banner from "./assets/projects/Info/shopeeling/banner.webp";
import shopeeling_screenshot_1 from "./assets/projects/Info/shopeeling/screenshot1.png";
import shopeeling_screenshot_2 from "./assets/projects/Info/shopeeling/screenshot2.png";
import shopeeling_screenshot_3 from "./assets/projects/Info/shopeeling/screenshot3.png";
import shopeeling_screenshot_4 from "./assets/projects/Info/shopeeling/screenshot4.png";

// money-tracker-v1
import money_tracker_banner from "./assets/projects/Info/money-tracker-v1/banner.webp";
import money_tracker_screenshot1 from "./assets/projects/Info/money-tracker-v1/screenshot1.png";

// netflakes
import netflakes_banner from "./assets/projects/Info/netflakes/banner.webp";
import netflakes_screenshot_1 from "./assets/projects/Info/netflakes/screenshot1.png";
import netflakes_screenshot_2 from "./assets/projects/Info/netflakes/screenshot2.png";

// microsoft
import microsoft_banner from "./assets/projects/Info/microsoft-reward-bot/banner.webp";

// gcash
import gcash_banner from "./assets/projects/Info/gc4sh-ph/banner.webp";

// jollymax
import jollymax_banner from "./assets/projects/Info/j0llym4x-ph/banner.webp";

// PennyWise
import pennywise_banner from "./assets/projects/Info/pennywise/banner.webp";
import pennywise_screenshot_1 from "./assets/projects/Info/pennywise/screenshot1.png";
import pennywise_screenshot_2 from "./assets/projects/Info/pennywise/screenshot2.png";
import pennywise_screenshot_3 from "./assets/projects/Info/pennywise/screenshot3.png";
import pennywise_screenshot_4 from "./assets/projects/Info/pennywise/screenshot4.png";
import pennywise_screenshot_5 from "./assets/projects/Info/pennywise/screenshot5.png";

// Depression
import dass_showcase from "./assets/projects/Info/dass-depression-level-predictor/banner.webp";

// Philippine Currency
import philippinecurrency_showcase from "./assets/projects/Info/philippine-currency-identifier/showcase.webp";
import philippinecurrency_screenshot_1 from "./assets/projects/Info/philippine-currency-identifier/screenshot1.png";
import philippinecurrency_screenshot_2 from "./assets/projects/Info/philippine-currency-identifier/screenshot2.png";
import philippinecurrency_screenshot_3 from "./assets/projects/Info/philippine-currency-identifier/screenshot3.png";

// Clinic
import banner_clinic from "./assets/projects/Info/online-appointment-and-consultation-clinic/banner.png";
import clinic_showcase from "./assets/projects/Info/online-appointment-and-consultation-clinic/showcase.webp";
import clinic_screenshot_1 from "./assets/projects/Info/online-appointment-and-consultation-clinic/screenshot1.png";
import clinic_screenshot_2 from "./assets/projects/Info/online-appointment-and-consultation-clinic/screenshot2.png";
import clinic_screenshot_3 from "./assets/projects/Info/online-appointment-and-consultation-clinic/screenshot3.png";
import clinic_screenshot_4 from "./assets/projects/Info/online-appointment-and-consultation-clinic/screenshot4.png";
import clinic_screenshot_5 from "./assets/projects/Info/online-appointment-and-consultation-clinic/screenshot5.png";
import clinic_screenshot_6 from "./assets/projects/Info/online-appointment-and-consultation-clinic/screenshot6.png";
import clinic_screenshot_7 from "./assets/projects/Info/online-appointment-and-consultation-clinic/screenshot7.png";

// MOBHIE
import banner_mobhie from "./assets/projects/Info/mobhie/banner.webp";
import mobhie_screenshot_1 from "./assets/projects/Info/mobhie/banner.png";
import mobhie_screenshot_2 from "./assets/projects/Info/mobhie/screenshot1.png";
import mobhie_screenshot_3 from "./assets/projects/Info/mobhie/screenshot2.png";
import mobhie_screenshot_4 from "./assets/projects/Info/mobhie/screenshot3.png";

let project_url = "/project/";
let github_url = "https://github.com/wilhelmusolejr/";

function updateProjectLink(projects) {
  projects.forEach((project) => {
    if (project.link.github === undefined) {
      project.link.github = `${github_url}${project.link.name}`;
    }
    project.link.project = `${project_url}${project.link.name}`;
  });

  return projects;
}

// HTML, CSS, JavaScript
// "TensorFLOW",
// "Kotlin",
// "Python",
// "Goole Colab",
// "Adobe XD",
// "Adobe PS",
// "Text-To-Speech API",
// "Label Img",
// "Video to Image",

function getAllProjects() {
  return [
    // 1 Philippine Currency Identifier
    {
      id: 1,
      name: "Philippine Currency Identifier",
      information: {
        short_description: "Currency Recognition",
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
          image: philippinecurrency_showcase,
        },
        is_other: null,
        project: {
          banner_image: philippinecurrency_showcase,
          screenshot: [
            philippinecurrency_screenshot_1,
            philippinecurrency_screenshot_2,
            philippinecurrency_screenshot_3,
          ],
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
      name: "WMSU Consultation Clinic",
      information: {
        short_description: "Online Consultation Clinic",
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
          image: clinic_showcase,
        },
        is_other: null,
        project: {
          banner_image: clinic_showcase,
          screenshot: [
            clinic_screenshot_1,
            clinic_screenshot_2,
            clinic_screenshot_3,
            clinic_screenshot_4,
            clinic_screenshot_5,
            clinic_screenshot_6,
            clinic_screenshot_7,
          ],
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
        color: ["#2E6a45", "#3ee57f", "#e53e5b", "#222222", "#f5f5f5"],
      },
    },

    // 2 Depression Predictor
    {
      id: 2,
      name: "Depression Level Predictor (DASS)",
      information: {
        short_description: "Predicts person's depression level",
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
            "HTML",
            "CSS",
            "Python",
            "Machine Learning",
            "Project Jupyter",
            "Kaggle",
            "Flask",
            "Scikit-Learn",
            "Pandas",
            "NumPy",
            "Seaborn",
            "Matplotlib",
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
          image: dass_showcase,
        },
        is_other: null,
        project: {
          banner_image: dass_showcase,
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
        color: ["#39546d", "#13273e"],
      },
    },

    // -- /////////////////

    // 6 mobhie = other = 2
    {
      id: 6,
      name: "Mobhie",
      information: {
        short_description: "Online movie platform",
        description: [
          "Mobhie is a comprehensive movie box application that allows users to explore hundreds of movies across various categories, including Popular movies, trending movies, and more.",
          "This application provides a rich and engaging platform for movie enthusiasts to discover, search, and enjoy a wide array of films. Users can access detailed information about each movie, including ratings, descriptions, budgets, and more. With features such as search functionality and a randomizer for movie recommendations, MOBHIE ensures an enjoyable and seamless movie-browsing experience. The application is designed to be user-friendly and responsive across all devices, providing a consistent and smooth experience whether on a desktop, tablet, or mobile device.",
          "Powered by the 'The Movie Database' or TMDB API, MOBHIE delivers accurate and up-to-date movie data, offering users an extensive database of films to explore. The integration of this API ensures that users have access to a vast collection of movies with comprehensive details and the latest information.",
          "https://www.themoviedb.org/",
        ],
        features: [
          "Movie Browsing: Explore hundreds of movies across various categories, including Popular and trending movies, ensuring there's always something interesting to watch.",
          "Detailed Movie Information: Access in-depth details about each movie, including ratings, descriptions, budgets, and more, to make informed viewing choices.",
          "Search Functionality: Quickly find specific movies using the search feature, making it easy to locate your favorite films or discover new ones.",
          "Randomizer Feature: Get personalized movie recommendations with the randomizer feature, perfect for when you can't decide what to watch.",
          "User-Friendly Interface: Designed with simplicity in mind, the app ensures an intuitive and straightforward user experience, making movie discovery enjoyable and accessible.",
          "Responsive Design: Enjoy a seamless and consistent experience across all devices, from desktops to tablets and mobile phones.",
        ],
        type: ["Design", "Develop"],
        tags: {
          technology: [
            "HTML",
            "CSS",
            "JavasScript",
            "Font Awesome",
            "Laravel",
            "Bootstrap",
            "Adobe XD",
            "Adobe PS",
          ],
          project: [
            "Movie-Database",
            "Entertainment",
            "Responsive-Design",
            "API-Integration",
            "User-Interface",
            "Web-Application",
          ],
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
          image: banner_mobhie,
        },
        project: {
          banner_image: banner_mobhie,
          screenshot: [
            mobhie_screenshot_1,
            mobhie_screenshot_2,
            mobhie_screenshot_3,
            mobhie_screenshot_4,
          ],
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
        color: ["#ff0000", "#f5f5f5", "#222222"],
      },
    },

    // 5 PennyWise = other = 1
    {
      id: 5,
      name: "PennyWISE PH",
      information: {
        short_description: "Online money tracker application",
        description: [
          "PennyWISE is a user-friendly mobile money tracker designed to help individuals manage their finances effectively.",
          "PennyWISE app is a comprehensive money tracker designed to help users manage their financial transactions effectively. It enables users to monitor their money inflow and outflow seamlessly, providing a clear computation of their financial activities. With PennyWISE, users can input detailed information for each transaction, including the transaction name, description, amount, and date. This application simplifies personal finance management by offering an intuitive interface for tracking and analyzing money transactions, empowering users to make informed financial decisions and maintain control over their finances.",
          "PennyWISE features an integrated account system, allowing users to access their financial data securely over the internet from anywhere and at any time. This ensures that users can manage their finances conveniently, whether they are at home, at work, or on the go. With real-time updates and synchronization across devices, PennyWISE provides a reliable platform for users to stay organized and informed about their financial health.",
        ],
        features: [
          "Transaction Tracking: Easily track and manage your money transactions, recording both income and expenses for a complete financial overview.",
          "Detailed Entry Fields: Input detailed information for each transaction, such as the transaction name, description, amount, and date, ensuring accurate and organized records.",
          "Inflow and Outflow Management: Monitor your financial inflows and outflows with ease, helping you understand and manage your cash flow effectively.",
          "Real-Time Computation: Instantly calculate the total balance based on recorded transactions, providing a clear picture of your financial status at any given time.",
          "Cross-Device Access: Access your financial data securely over the internet from anywhere and at any time, ensuring seamless management of your finances across devices.",
          "User-Friendly Interface: Designed with simplicity in mind, the app ensures an intuitive and straightforward user experience, making financial management accessible to everyone.",
        ],
        type: ["Design", "Develop"],
        tags: {
          technology: [
            "HTML",
            "CSS",
            "JavasScript",
            "PHP",
            "Font Awesome",
            "Laravel",
            "Bootstrap",
            "Adobe XD",
            "Adobe PS",
          ],
          project: [
            "Finance-Management",
            "Mobile-Application",
            "Responsive-Design",
            "Cross-Device-Access",
            "User-Interface",
            "Web-Application",
          ],
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
          image: pennywise_banner,
        },
        project: {
          banner_image: pennywise_banner,
          screenshot: [
            pennywise_screenshot_1,
            pennywise_screenshot_2,
            pennywise_screenshot_3,
            pennywise_screenshot_4,
            pennywise_screenshot_5,
          ],
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
        color: ["#60c16d", "#151515", "#ff4a4a"],
      },
    },

    // 7 JollyMax = other = 3
    {
      id: 7,
      name: "J077YM4X PH",
      information: {
        short_description: "Bot for auto buy digital items",
        description: [
          "J0LLYM4X is a bot that automates the process of purchasing Razer Gold Pins. It efficiently handles login, buying, and connecting payment methods to the website. The bot is designed to bypass detection mechanisms, ensuring a smooth and successful purchase process.",
        ],
        features: [
          "Automatically logs in and performs the buying process for Razer Gold Pins.",
          "Connects payment methods to the website.",
          "Dynamically saves all purchased pins to a notepad based on the phone number used.",
          "Creates separate folders for organizing pins.",
          "Bypasses detection mechanisms to ensure uninterrupted operation.",
        ],
        type: ["automate"],
        tags: {
          technology: ["Python", "Selenium"],
          project: [
            "Automation",
            "Bot-Development",
            "E-commerce",
            "Digital-Goods",
            "Payment-Integration",
          ],
        },
      },
      project_showcase: {
        is_intro: null,
        is_pinned: null,
        is_other: {
          orderr: 3,
          image: jollymax_banner,
        },
        project: {
          banner_image: jollymax_banner,
          screenshot: [banner_jollymax],
        },
      },
      link: {
        name: "J0LLYM4X-PH",
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
        description: ["Old project, for practice purposes only."],
        type: ["automate"],
        tags: {
          technology: ["HTML", "CSS"],
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
          image: shopeeling_banner,
        },
        project: {
          banner_image: shopeeling_banner,
          screenshot: [
            shopeeling_screenshot_1,
            shopeeling_screenshot_2,
            shopeeling_screenshot_3,
            shopeeling_screenshot_4,
          ],
        },
      },
      link: {
        name: "shopeeling",
        github: null,
        project: undefined,
        external: null,
      },
      design: {
        font: ["poppins"],
        color: ["#fff0db", "#E6E6FA", "#f5f5f5", "#111"],
      },
    },

    // Video to image converter

    // 13 MoneyTracker v1 = other = 8
    {
      id: 13,
      name: "Money Tracker v1",
      information: {
        short_description: "Money Tracker Version 1",
        description: ["Old project, for practice purposes only."],
        type: ["design", "develop"],
        tags: {
          technology: ["HTML", "CSS"],
          project: ["test"],
        },
      },
      project_showcase: {
        is_intro: null,
        is_pinned: null,
        is_other: {
          order: 8,
          image: money_tracker_banner,
        },
        project: {
          banner_image: money_tracker_banner,
          screenshot: [money_tracker_v1, money_tracker_screenshot1],
        },
      },
      link: {
        name: "money-tracker-v1",
        github: null,
        project: undefined,
        external: null,
      },
      design: {
        font: ["poppins"],
        color: ["#81ee81", "#f84c4c"],
      },
    },

    // 14 Gcash PH = other = 9
    {
      id: 14,
      name: "GC4SH PH",
      information: {
        short_description: "Bot for account auto create",
        description: [
          "GC4SH bot automates the process of creating GC4SH accounts. It streamlines the account creation by automatically filling in personal information and handling OTP verification. The bot is designed to bypass detection mechanisms to ensure smooth operation.",
        ],
        features: [
          "Automatically fills in personal information such as first name, last name, etc.",
          "Automates the OTP verification process.",
          "Bypasses detection mechanisms to ensure successful account creation.",
        ],
        type: ["automate"],
        tags: {
          technology: ["Python", "Selenium"],
          project: [
            "Bot-Development",
            "Account-Creation",
            "Form-Automation",
            "Security-Bypass",
          ],
        },
      },
      project_showcase: {
        is_intro: null,
        is_pinned: null,
        is_other: {
          orderr: 9,
          image: gcash_banner,
        },
        project: {
          banner_image: gcash_banner,
        },
      },
      link: {
        name: "GC4SH-PH",
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
        description: ["Old project, for practice purposes only."],
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
          order: 4,
          image: nft_banner,
        },
        project: {
          banner_image: nft_banner,
          screenshot: [nft_screenshot_1, nft_screenshot_2],
        },
      },
      link: {
        name: "nft-marketplace",
        github: null,
        project: undefined,
        external: null,
      },
      design: {
        font: ["poppins"],
        color: ["#FCA470", "#111", "#f5f5f5"],
      },
    },

    // 10 Microsoft Reward Bot = 5
    {
      id: 10,
      name: "M1cros0ft R3w4rd BOT",
      information: {
        short_description: "Bot for auto grind points.",
        description: [
          "This is an automated software designed to independently perform tasks and accumulate points within the Microsoft Rewards program.",
        ],
        features: [
          "Automated Task Execution: Automatically performs tasks within the Microsoft Rewards program to earn points.",
          "Points Accumulation: Efficiently grinds and accumulates points, helping users maximize their rewards.",
          "Task Scheduling: Set schedules for when the bot should perform tasks, allowing for consistent point grinding.",
          "Customizable Actions: Configure specific actions for the bot to take based on the user's preferences.",
          "Detection Bypass: Implements methods to avoid detection and maintain consistent operation.",
        ],
        type: ["Automate"],
        tags: {
          technology: ["Python", "JavaScript", "Playwright", "Automation"],
          project: [
            "Bot Development",
            "Task Automation",
            "Point Accumulation",
            "Microsoft Rewards",
          ],
        },
      },
      project_showcase: {
        is_intro: null,
        is_pinned: null,
        is_other: {
          orderr: 5,
          image: microsoft_banner,
        },
        project: {
          banner_image: banner_microsoft,
        },
      },
      link: {
        name: "Microsoft-Rewards-Bot",
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
        description: [
          "Old project, for practice purposes only.",
          "https://www.themoviedb.org/",
        ],

        type: ["Design", "Develop"],
        tags: {
          technology: ["HTML", "CSS", "API"],
          project: ["movie", "api"],
        },
      },
      project_showcase: {
        is_intro: null,
        is_pinned: null,
        is_other: {
          order: 10,
          image: netflakes_banner,
        },
        project: {
          banner_image: netflakes_banner,
          screenshot: [netflakes_screenshot_1, netflakes_screenshot_2],
        },
      },
      link: {
        name: "netflakes",
        github: null,
        project: undefined,
        external: null,
      },
      design: {
        font: ["poppins"],
        color: ["#e2d40a", "#111"],
      },
    },

    // 15 E-Commerce = other 11
    {
      id: 15,
      name: "E-commerce",
      information: {
        short_description: "",
        description: ["Old project, for practice purposes only."],
        type: ["design", "develop"],
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
          image: ecommerce_banner,
        },

        project: {
          banner_image: ecommerce_banner,
          screenshot: [
            ecommerce_screenshot_1,
            ecommerce_screenshot_2,
            ecommerce_screenshot_3,
          ],
        },
      },
      link: {
        name: "e-commerce",
        github: null,
        project: undefined,
        external: null,
      },
      design: {
        font: ["poppins"],
        color: ["#ffa31a", "#202020", "#f4f4f4"],
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
