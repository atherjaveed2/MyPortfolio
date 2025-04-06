/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Javeed's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "M A Javeed Ather Portfolio",
    type: "website",
    url: "http://javeedather.com/",
  },
};

//Home Page
const greeting = {
  title: "M A Javeed Ather",
  logo_name: "JaveedAther",
  subTitle:
    "In the world of technology, versatility is the key. As a full-stack developer, I thrive on bridging the gap between front-end elegance and back-end functionality, ensuring seamless user experiences.",
  resumeLink:
    "https://drive.google.com/file/d/1tK4yTQBgUVCV5rFua1HddbImoL3k44WC/view?usp=drive_link",
  portfolio_repository:
    "https://drive.google.com/file/d/1tK4yTQBgUVCV5rFua1HddbImoL3k44WC/view?usp=drive_link",
  githubProfile: "https://github.com/atherjaveed2",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/atherjaveed2",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/m-a-javeed-ather-lnu-81353218b/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:atherjaveed007@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/javeedather2/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Deeplearning",
    //       imageSrc: "deeplearning_ai_logo.png",
    //     },
    //   ],
    // },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Proficient in multiple programming languages such as Golang, Python, and Java.",
        "⚡ Possesses extensive experience in managing database systems including Oracle SQL, MySQL, and MongoDB, ensuring effective data handling and storage solutions for applications.",
        "⚡ Demonstrates expertise in leveraging a variety of technologies and frameworks like React, Angular, Node, Beego, Material UI, Generative AI, and Langchain to create dynamic and user-centric web applications.",
        "⚡ Capable of designing and developing full-stack applications from inception to deployment, with a strong grasp of both frontend and backend development principles.",
        "⚡ Has a track record of collaborating with cross-functional teams to deliver high-quality software solutions that fulfill client requirements and adhere to industry standards.",
      ],
      softwareSkills: [
        {
          skillName: "GoLang",
          fontAwesomeClassname: "skill-icons:golang",
          style: {
            color: "#00b4e0",
          },
        },
        {
          skillName: "JAVA",
          fontAwesomeClassname: "devicon:java-wordmark",
          style: {
            color: "#00b4e0",
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
          skillName: "Typescript",
          fontAwesomeClassname: "devicon:typescript",
          style: {
            backgroundColor: "#ffffff",
            color: "#F7DF1E",
          },
        },
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
          skillName: "PHP",
          fontAwesomeClassname: "devicon:php",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Oracle SQL",
          fontAwesomeClassname: "devicon:oracle",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "devicon:mysql-wordmark",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "devicon:mongodb-wordmark",
          style: {
            color: "#CC6699",
          },
        },
        // {
        //   skillName: "ReactJS",
        //   fontAwesomeClassname: "devicon:react-wordmark",
        //   style: {
        //     color: "#61DAFB",
        //   },
        // },
        {
          skillName: "Angular",
          fontAwesomeClassname: "vscode-icons:file-type-angular",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
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
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Central Missouri",
      subtitle: "M.S. in Computer Science",
      logo_path: "iu_logo.png",
      alt_name: "University of Central Missouri",
      duration: "2024 - 2025",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.ucmo.edu/",
    },
  ],
};

const certifications = {
  // certifications: [
  //   {
  //     title: "Machine Learning",
  //     subtitle: "- Andrew Ng",
  //     logo_path: "stanford_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
  //     alt_name: "Stanford University",
  //     color_code: "#8C151599",
  //   },
  //   {
  //     title: "Deep Learning",
  //     subtitle: "- Andrew Ng",
  //     logo_path: "deeplearning_ai_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
  //     alt_name: "deeplearning.ai",
  //     color_code: "#00000099",
  //   },
  //   {
  //     title: "ML on GCP",
  //     subtitle: "- GCP Training",
  //     logo_path: "google_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
  //     alt_name: "Google",
  //     color_code: "#0C9D5899",
  //   },
  //   {
  //     title: "Data Science",
  //     subtitle: "- Alex Aklson",
  //     logo_path: "ibm_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
  //     alt_name: "IBM",
  //     color_code: "#1F70C199",
  //   },
  //   {
  //     title: "Big Data",
  //     subtitle: "- Kim Akers",
  //     logo_path: "microsoft_logo.png",
  //     certificate_link:
  //       "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
  //     alt_name: "Microsoft",
  //     color_code: "#D83B0199",
  //   },
  //   {
  //     title: "Advanced Data Science",
  //     subtitle: "- Romeo Kienzler",
  //     logo_path: "ibm_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
  //     alt_name: "IBM",
  //     color_code: "#1F70C199",
  //   },
  //   {
  //     title: "Advanced ML on GCP",
  //     subtitle: "- GCP Training",
  //     logo_path: "google_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
  //     alt_name: "Google",
  //     color_code: "#0C9D5899",
  //   },
  //   {
  //     title: "DL on Tensorflow",
  //     subtitle: "- Laurence Moroney",
  //     logo_path: "deeplearning_ai_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
  //     alt_name: "deeplearning.ai",
  //     color_code: "#00000099",
  //   },
  //   {
  //     title: "Fullstack Development",
  //     subtitle: "- Jogesh Muppala",
  //     logo_path: "coursera_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
  //     alt_name: "Coursera",
  //     color_code: "#2A73CC",
  //   },
  //   {
  //     title: "Kuberenetes on GCP",
  //     subtitle: "- Qwiklabs",
  //     logo_path: "gcp_logo.png",
  //     certificate_link:
  //       "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
  //     alt_name: "GCP",
  //     color_code: "#4285F499",
  //   },
  //   {
  //     title: "Cryptography",
  //     subtitle: "- Saurabh Mukhopadhyay",
  //     logo_path: "nptel_logo.png",
  //     certificate_link:
  //       "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
  //     alt_name: "NPTEL",
  //     color_code: "#FFBB0099",
  //   },
  //   {
  //     title: "Cloud Architecture",
  //     subtitle: "- Qwiklabs",
  //     logo_path: "gcp_logo.png",
  //     certificate_link:
  //       "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
  //     alt_name: "GCP",
  //     color_code: "#4285F499",
  //   },
  // ],

  certifications: [],
};

const experience = {
  title: "Work Experience",
  subtitle: "",
  description:
    "With close to three years of experience as a Software Engineer at Sureify Labs, I specialize in developing scalable and efficient solutions for real-world challenges. Passionate about enhancing operational efficiency and data integrity, I've engineered Python scripts, optimized SQL queries, and revamped microservices, consistently delivering significant reductions in overhead and response times.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer - II",
          company: "Sureify Labs",
          company_url: "https://www.sureify.com/",
          logo_path: "sureify.jpg",
          duration: "November 2022 - December 2023",
          location: "Hyderabad, India",
          description: [
            "⚡ Led hands-on training of 3 interns in Golang, and Java guiding them through SDLC process, implementing Agile/Scrum practices for sprint planning and grooming, culminating in the delivery of high-quality code with minimal technical debt.",

            "⚡ Optimized SQL queries for email transactions, reducing cron job run times by 40% for 150k emails daily.",

            "⚡ Refined code quality by 25% through rigorous code reviews and test driven development (TDD), resulting in a 20% reduction in code defects and a 15% increase in code maintainability.",

            "⚡ Simplified document workflow by integrating electronic signatures into existing processes; reduced document processing time by 25% and enhanced overall efficiency by 35%, benefiting 50+ team members across departments.",

            "⚡ Implemented a scalable Selenium testing framework that streamlined the testing process, leading to the identification and resolution of critical bugs 40% faster than previous manual testing methods.",

            "⚡ Designed and executed automated testing frameworks that simplified back-end integration tests; reduced testing time by 50%, allowing for faster deployment cycles and boosted team efficiency in the software development life cycle.",
          ],
          color: "#000000",
        },
        {
          title: "Software Engineer - I",
          company: "Sureify Labs",
          company_url: "https://www.sureify.com/",
          logo_path: "sureify.jpg",
          duration: "August 2021 - October 2022",
          location: "Hyderabad, India",
          description: [
            "Streamlined data handling processes in SQL Server database testing, causing a 35% faster query response, handling up to 1,000 queries per day.",
            "Achieved 80% coverage in Unit testing and Functional testing, ensuring high-quality code and reducing bugs.",
            "Architected a secure Authentication Service module that integrated OIDC and SSO functionalities; enhanced system security,bringing about a 50% reduction in unauthorized access attempts within the first quarter post-launch.",
            "Executed system security with JWT token and AES encryption, leading to a 15% decrease in security incidents per quarter and providing role-based access control.",
            "Accomplished automation testing using Angular Testing Library and Cypress, resulting the reduction in QA time by 30%.",
            "Led the development of payment features and cross-browser compatibility leading to a 30% increase in user engagement.",
          ],
          color: "#000000",
        },
        {
          title: "Software Engineer Intern",
          company: "Sureify Labs",
          company_url: "https://www.sureify.com/",
          logo_path: "sureify.jpg",
          duration: "April 2021 - July 2021",
          location: "Hyderabad, India",
          description: [
            "Rationalized data mappings for a complex API integration project, resulting in a 25% reduction in data processing time; enhanced accuracy and reliability of customer interface interactions through systematic testing and validation.",
            "Configured debuggers for Dockerized microservices, reducing diagnostic time by 30% and increasing development efficiency.",
            "Optimized the Docker scripting process, reducing documentation generation time by 30 hours per month; refined workflows enabled easier updates and better accessibility of critical information for cross-functional teams.",
          ],
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Created an exciting portfolio platform on AWS, powered by dynamic project deployment through Docker Compose. Seamlessly scalable, it adapts to user engagement, ensuring optimal resource usage and limitless project hosting with simple storage expansion. Integrated AWS services like S3, SNS, Route53, and Nginx guarantee unparalleled performance, fortified by IAM and CloudWatch for top-notch security and monitoring.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I have a strong enthusiasm for creating scalable and easily maintainable applications using the latest technologies. Currently, I am actively seeking opportunities in the fields of Software Development and DevOps. If you are aware of any open positions, have inquiries, or simply want to connect and say hello, please don't hesitate to get in touch with me!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
