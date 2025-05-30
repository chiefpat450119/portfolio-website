// Projects github root url
const ROOT_URL = "https://github.com/chiefpat450119/";


export const PROJECTS_DATA = [
    {
      id: 1,
      title: "Ammonium Bot",
      description: "Reddit bot that helps users with common grammatical and etymological mistakes.",
      image: "/images/projects/ammoniumbot.png",
      tag: ["All", "Community"],
      gitUrl: ROOT_URL + "AmmoniumBot",
      previewUrl: "https://www.reddit.com/user/ammonium_bot/",
      technologies: ["Python", "PRAW", "Github Actions"],
    },
    {
      id: 8,
      title: "Tongue Tied Tale: GMTK 2024 Submission",
      description: "A story-rich 2d platformer adventure featuring a hungry chameleon, unique physics and innovative puzzles. Developed for GMTK Game Jam 2024: Built to Scale.",
      image: "/images/projects/tonguetiedtale.jpeg",
      tag: ["All", "Hackathon"],
      gitUrl: "https://github.com/Watercooled-Grapes/GMTK-2024",
      previewUrl: "https://andrewyx.itch.io/tongue-tied-tale",
      technologies: ["Unity", "C#", "Github", "WebGL"],
    },
    {
      id: 2,
      title: "Fighting My Demons: HackCamp 2023 Winning Submission",
      description: "An innovative game that stops users from snoozing their alarms in the morning.",
      image: "/images/projects/fightingmydemons.png",
      tag: ["All", "Hackathon"],
      gitUrl: ROOT_URL + "FightingMyDemons",
      previewUrl: "https://devpost.com/software/fighting-my-demons",
      technologies: ["Python", "Pygame"],
    },
    {
      id: 11,
      title: "Slime Succumber: UBC Game Dev Club Team 5 2024/25",
      description: "A mobile roguelike developed in Godot where the player is a slime monster who must survive waves of human enemies.",
      image: "/images/projects/ss.png",
      tag: ["All"],
      gitUrl: "https://github.com/Arakruz/ubc-game-dev-team-5",
      previewUrl: "/",
      technologies: ["Godot", "C#"],
    },
    {
      id: 10, 
      title: "CredEat",
      description: "A web app that helps users find healthy recipes with a one-click nutrition rating system.",
      image: "/images/projects/credeat.jpg",
      tag: ["All", "Community", "Hackathon"],
      gitUrl: "https://github.com/pnotato/CredEat",
      previewUrl: "https://devpost.com/software/credeat",
      technologies: ["React", "Python", "Flask"],
    },
    {
      id: 9,
      title: "CanDo Tennis Website",
      description: "A website for CanDo Tennis, a freelance tennis coaching business I co-founded.",
      image: "/images/projects/candotennis.png",
      tag: ["All", "Community"],
      gitUrl: ROOT_URL + "CandoTennis",
      previewUrl: "https://candotennis.com",
      technologies: ["Next.js", "React", "Tailwind CSS", "Typescript"],
    },
    {
      id: 3,
      title: "Loopy",
      description: "Maps API powered planner and rating system for Metro Vancouver transit routes.",
      image: "/images/projects/loopy.png",
      tag: ["All", "Hackathon", "Community"],
      gitUrl: "https://github.com/Andrewyx/Loopy",
      previewUrl: "https://devpost.com/software/loopy-izvt34",
      technologies: ["JavaScript", "HTML/CSS", "React", "Tailwind CSS", "Firebase", "Google Maps API"],
    },
    {
      id: 4,
      title: "Heart Disease Classifier",
      description: "Data science analysis using KNN classification in R to predict the presence of heart disease.",
      image: "/images/projects/heartdisease.png",
      tag: ["All", "School"],
      gitUrl: ROOT_URL + "HeartDiseaseClassifier",
      previewUrl: "/",
      technologies: ["R", "Jupyter"],
    },
    {
      id: 5,
      title: "Iron Insight",
      description: "Java desktop application for tracking strength training progress.",
      image: "/images/projects/ironinsight.png",
      tag: ["All", "School"],
      gitUrl: ROOT_URL + "IronInsight",
      previewUrl: "/",
      technologies: ["Java", "Swing"],
    },
    {
      id: 6,
      title: "Portfolio Tracker",
      description: "Personal invesment tracker built with Python, Sheets API and GitHub Actions.",
      image: "/images/projects/portfolio.jpg",
      tag: ["All", "Personal"],
      gitUrl: ROOT_URL + "PortfolioTracker",
      previewUrl: "/",
      technologies: ["Python", "Google Sheets API", "Github Actions", "SMTP", "REST APIs"],
    },
    {
      id: 7,
      title: "SLack Off",
      description: "Lecture slide and audio summarizer to help you catch up on missed (or skipped) classes.",
      image: "/images/projects/slackoff.jpg",
      tag: ["All", "Hackathon"],
      gitUrl: "https://github.com/Andrewyx/slack-off",
      previewUrl: "https://devpost.com/software/slack-off",
      technologies: ["React", "JavaScript", "Python", "Flask", "OpenAI API", "Cohere API"],
    }
  ];

  export const TAB_DATA = [
    {
      title: "Current Involvement",
      id: "current",
      content: [
        "3rd Year Computer Science Student @ UBC",
        "Software Engineer Intern @ Rivian and VW Group Technologies, Vancouver",
        "Game Developer @ UBC Game Dev Club",
        "Relations Coordinator @ GDSC UBC",
      ],
    },
    {
      title: "Skills",
      id: "skills",
      content: [
        "Python",
        "Kotlin",
        "JavaScript",
        "C#",
        "Next.js/React",
        "Java",
        "R",
      ],
    },
    {
      title: "Experience",
      id: "experience",
  
      content: [
        "Software Engineer Intern @ Rivian and VW Group Technologies, Vancouver",
        "Tennis Instructor @ UBC Recreation, Vancouver",
        "Software Engineer Intern @ Project Flux, Singapore",
      ],
    },
    {
      title: "Awards",
      id: "awards",
      content: [
        "NwPlus HackCamp 2023 Winner ($100 prize)",
        "$1500 Trek Scholarship for Continuing Students 2024, UBC",
        "2024W UBC Computer Science Scholarship",
        "2024W Greer Family Scholarship",
        "Dean's Scholar @ UBC",
      ],
    },
  ];