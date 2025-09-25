import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = 'A subtitle';
// `I am a passionate full stack developer with a knack for crafting robust and 
// scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies
//  like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. 
// My goal is to leverage my expertise to create innovative solutions that drive business growth and 
// deliver exceptional user experiences.`;

export const ABOUT_TEXT = 'Something about you Mau';
//`I am a dedicated and versatile full stack developer with a passion 
// for creating efficient and user-friendly web applications. With 5 years of professional experience,
//  I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, 
//  and MongoDB. My journey in web development began with a deep curiosity for how things work, and it 
//  has evolved into a career where I continuously strive to learn and adapt to new challenges. 
//  I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality 
//  solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing 
//  to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "September 2023 - Present",
    role: "Full Stack Developer",
    company: "Wayfair",
    description: `Built a multi-tenant ticketing system employing a microservice architecture yielding a savings of 1000 agent licenses and reducing
annual costs by $200k. Optimized performance of relational database by introducing read replicas and database indexes, resulting in a 95% reduction in query
response time and enhanced system performance. Led the development of the instant wallet refund feature with Node.js, ensuring asynchronous handling and managing concurrent
data access, reducing refund processing time from 8 days to 1 hour. Collaborated cross-functionally to implement instant payouts through Stripe integration in a PCI compliant payment microservice,
ensuring access to funds within 30 minutes of a charge. Executed a stability initiative by configuring liveness and readiness probes to enhance health checks and by integrating Application
Performance Monitoring and Grafana for better debugging, and monitoring across 20 Java microservices.`,
    technologies: ["Express.js", "Postgresql", "MongoDB", "Kafka", "Jenkins", "Elastic Search", "Java", "Redis", "Kubernetes", "CI/CD", "AWS (S3, SQS, EC2, RDS, SNS)", "Azure"],
  },
  {
    year: "September 2023 - Present",
    role: "Gradaute Researcher",
    company: "University of California, Riverside",
    description: ``,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "March 2024 - June 2024",
    role: "Teaching Assistant",
    company: "University of California, Riverside",
    description: `Enlightened 44 freshmen and sophomores to concepts such as Buoyancy, Resonance, Calorimetry. Graded 450 lab reports and guided them to improve on their weaknesses.`,
    //technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "Feb 2022- August 2022",
    role: "Software Engineer",
    company: "Deloitte",
    description: `Spearheaded the integration of CRM into the banks existing loan processing system, eliminating manual data entry and reducing processing time by up to 50%. Robust testing automation using Git for version control and Kubernetes for deployment, improving test coverage and efficiency by 30% and 10%, respectively.`,
    technologies: ["HTML", "CSS", "DOM", "Kubernetes", "mySQL", "SpringBoot", "Model-View-Controller (MVC)", "Postman"],
    //, , , , , , , .
  },
  {
    year: "April 2020 - June 2020",
    role: "Research Fellow",
    company: "Indian Institute of Technology, Bombay",
    description: `Fabricated explanatory 6 mathematical notes and 20 animations for helping the reader understand and visualize selected concepts regarding single-variable calculus.`,
    technologies: ["Python", "manim", "JavaScript", "Postman", "Model-View-Controller (MVC)"],
    //, , , , .
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  //address: "1020 West Linden Street, 69, Riverside, CA 92507",
  phoneNo: "+1-951-462-3152",
  email: "aryanam2000@gmail.com",
};
// import project1 from "../assets/projects/project-1.jpg";
// import project2 from "../assets/projects/project-2.jpg";
// import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.jpg";

// export const HERO_CONTENT = 'A subtitle';
// // `I am a passionate full stack developer with a knack for crafting robust and 
// // scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies
// //  like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. 
// // My goal is to leverage my expertise to create innovative solutions that drive business growth and 
// // deliver exceptional user experiences.`;

// export const ABOUT_TEXT = 'Something about you Mau';
// //`I am a dedicated and versatile full stack developer with a passion 
// // for creating efficient and user-friendly web applications. With 5 years of professional experience,
// //  I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, 
// //  and MongoDB. My journey in web development began with a deep curiosity for how things work, and it 
// //  has evolved into a career where I continuously strive to learn and adapt to new challenges. 
// //  I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality 
// //  solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing 
// //  to open-source projects.`;

// export const EXPERIENCES = [
//   {
//     year: "September 2023 - Present",
//     role: "Full Stack Developer",
//     company: "Wayfair",
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
//   },
//   {
//     year: "September 2023 - Present",
//     role: "Full Stack Developer",
//     company: "Wayfair",
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
//   },
//   {
//     year: "2021 - 2022",
//     role: "Teaching Assistant",
//     company: "University of California, Riverside",
//     description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
//     technologies: ["Python", "Svelte", "Three.js", "Postgres"],
//   },
//   {
//     year: "Feb 2022- August 2022",
//     role: "Software Engineer",
//     company: "Deloitte",
//     description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
//     technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
//   },
//   {
//     year: "2020 - 2021",
//     role: "Software Engineer",
//     company: "Paypal",
//     description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
//     technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
//   },
// ];

// export const PROJECTS = [
//   {
//     title: "E-Commerce Website",
//     image: project1,
//     description:
//       "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
//     technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
//   },
//   {
//     title: "Task Management App",
//     image: project2,
//     description:
//       "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
//     technologies: ["HTML", "CSS", "Angular", "Firebase"],
//   },
//   {
//     title: "Portfolio Website",
//     image: project3,
//     description:
//       "A personal portfolio website showcasing projects, skills, and contact information.",
//     technologies: ["HTML", "CSS", "React", "Bootstrap"],
//   },
//   {
//     title: "Blogging Platform",
//     image: project4,
//     description:
//       "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
//     technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
//   },
// ];

// export const CONTACT = {
//   address: "Paseo in Tempe, AZ",
//   phoneNo: "+1234567890 ",
//   email: "mevaja17@gmail.com",
// };

