export const personalInfo = {
  personalProfile: [
    {
      firstName: "Cristian",
      lastName: "Vlad",
      occupation: "Frontend Developer",
      city: "Bucharest",
      country: "Romania",
      email: "vladcristian84@gmail.com",
      phone: "+40765463428",
      socialMediaLinks: {
        linkedInUrl: "https://www.linkedin.com/in/cristian-iulian-vlad/",
        githubUrl: "https://github.com/melcool99",
      },
    },
  ],
  education: [
    {
      id: 1,
      schoolName: "Dimitrie Cantemir University",
      degree: "Master's Degree",
      speciality: `Mediation and Conflict Resolution`,
      city: "Bucharest",
      year: {
        start: "2014",
        end: "2015",
      },
    },
    {
      id: 2,
      schoolName: `University of Agronomic Sciences and
          Veterinary Medicine of Bucharest`,
      degree: `Bachelor's Degree`,
      speciality: `The Faculty of Management and Rural
          Development `,
      city: "Bucharest",
      year: {
        start: "2005",
        end: "2010",
      },
    },
  ],

  jobs: [
    {
      id: "job1",
      title: "Co-Founder",
      company: "VOLENA DESIGN S.R.L",
      year: {
        start: "2018",
        end: "2021",
      },
      city: "Bucharest",
      description: [
       " Daily website maintenance.",
        "Customer database management.",
        "Custom API integrations."],
    },
    {
      id: "job2",
      title: "Online Poker Player",
      company: "PokerStars",
      year: {
        start: "2015",
        end: "2020",
      },
      city: "Bucharest",
      description: [
      "Applied mathematically-based poker decisions following statistics.",
      "Used PostrgreSql software for database management and gameplay improvement analysis sessions(PokerTracker4).",
      "Studied game theory optimal approaches using analysis software solutions(PioSOLVER).",
      "Maintained a balanced mental approach for long poker sessions.",
    ],

    },
    {
      id: "job3",
      title: "Online Selling Amazon FBA",
      company: "Amazon",
      year: {
        start: "2017",
        end: "2019",
      },
      city: "Bucharest",
      description: [
      "Developed and launched a fitness products brand.",
     " Performed market research using different software programs (Jungle Scout, Google Trends, Keyword Tracker).",
      "Established and maintained contact with product manufacturers in China.",
      "Supervised product quality-check and shipping to Amazon warehouses in the USA.",
      "Handled the search engine optimization and promoted the product page.",
      "Managed customer service, sales, and inventory in Amazon Seller Central.",
    ],
    },
    {
      id: "job4",
      title: "Sales Analyst",
      company: "S.C. 2 TIMPI S.R.L.",
      year: {
        start: "2015",
        end: "2016",
      },
      city: "Slatina",
      description: [
       " Developed and implemented commercial strategies according to company goals and objectives aimed to accelerate growth.",
        "Managed the day-to-day business operations, with an initial focus on sales.",
        "Market analysis and research to create business plans on commercial opportunities (expansion, business development).",
        ],
    },
    {
      id: "job5",
      title: "Senior Sales Agent",
      company: "ALEEA TRADING S.R.L.",
      year: {
        start: "2014",
        end: "2014",
      },
      city: "Bucharest",
      description: [

        "Worked closely with the owner to improve quality standards for customer satisfaction.",
        "Was trusted with special projects to help my team sell better and be more motivated.",
        "Maintained good connections with all suppliers in the market.",
      ],
    },
    {
      id: "job6",
      title: "Pawnbroker Assistant",
      company: "ROGEF LUCKY GOLD IFN",
      year: {
        start: "2010",
        end: "2013",
      },
      city: "Slatina",
      description: [
        "Managed and optimized the contract database.",
        "Analyzed and processed returns.",
        "Advised clients on how to obtain loans.",
      ],
    },
  ],

  skills: {
    codingSkills: [
      {
        id: "skills1",
        category: "Front-End",
        languages: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "TypeScript",
          "React JS",
          "React Hooks",
          "React Router",
          "Redux",
          "REST APIs",
          "Material UI",
          "Bootstrap",
        ],
      },

      {
        id: "skills2",
        category: "Back-End",
        languages: ["Next.JS", "Python"],
      },
      {
        id: "skills3",
        category: "Databases",
        languages: ["PostgreSQL", "MySql"],
      },
      {
        id: "skills4",
        category: "Source Control",
        languages: ["Git", "GitHub"],
      },
    ],
    languages: [
      {
        id: "lang1",
        title: "English",
        level: "Professional",
      },
      {
        id: "lang2",
        title: "French",
        level: "Basic",
      },
    ],
    softSkills: [
      `Highly motivated`,
      `Analytical, proactive and creative thinking`,
      `Results and solutions-oriented`,
      `Great ability to work with a team`,
      `Excellent communication skills`,
      `Research oriented`,
      `Problem solver`,
    ],

    courses: [
      { id:'course1',
        title: `React - The Complete Guide (incl Hooks, React Router, Redux) - Academind`,
        url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
        certificate:"https://www.udemy.com/certificate/UC-3a850640-b580-48db-abc6-d8f42eb7ff53/"
      },
      { 
        id:'course2',
        title: `The Complete Web Developer in 2021: Zero to Mastery - Zero To Mastery Academy`,
        url: "https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/",
        certificate:"https://udemy-certificate.s3.amazonaws.com/pdf/UC-855c0a51-9124-486f-9c1c-d13e3871a8db.pdf",
      },

      { 
        id:'course3',
        title: `Complete Python Developer in 2021: Zero to Mastery - Zero To Mastery Academy`,
        url: "https://www.udemy.com/course/complete-python-developer-zero-to-mastery/",
        certificate:"https://www.udemy.com/certificate/UC-c839c267-f408-4552-a195-e1b7d59cd1bd/",
      },
      {
        id:'course4',
        title: `Complete SQL + Databases Bootcamp: Zero to Mastery - Zero To Mastery Academy`,
        url: "https://www.udemy.com/course/complete-sql-databases-bootcamp-zero-to-mastery/",
        certificate:"https://www.udemy.com/certificate/UC-dbba7d1c-c40b-4126-a187-14f40128458a/",
      },
    ],
  },

  projects: [
    {
      title: "Portfolio Template",
      githubUrl: "https://github.com/melcool99/portfolio-template",
      url: "https://cristianvlad.netlify.app/",
      image: "https://source.unsplash.com/featured/?office",
      description: "Portfolio template using React and Material UI ",
    },
    {
      title: "Search Products",
      githubUrl: "https://github.com/melcool99/kubis",
      url: "https://kubis.vercel.app/",
      image: "https://source.unsplash.com/featured/?fitness",
      description: "Next JS and Material UI project",
    },

    {
      title: "Great Quotes",
      githubUrl:"https://github.com/melcool99/Great-Quotes",
      url:'https://mlc-greatquotes.netlify.app',
      image:"https://source.unsplash.com/featured/?quotes",
      description:'Quotes page with React Redux and Firebase API '
    },
    {
      title: "Food Ordering App ",
      githubUrl: "https://github.com/melcool99/food-order-app",
      url: "https://mlc-foodorder.netlify.app/",
      image: "https://source.unsplash.com/featured/?food",
      description: "Food Order mockup in React, using Firebase",
    },
    {
      title: "Weather App",
      githubUrl: "https://github.com/melcool99/weather-app",
      url: "https://mlc-weather.netlify.app/",
      image: "https://source.unsplash.com/featured/?weather",
      description: `Vanilla JavScript weather application using OpenWeather free API's and Netlifly serverless functions`,
    },
    {
      title: "Robofriends",
      githubUrl: "https://github.com/melcool99/robofriends",
      url: "https://melcool99.github.io/robofriends/",
      image: "https://source.unsplash.com/featured/?robots",
      description: "Search your robot",
    },
  ],
  hobbies: [
    "Technology",
    "Gadgets",
    "Crypto",
    "Blockchain",
    "Football",
    "Video Games",
    "Poker",
  ],
};
