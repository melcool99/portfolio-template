export const personalInfo = {
  personalProfile: [
    {
      firstName: "Cristian",
      lastName: "Vlad",
      occupation: "Web Developer",
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
      title: "Web Developer",
      company: "VOLENA DESIGN S.R.L",
      year: {
        start: "2018",
        end: "Present",
      },
      city: "Bucharest",
      description: `
        Daily website maintenance & updating in a timely fashion.
        Customer database management.
        Custom API integrations.`,
    },
    {
      id: "job2",
      title: "Sales Analyst",
      company: "S.C. 2 TIMPI S.R.L.",
      year: {
        start: "2015",
        end: "2016",
      },
      city: "Slatina",
      description: `  
        Developed and implemented commercial strategies according to company goals and objectives aimed to accelerate growth.
        Managed the day to day business operations, with an initial focus on sales.
        Conducted market research and analysis to create detailed business plans on commercial opportunities (expansion, business development).
        Maintained good relationships with all suppliers in the market.
        `,
    },
    {
      id: "job3",
      title: "Senior Sales Agent",
      company: "ALEEA TRADING S.R.L.",
      year: {
        start: "2014",
        end: "2015",
      },
      city: "Bucharest",
      description: `
        Implemented up-selling strategies for recommending accessories and complementary
          purchases.
        Trained and developed sales team associates in products, selling techniques,
          and procedures.
        Expanded portfolio of buyers.`,
    },
    {
      id: "job4",
      title: "Pawnbroker Assistant",
      company: "ROGEF LUCKY GOLD IFN",
      year: {
        start: "2010",
        end: "2013",
      },
      city: "Slatina",
      description: `Managed and optimized the contract database.
        Analyzed and processed returns assisting customers with finding alternative merchandise
        to meet needs.
        Advised clients on how to obtain loans.`,
    },
  ],

  skills: {
    codingSkills: [
      { id:'skills1',
        category: "Front-End",
        languages: [
          "HTML5",
          "CSS3",
          "Javascript",
          "React Js",
          "Redux",
          "Material UI",
          "Bootstrap",
        ],
      },

      { id:'skills2',
        category: "Back-End",
        languages: ["Node.js", "Next.js", "Python"],
      },
      { id:'skills3',
        category: "Databases",
        languages: ["PostgreSql", "MySql", "MongoDB"],
      },
      { id:'skills4',
        category: "Source Control",
        languages: ["Git", "GitHub"],
      },
    ],
    languages: [
      {
        id:'lang1',
        title: "English",
        level: "Professional Proficiency",
      },
      {
        id:'lang2',
        title: "French",
        level: "Basic",
      },
    ],
    softSkills: [
        `Highly motivated`,
        `Results and solutions-oriented`,
        `Great ability to work with a team`,
        `Excellent communication skills`,
        `Research oriented`,
        `Problem solver`,
      ],

    courses: [
      {
        title: `React - The Complete Guide (incl Hooks, React Router, Redux) - Academind`,
        url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595454?start=15",
      },
      {
        title: `The Complete Web Developer in 2021: Zero to Mastery - Zero To Mastery Academy`,
        url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-855c0a51-9124-486f-9c1c-d13e3871a8db.pdf",
      },

      {
        title: `Complete Python Developer in 2021: Zero to Mastery - Zero To Mastery Academy`,
        url: "https://www.udemy.com/certificate/UC-c839c267-f408-4552-a195-e1b7d59cd1bd/",
      },
      {
        title: `Complete SQL + Databases Bootcamp: Zero to Mastery - Zero To Mastery Academy`,
        url: "https://www.udemy.com/certificate/UC-dbba7d1c-c40b-4126-a187-14f40128458a/",
      },
    ],
  },

  projects:[
    
    {
      title:'Food Order ',
      githubUrl:"https://github.com/melcool99/food-order-app",
      url:'https://mlc-foodorder.netlify.app/',
      image:'https://source.unsplash.com/featured/?food',
      description:'Food Order mockup in React, using Firebase'
    },
    {
      title:'Weather App',
      githubUrl:"https://github.com/melcool99/weather-app",
      url:'https://mlc-weather.netlify.app/',
      image:'https://source.unsplash.com/featured/?weather',
      description:`Vanilla JavScript weather application using OpenWeather free API's and Netlifly serverless functions`,
    },
    {
      title:'Robofriends',
      githubUrl:"https://github.com/melcool99/robofriends",
      url:'https://melcool99.github.io/robofriends/',
      image:'https://source.unsplash.com/featured/?robots',
      description:'Search your robot'
    },
    {
      title:'Portfolio Template',
      githubUrl:"https://github.com/melcool99/robofriends",
      url:'https://melcool99.github.io/robofriends/',
      image:'https://source.unsplash.com/featured/?resume',
      description:'React portfolio template using Material UI '
    },
  ],
  hobbies:['Technology', 'Gadgets', 'Crypto','Blockchain', 'Football', 'Video Games',]
};
