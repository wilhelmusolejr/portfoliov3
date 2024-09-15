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
    // 1 Philippine Currency Identifier | 1 pinned | 2 intro
    {
      id: 1,
      name: "Philippine Currency Identifier",
      information: {
        short_description: "Currency Recognition",
        description: [
          "Philippine Currency Identifier is a thesis-developed app that helps visually impaired people in the Philippines identify currency denominations using a convolutional neural network. It offers vocal denomination recognition and a user-friendly interface for easy accessibility, enabling independent financial transactions through a quick smartphone scan. This app represents a significant advancement in assistive technology and inclusivity.",
        ],
        features: [
          "Denomination Recognition: Instantly identifies and vocalizes the denomination of Philippine currency, aiding users in recognizing various banknotes and coins.",
          "Accessibility Optimized: Specifically designed to enhance usability for visually impaired individuals, ensuring that navigation and interaction are intuitive and straightforward.",
          "Real-Time Identification: Employs advanced convolutional neural network technology to deliver swift and precise currency identification, facilitating immediate feedback.",
          "Money Counter Tool: Includes an integrated money counter feature that assists users in calculating the total value of a batch of currency, simplifying financial transactions and money management.",
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
          order: 2,
          image: "mockup.webp",
        },
        is_pinned: {
          order: 1,
          image: "showcase.webp",
        },
        is_other: null,
        project: {
          banner_image: "showcase.webp",
          screenshot: [
            "showcase.webp",
            "banner.jpg",
            "screenshot1.png",
            "screenshot2.png",
            "screenshot3.png",
          ],
        },
      },
      link: {
        name: "philippine-currency-identifier",
        github: undefined,
        project: undefined,
        external: "https://bit.ly/ph-identifier",
      },
      design: {
        font: ["poppins"],
        color: ["#327b36", "#fbca01", "#f36969"],
      },
    },

    // 2 Online Consultationn Clinic | 2 pinned | 1 intro
    {
      id: 2,
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
          order: 1,
          image: "mockup.webp",
        },
        is_pinned: {
          order: 2,
          image: "showcase.webp",
        },
        is_other: null,
        project: {
          banner_image: "showcase.webp",
          screenshot: [
            "showcase.webp",
            "screenshot1.png",
            "screenshot2.png",
            "screenshot3.png",
            "screenshot4.png",
            "screenshot5.png",
            "screenshot7.png",
            "screenshot8.png",
            "banner.png",
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

    // 3 Foodify | 3 pinned
    {
      id: 3,
      name: "Foodify",
      information: {
        short_description: "An app for all things food-related.",
        description: [
          "Foodify is a comprehensive platform designed to provide users with access to a wide variety of recipes and detailed cooking procedures. The application categorizes dishes into various types such as desserts, lunches, steaks, and more. Each recipe comes with an ingredient list, step-by-step instructions, and nutritional information to help users make informed decisions about their meals.",
          "The app leverages the Spoonacular API, a powerful food-related API that aggregates data from various sources to provide detailed recipes, ingredient information, and nutritional breakdowns. With this API integration, Foodify offers users access to an extensive collection of recipes and food-related data.",
          "With its user-friendly interface, Foodify makes it easy to search for recipes by category, ingredient, or cuisine, providing a seamless experience for both amateur and experienced cooks. The app also offers personalized recipe suggestions based on user preferences and dietary restrictions.",
          "https://spoonacular.com/food-api",
        ],
        features: [
          "Recipe Variety: Offers a wide range of recipes categorized into different food types like desserts, lunches, steaks, etc.",
          "User-Friendly Interface: Simple and intuitive design, making it easy to browse and search for recipes.",
          "Personalized Suggestions: Recommends recipes based on user preferences and dietary needs.",
          "Step-by-Step Instructions: Detailed cooking procedures for each recipe to ensure accurate preparation.",
          "Nutritional Information: Provides essential nutritional data to help users make informed food choices.",
        ],
        type: ["design", "develop"],
        tags: {
          technology: [
            "HTML",
            "CSS",
            "JavaScript",
            "Laravel",
            "Sqlite",
            "Bootstrap",
            "Spoonacular API",
            "React",
          ],
          project: [
            "Food-App",
            "Recipe-Platform",
            "Ingredient-Management",
            "Personalized-Suggestions",
            "Web-Application",
          ],
        },
      },
      project_showcase: {
        is_intro: null,
        is_pinned: {
          order: 2,
          image: "showcase.webp",
        },
        is_other: null,
        project: {
          banner_image: "showcase.webp",
          screenshot: [
            "showcase.webp",
            "screenshot1.png",
            "screenshot2.png",
            "screenshot3.png",
            "screenshot4.png",
            "screenshot5.png",
          ],
        },
      },
      link: {
        name: "foodify",
        github: undefined,
        project: undefined,
        external: "https://foodify-ivory.vercel.app/",
      },
      design: {
        font: ["poppins"],
        color: ["#327b36", "#f4f4f4"],
      },
    },

    // 4 pinasmura | 4 pinned | 3 intro
    {
      id: 4,
      name: "PinasMura",
      information: {
        short_description: "eCommerce for Philippine-made items",
        description: [
          "PinasMura is a eCommerce platform that specializes in selling various Philippine-made items. From local handicrafts to popular food products, PinasMura aims to promote the culture and craftsmanship of the Philippines by providing a marketplace for locally sourced goods.",
          "The platform offers a complete shopping experience with features such as product browsing, adding items to the cart, checking out, and managing orders. It also includes user account functionalities like registration and login to keep track of orders and preferences.",
        ],
        features: [
          "User Registration & Login: Allows users to create accounts, log in, and manage their profiles and orders.",
          "Product Browsing: Provides an extensive catalog of Philippine-made products categorized for easy navigation.",
          "Add to Cart: Enables users to add items to their cart and manage them before making a purchase.",
          "Checkout System: Secure and straightforward checkout process for purchasing items.",
        ],
        type: ["Design", "develop"],
        tags: {
          technology: [
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
            "MySQL",
            "Tailwind",
            "Laravel",
            "React",
            "NPM Libraries",
            "Adobe XD",
            "Adobe PS",
          ],
          project: [
            "Ecommerce",
            "Philippine-Products",
            "Cart-System",
            "Login-Register",
            "Order-Tracking",
          ],
        },
      },
      project_showcase: {
        is_intro: {
          order: 3,
          image: "mockup.webp",
        },
        is_pinned: {
          order: 4,
          image: "banner.webp",
        },
        is_other: null,
        project: {
          banner_image: "banner.webp",
          screenshot: [
            "banner.webp",
            "screenshot1.png",
            "screenshot2.png",
            "screenshot3.png",
          ],
        },
      },
      link: {
        name: "pinasmura-ph",
        github: undefined,
        project: undefined,
        external: "https://pinas-mura.vercel.app/",
      },
      design: {
        font: ["poppins"],
        color: ["#3B82F6", "#eab308", "#f4f4f4"],
      },
    },

    // 5 QuizTwist | 5 pinned | 5 intro
    {
      id: 5,
      name: "QuizTwist",
      information: {
        short_description: "A quiz app with 15 questions and a point system.",
        description: [
          "QuizTwist is an engaging quiz application designed to challenge users with 15 questions across various categories. Users can choose from four distinct categories: General, English, Science, and Country. The app also includes a point system, rewarding users with points based on their quiz performance.",
          "QuizTwist features a user-friendly interface where individuals can register, log in, and track their quiz progress. It encourages learning while making the experience fun and competitive through its point-earning mechanism.",
        ],
        features: [
          "Multiple Categories: Offers four quiz categories - General, English, Science, and Country.",
          "Point System: Users earn points for each correct answer, motivating them to improve their scores.",
          "User Authentication: Login and register functionality for tracking quiz results and progress.",
          "Interactive UI: Easy-to-use interface for navigating quizzes and tracking points.",
        ],
        type: ["design", "develop"],
        tags: {
          technology: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Express",
            "Node.js",
            "MongoDB",
            "Adobe PS",
            "figma",
            "bootstrap",
          ],
          project: [
            "Quiz-App",
            "Education-Tech",
            "Login-Register",
            "Point-System",
            "Web-Application",
          ],
        },
      },
      project_showcase: {
        is_intro: {
          order: 5,
          image: "mockup.webp",
        },
        is_pinned: {
          order: 5,
          image: "banner.webp",
        },
        is_other: null,
        project: {
          banner_image: "banner.webp",
          screenshot: ["banner.webp", "screenshot1.png", "screenshot2.png"],
        },
      },
      link: {
        name: "quiztwist",
        github: undefined,
        project: undefined,
        external: "https://quiztwist-frontend.vercel.app/",
      },
      design: {
        font: ["poppins"],
        color: ["#39546d", "#13273e"],
      },
    },

    // 6 DASS | 6 pinned
    {
      id: 6,
      name: "Depression Level Predictor (DASS)",
      information: {
        short_description: "Predicts person's depression level",
        description: [
          "Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest. It is also called as major depressive disorder or clinical depression, it affects how you feel, think and behave, and can lead to a variety of emotional and physical problems.",
          "Depression Anxiety Stress Scales Responses is a dataset that was collected online from the various countries during the year of 2017 to 2019 by Openpsychometrics.org on Psychology Foundation of Australia | DASS in effort to educate the public about psychology. This dataset contains some background information of the respondents such as their race, education, religion, gender, etc. Furthermore, this dataset includes their responses from the 42 related negative emotional questions which is answerable from the scale of 1 to 4, and the 10-item personality test which is answerable from the scale of 1 to 7. Lastly, this dataset also contains the technical information of the respondent such as, what device they used while taking the test, where they found the test, etc.",
          "https://bit.ly/3XsKSOw",
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
          image: "banner.webp",
        },
        is_other: null,
        project: {
          banner_image: "banner.webp",
          screenshot: ["banner.webp"],
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

    // 7 mobhie | 2 other | 4 intro
    {
      id: 7,
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
          order: 4,
          image: "mockup.webp",
        },
        is_pinned: null,
        is_other: {
          order: 2,
          image: "banner.webp",
        },
        project: {
          banner_image: "banner.webp",
          screenshot: [
            "banner.webp",
            "banner.png",
            "screenshot1.png",
            "screenshot2.png",
            "screenshot3.png",
          ],
        },
      },
      link: {
        name: "mobhie",
        github: undefined,
        project: undefined,
        external: "https://mobhie.vercel.app/",
      },
      design: {
        font: ["poppins"],
        color: ["#ff0000", "#f5f5f5", "#222222"],
      },
    },

    // 17 Loustech | 12 other
    {
      id: 17,
      name: "Louis Tech Vuitton",
      information: {
        short_description: "E-commerce app for phone cases with a techy design",
        description: [
          "Louis Tech Vuitton is an e-commerce app designed exclusively for phone cases, featuring a tech-inspired aesthetic. This project is a design-only showcase, illustrating how technology can influence fashion and consumer electronics. It blends modern design elements with functional e-commerce features, offering a unique look at how tech can enhance product presentation in the fashion space.",
        ],
        type: ["design"],
        tags: {
          technology: [],
          project: ["e-commerce", "phone-cases", "tech-design"],
        },
      },
      project_showcase: {
        is_intro: null,
        is_pinned: null,
        is_other: {
          order: 12,
          image: "banner.webp",
        },
        project: {
          banner_image: "banner.webp",
          screenshot: [
            "banner.webp",
            "screenshot1.png",
            "screenshot2.png",
            "screenshot3.png",
            "screenshot4.png",
          ],
        },
      },
      link: {
        name: "louis-tech-vuitton",
        github: null,
        project: undefined,
        external: null,
      },
      design: {
        font: ["poppins"],
        color: ["#ffa31a", "#202020", "#f4f4f4"],
      },
    },

    // 8 PennyWise | 1 other
    {
      id: 8,
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
        is_intro: null,
        is_pinned: null,
        is_other: {
          orderr: 1,
          image: "banner.webp",
        },
        project: {
          banner_image: "banner.webp",
          screenshot: [
            "banner.webp",
            "screenshot1.png",
            "screenshot2.png",
            "screenshot4.png",
            "screenshot5.png",
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

    // 9 JollyMax | 3 other
    {
      id: 9,
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
          image: "banner.webp",
        },
        project: {
          banner_image: "banner.webp",
          screenshot: ["banner.png"],
        },
      },
      link: {
        name: "j0llym4x-ph",
        github: undefined,
        project: undefined,
        external: null,
      },
      design: null,
    },

    // 10 Shopeeling | 4 other
    {
      id: 10,
      name: "Shopeeling",
      information: {
        short_description: "Minimalist clothing e-commerce platform",
        description: [
          "Shopeeling is a sleek and minimalist e-commerce platform designed for clothing enthusiasts. The platform focuses on offering a clean and intuitive shopping experience, making it easy for users to browse and purchase products effortlessly.",
          "Shopeeling features a streamlined design with simple navigation, product filters, and a cart system. It allows users to explore a wide range of clothing items, from casual wear to more formal attire, all presented in an aesthetically pleasing manner.",
          "The platform is built with a focus on modern UI/UX principles, ensuring a smooth and efficient shopping experience across both desktop and mobile devices.",
        ],
        type: ["design"],
        tags: {
          technology: ["HTML", "CSS", "JavaScript", "Bootstrap"],
          project: [
            "E-commerce",
            "Minimalist-Design",
            "Clothing",
            "Web-Application",
          ],
        },
      },
      project_showcase: {
        is_intro: null,
        is_pinned: null,
        is_other: {
          order: 4,
          image: "banner.webp",
        },
        project: {
          banner_image: "banner.webp",
          screenshot: [
            "banner.webp",
            "screenshot1.png",
            "screenshot2.png",
            "screenshot3.png",
            "screenshot4.png",
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

    // 11 MoneyTracker v1 | 8 other
    {
      id: 11,
      name: "Money Tracker v1",
      information: {
        short_description: "Simple money tracker for practice",
        description: [
          "Money Tracker v1 is an old, basic project created for practice purposes. It allows users to track their income and expenses, providing a simple interface to manage personal finances.",
          "Though limited in functionality, it serves as an early-stage project for honing design and development skills. The app includes basic features for logging transactions and viewing total balances.",
        ],
        type: ["design", "develop"],
        tags: {
          technology: ["HTML", "CSS"],
          project: ["Money-Tracking", "Practice-Project"],
        },
      },
      project_showcase: {
        is_intro: null,
        is_pinned: null,
        is_other: {
          order: 8,
          image: "banner.webp",
        },
        project: {
          banner_image: "banner.webp",
          screenshot: ["banner.webp", "screenshot1.png"],
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

    // 12 Gcash PH | 9 other
    {
      id: 12,
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
          image: "banner.webp",
        },
        project: {
          banner_image: "banner.webp",
          screenshot: ["banner.webp"],
        },
      },
      link: {
        name: "gc4sh-ph",
        github: undefined,
        project: undefined,
        external: null,
      },
      design: null,
    },

    // 13 NFT Marketplace | 6 other
    {
      id: 13,
      name: "NFT Marketplace",
      information: {
        short_description: "NFT marketplace platform",
        description: [
          "NFT Marketplace is a project designed for practice purposes, focused on creating a user interface for an NFT (Non-Fungible Token) trading platform. The goal of this project was to practice design skills using Adobe XD, creating mockups for buying, selling, and displaying NFTs.",
          "This project serves as an exploration of the design concepts required to build a marketplace specifically for digital assets. It includes various elements such as NFT listings, user profiles, and transaction flows.",
        ],
        type: ["design"],
        tags: {
          technology: ["Adobe XD"],
          project: ["NFT", "Design-Project"],
        },
      },
      project_showcase: {
        is_intro: null,
        is_pinned: null,
        is_other: {
          order: 6,
          image: "banner.webp",
        },
        project: {
          banner_image: "banner.webp",
          screenshot: ["banner.webp", "screenshot1.png", "screenshot2.png"],
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

    // 14 Microsoft | 5 other
    {
      id: 14,
      name: "M1cros0ft R3w4rd BOT",
      information: {
        short_description: "Bot for auto grind points",
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
          order: 5,
          image: "banner.webp",
        },
        project: {
          banner_image: "banner.jpg",
          screenshot: ["banner.webp", "banner.jpg"],
        },
      },
      link: {
        name: "microsoft-reward-bot",
        github: undefined,
        project: undefined,
        external: null,
      },
      design: null,
    },

    // 15 Netflakes | 10 other
    {
      id: 15,
      name: "Netflakes",
      information: {
        short_description: "Online movie platform",
        description: [
          "Netflakes is an old project created for practice purposes. It serves as an online movie platform that allows users to browse movies by fetching data from external APIs such as The Movie Database (TMDb).",
          "This project demonstrates the integration of APIs into a web application, showcasing the ability to display movie details like titles, descriptions, and ratings. Built with basic web technologies, it was a good learning experience for handling API calls and rendering dynamic data.",
          "https://www.themoviedb.org/",
        ],
        type: ["Design", "Develop"],
        tags: {
          technology: ["HTML", "CSS", "API"],
          project: ["movie-app", "API-integration"],
        },
      },
      project_showcase: {
        is_intro: null,
        is_pinned: null,
        is_other: {
          order: 10,
          image: "banner.webp",
        },
        project: {
          banner_image: "banner.webp",
          screenshot: ["screenshot1.png", "screenshot2.png"],
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

    // 16 E-Commerce | 11 other
    {
      id: 16,
      name: "E-commerce",
      information: {
        short_description: "E-commerce Platform",
        description: [
          "An old project created for practice purposes. This e-commerce platform demonstrates basic functionality such as browsing products, adding items to a cart, and viewing product details. Although the project is intended for learning, it follows standard e-commerce architecture with design and development elements.",
        ],
        type: ["design", "develop"],
        tags: {
          technology: ["HTML", "CSS", "JavaScript"],
          project: ["e-commerce", "practice-project"],
        },
      },
      project_showcase: {
        is_intro: null,
        is_pinned: null,
        is_other: {
          order: 11,
          image: "banner.webp",
        },
        project: {
          banner_image: "banner.webp",
          screenshot: [
            "banner.webp",
            "screenshot1.png",
            "screenshot2.png",
            "screenshot3.png",
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
  const intro_projects = all_projects();

  const projects = intro_projects.reduce(
    (dump, { id, name, information, project_showcase, link }) => {
      if (project_showcase.is_intro) {
        if (link.github) {
          link.github = `${github_url}${link.name}`;
        }
        link.project = `${project_url}${link.name}`;

        dump.push({
          id,
          name,
          information: {
            short_description: information.short_description,
          },
          link,
          project_showcase: {
            url: `projects/${link.name}/`,
            is_intro: project_showcase.is_intro,
          },
        });
      }
      return dump;
    },
    []
  );

  projects.sort(
    (a, b) =>
      a.project_showcase.is_intro.order - b.project_showcase.is_intro.order
  );

  return projects;
}

export function projects() {
  const projects = all_projects();
  const categorizedProjects = {
    otherProjects: [],
    pinnedProjects: [],
  };

  projects.forEach(({ id, name, information, link, project_showcase }) => {
    const projectObject = {
      id,
      name,
      information: {
        short_description: information.short_description,
        description: information.description[0],
        tags: information.tags,
        type: information.type,
      },
      link,
      project_showcase: {
        url: `projects/${link.name}/`,
        is_other: project_showcase.is_other,
        is_pinned: project_showcase.is_pinned,
      },
    };

    if (project_showcase.is_other != null) {
      categorizedProjects.otherProjects.push(projectObject);
    } else {
      categorizedProjects.pinnedProjects.push(projectObject);
    }
  });

  return [
    categorizedProjects.otherProjects,
    categorizedProjects.pinnedProjects,
  ];
}

export function all_projects() {
  return updateProjectLink(getAllProjects());
}

export function getProject(target) {
  let projects = all_projects();

  for (let project of projects) {
    if (project.link.name.includes(target)) {
      project.project_showcase.url = `projects/${project.link.name}/`;

      return project;
    }
  }

  return null;
}
