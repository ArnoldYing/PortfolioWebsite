/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Arnold's Portfolio",
  description:
    "Fourth year Computer Engineering student at University of British Columbia",
  og: {
    title: "Arnold Hathidara Portfolio",
    type: "website",
    url: "http://Arnoldhathidara.com/",
  },
};

const credit = {
  name: "Ashutosh Hathidara",
  url: "https://github.com/ashutosh1919/masterPortfolio",
  github: "@ashutosh1919",
};

//Home Page
const greeting = {
  title: "Arnold Kaiqi Ying",
  logo_name: "Arnold Ying",
  nickname: "Arnold",
  subTitle:
    "Fourth year Computer Engineering student at University of British Columbia",
  resumeLink:
    "https://drive.google.com/file/d/1-kII_dk-JcWUAB4lyc0Y-lfzvznVN670/view",
};

const about = {
  title: "About Me",
  description: ""
};

const socialMediaLinks = [
  /* Your Social Media Link */
  {
    name: "Github",
    link: "https://github.com/arnoldying",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/arnoldying",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:arnoldying825@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
};

const degrees = {
};

const certifications = {
};

// Experience Page
const experience = {
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I love working on different projects that have a range of impact on our daily lives, here are a few of them:",
  avatar_image_path: "projects_image.svg",
  github_link: "https://github.com/arnoldying",
};

const projects = {
  data: [
    {
      "name":"Covid Go Away",
      "createdAt":"Oct 2020",
      "url":"https://devpost.com/software/covid-go-away-bc9i6p",
      "description":"Fun little survival game I co-created with my friends during DubHacks 2020, mixing in the theme of the Covid-19 pandemic",
      "languages":[
        {"name":"C#","iconifyClass":"logos-c-sharp"}
      ]
    },
    {
      "name":"Flappy Bird",
      "createdAt":"Feb 2020",
      "url":"https://github.com/ArnoldYing/FlappyBird",
      "description":"An attempt to mimic the popular rage-inducing mobile game flappy bird with my friend Stella during reading break 2020",
      "languages":[
          {"name":"Python","iconifyClass":"logos-python"}
      ]
    },
    {
      "name":"Braille-ify",
      "createdAt":"Nov 2019",
      "url":"https://github.com/ArnoldYing/Braille-ify",
      "description":"Braille-ify takes a Wikipedia page URL as an entry and displays the contents of the page in a GUI. We have designs and code for connections to a Raspberry Pi board.",
      "languages":[
          {"name":"Python","iconifyClass":"logos-python"}
      ]
    },
    {
      "name":"Assignment Scheduler",
      "createdAt":"Jan 2020",
      "url":"https://github.com/ArnoldYing/AssignmentScheduler",
      "description":"Assignment Scheduler is a chrome extension that can send you reminders of your deadlines, manage all your courses, and keep you on track.",
      "languages":[
          {"name":"HTML","iconifyClass":"logos-html-5"},
          {"name":"CSS","iconifyClass":"logos-css-3"},
          {"name":"JavaScript","iconifyClass":"logos-javascript"}
      ]
    },
  ]
}

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "arnold-square.jpg",
    description:
      "I can be reached via Github, Linkedin, and Email.",
  },
};

export {
  settings,
  seo,
  credit,
  greeting,
  about,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  projects,
  contactPageData,
};
