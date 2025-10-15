/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mahir Tazwar",
  title: "Hi all, I'm Mahir",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with  ASP.Net / Laravel / Reactjs / Nodejs / Django and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1MrZZT5HY3BnmRwF3w9h62-BO4aiidvlH/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mtaz337",
  linkedin: "https://www.linkedin.com/in/mahirtaz/",
  gmail: "mahirtaz@gmail.com",
  facebook: "https://www.facebook.com/xtreme.mahir/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Aspiring FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "typescript",
      fontAwesomeClassname: "fab fa-codepen"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "golang",
      fontAwesomeClassname: "fab fa-golang"
    },
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "django",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "c#",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Asp.net",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mysql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "postgres",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "oracle",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "sql server",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Puppeteer",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "restful api",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "graphql",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "latex",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },

    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "BRAC University",
      logo: require("./assets/images/brac.webp"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "March 2015 - December 2020",
      desc: "Member of BRACU Competitive Programming Enthusiasts group.",
      descBullets: [
        "2nd Runner-up at BRACU Intra University Programming Contest 2016."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
     {
      role: "Software Developer",
      company: "Microsec Ltd.",
      companylogo: require("./assets/images/microsec_ltd__logo.jpeg"),
      date: "Oct 2024 – Present",
      desc: "Developing and maintaining a large-scale logistics application using ASP.NET Core, CQRS, Mediator, and SQL Server. Collaborating with international teams to build and optimize backend services and ensure reliable data synchronization."
    },
    {
      role: "Software Engineer",
      company: "United Finance",
      companylogo: require("./assets/images/ufll.png"),
      date: "Mar 2023 – Sept 2024",
      desc: "Developing ERP solutions with Asp.net MVC, Asp.net Core, MySQL, Microsoft SQL server etc. And Maintaining and troubleshooting their existing ERP solutions which are primarily based on Fintech."
    },
    {
      role: "Junior Software Engineer",
      company: "Airbringr LLC",
      companylogo: require("./assets/images/airbringrr.png"),
      date: "Dec 2021 – Mar 2023",
      desc: "Maintained their legacy application written in Laravel, Node.js, React, Postgresql. Made new solutions with Golang, React and MongoDB which directly impacted business."
    },
    {
      role: "Coding Instructor",
      company: "Educode.org",
      companylogo: require("./assets/images/eddu.png"),
      date: "Mar 2021 – Sep 2021",
      desc: "Taught Programming, Web Development, Game Development, Data Science to 7-16 years old students."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/logo-ufc.jpg"),
      projectName: "United Finance",
      projectDesc:
        "Official website of a prominent financial company that I contributed in",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.unitedfinance.com.bd/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/airr.png"),
      projectName: "Airbringr",
      projectDesc:
        "contributed to building and maintaining an e-commerce website for an aspiring startup.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://airbringr.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I love to read and write blog posts on aspiring new technolgies. here are some of the blogs I found worth giving a read",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@kobalazs/five-fallacies-of-estimations-in-software-development-897c5bc0630f",
      title: "Five fallacies of estimations in software development",
      description:
        "Someone should do the estimations, so the team can work uninterrupted."
    },
    {
      url: "https://medium.com/dare-to-be-better/4-alternatives-to-postman-to-consider-after-their-latest-update-f9de86ce2afe",
      title: "4 Alternatives to Postman to Consider After Their Latest Update",
      description:
        "The recent changes to Postman made it a bit difficult to use for some users. Here are some options and alternatives."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle:
    "I love to hear about tech and Their Behind the scene stories. Here is a podcast that I recently like.",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+88-01756800256",
  email_address: "mahirtaz@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "MahirTaz", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  achievementSection,
  bigProjects,
  blogSection,
  contactInfo,
  educationInfo,
  greeting,
  illustration,
  isHireable,
  openSource,
  podcastSection,
  skillsSection,
  socialMediaLinks,
  splashScreen,
  talkSection,
  techStack,
  twitterDetails,
  workExperiences
};
