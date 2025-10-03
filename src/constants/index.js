import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = 'Software Engineer @Nike previously @Wayfair';
// `I am a passionate full stack developer with a knack for crafting robust and 
// scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies
//  like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. 
// My goal is to leverage my expertise to create innovative solutions that drive business growth and 
// deliver exceptional user experiences.`;

export const ABOUT_TEXT = 'I’m Aryan Singh, a software engineer who turns complex data flows into fast, reliable products. I’ve shipped scalable services and real-time analytics at Wayfair and Nike, building Kafka-driven pipelines and Python/Flask + Postgres backends that keep dashboards and decisions up to the minute. Highlights include cutting a Spring Boot refund flow from 8 hours to 1 hour, reducing a web app’s initial load from 8s to 2s through smart lazy-loading, and accelerating GPU-based time-series algorithms during my M.S. at UC Riverside. I care about clean architecture, clear metrics, and shipping solutions that make customers’ lives easier. When I’m not debugging, I’m documenting—so teams can move faster with confidence.';
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
    year: "January 2024 - Present",
    role: "Software Engineer",
    company: "Nike",
    description: `Made an article search system which improves user satisfaction by 23% and conversion rate by 5% on products that have a story associated with them.
Integrated BM25-based ranking algorithm with backend search on AWS Elastic Beanstalk, enabling efficient retrieval and ordering of articles, resulting in a 25% faster search response time and more relevant top-10 results.
Built a dynamic search bar interface using React that communicates with a backend article search service to deliver ranked, relevance-driven results, significantly improving user navigation and content discoverability.
Developed ConceptZero, a backend matching engine that translates natural language search queries into relevant Nike product results using custom rules and data-driven logic.
Implemented a JSON-based search restriction on the Nike website, successfully preventing users from querying three specific terms, enhancing content compliance and aligning with business policy.
I optimized a Spring Boot payment microservice, reducing refund processing time from 8 hrs to 1 hr by streamlining API endpoints and database queries, significantly enhancing customer satisfaction and operational efficiency.
Improved P99 latency 42% (330 → 190ms) by migrating the search microservice to Spring WebFlux, batching requests, and tuning JVM flags on AWS.
`,
    technologies: ["Express.js", "Postgresql", "MongoDB", "Kafka", "Jenkins", "Elastic Search", "Java", "Redis", "Kubernetes", "CI/CD", "AWS (S3, SQS, EC2, RDS, SNS)", "Azure"],
  },
  {
    year: "Aug 2021 - Aug 2022",
    role: "Full Stack Developer",
    company: "Wayfair",
    description: `My work optimized application performance by reducing initial load times from 8 seconds to 2 seconds through lazy loading, a technique that defers loading of non-critical components or resources until needed. This ensured faster rendering of core functionality and enhanced user experience during high-traffic scenarios.
I introduced custom annotations in the codebase to standardize function naming and parameter types, reducing runtime errors by 30%. This simplification streamlined cross-module integration, improved developer productivity by 20%, and ensured consistent functionality across services.
Developed a distributed, centralized, microservice website with reactjs frontend, managing multiple instances simultaneously with AWS integration, tokenization of outcomes for processing in large scale machine learning systems for extraction of advanced analytics.
Built a domain Model Relationship for E-commerce project using Hibernate ORM Framework. Applied all the spring Data JPA repository methods and query/finder methods that I learned from ongoing Sprint JIRA tasks. Written unit test cases for Spring Data JPA repository layer using JUnit and mockito.
Built a reliable distributed key-value storage system in Java. Implemented the Raft Consensus algorithm to elect leaders and replicate logs, achieving consensus in leader election and for a system consisting of five nodes. Deployed it on AWS using EC2.`,
    technologies: ["Express.js", "Postgresql", "MongoDB", "Kafka", "Jenkins", "Elastic Search", "Java", "Redis", "Kubernetes", "CI/CD", "AWS (S3, SQS, EC2, RDS, SNS)", "Azure"],
  },
  {
    year: "September 2023 - December 2024",
    role: "Gradaute Researcher",
    company: "University of California, Riverside",
    description: `Created a multi-threaded parallel system that processes catch-22 time-series features 50 times faster than serial execution time on identical machines.  Done as part of my research under prof. Philip Brisk`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "March 2024 - June 2024",
    role: "Teaching Assistant",
    company: "University of California, Riverside",
    description: `Helped 44 freshmen and sophomores to concepts such as Buoyancy, Resonance, Calorimetry. Graded 450 lab reports and guided them to improve on their weaknesses.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "April 2020 - June 2020",
    role: "Research Fellow",
    company: "Indian Institute of Technology, Bombay",
    description: `Fabricated explanatory 6 mathematical notes and 20 animations for helping the reader understand and visualize selected concepts regarding single-variable calculus.`,
    technologies: ["Python", "manim", "JavaScript", "Postman", "Model-View-Controller (MVC)"],
    //, , , , .
  }
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

