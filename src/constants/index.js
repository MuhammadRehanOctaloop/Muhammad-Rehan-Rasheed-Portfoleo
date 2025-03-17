import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
// import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `Passionate MERN Stack Developer with expertise in MongoDB, Express.js, React, Vue, Next.js, Node.js, and Blockchain, specializing in scalable web applications, UI/UX design, backend architecture, API integration, and database optimization. Proficient in state management (Redux, Zustand), authentication (JWT, OAuth), and real-time data streaming (WebSockets). Continuously exploring new technologies, I thrive in fast-paced, collaborative environments and am eager to contribute technical expertise and innovation to a forward-thinking team.`;

export const ABOUT_TEXT = `

I am a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js) with expertise in Vue.js, Next.js, and Blockchain development. My focus is on building scalable, high-performance web applications with seamless user experiences, optimized backend architecture, and secure data management. With a strong grasp of UI/UX design, API integration, and database optimization, I develop efficient, user-friendly solutions that align with modern industry standards.

On the frontend, I craft interactive, responsive interfaces using React, Next.js, and Vue.js, ensuring smooth user experiences with state management tools like Redux and Zustand. On the backend, I specialize in RESTful API development, microservices, authentication systems (JWT, OAuth), and real-time data streaming (WebSockets), enabling dynamic and secure applications. Additionally, I am experienced in blockchain technology, integrating decentralized applications (dApps), smart contracts, and peer-to-peer networks to enhance transparency and security.

Driven by problem-solving and innovation, I thrive in fast-paced, collaborative environments, continuously exploring new technologies to stay ahead in the evolving tech landscape. Whether it’s building scalable platforms, optimizing performance, or enhancing security, I am eager to contribute my technical expertise and creativity to a forward-thinking team, delivering cutting-edge digital solutions.

`;

export const EXPERIENCES = [
  {
    year: "01/2025 - 03/2025",
    role: "Full Stack Developer",
    company: "Octaloop Technologies, Lahore (Onsite)",
    description:
      "Developed a responsive NFT marketplace frontend, ensuring seamless user experience across all devices. Built a real-time chat application using WebSockets for efficient and interactive communication. Contributed to the Decentralized VPN (DVPN) application by implementing peer-to-peer networking with libp2p. Optimized UI/UX and performance, enhancing scalability and user engagement.",
    technologies: [
      "React.js",
      "Next.js",
      "WebSockets",
      "libp2p",
      "MongoDB",
      "Node.js",
    ],
  },
  {
    year: "10/2024 - 12/2024",
    role: "Full Stack Developer (Internship)",
    company: "CodeQuest, Lahore (3 months)",
    description: `As an intern, I have developed several websites to enhance my skills and build a strong portfolio. These projects include a website showcasing my expectations and goals for the internship, an interactive quiz application, a site demonstrating creative transitions and animations, and a personal portfolio website. Each project reflects my dedication to experimenting with and mastering various technologies, including front-end frameworks, responsive design techniques, and animation libraries. These hands-on experiences have allowed me to expand my technical expertise and demonstrate my ability to deliver functional and visually appealing web applications.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "NFT Marketplace Aggregator",
    image: project1,
    description:
      "My project focuses on the development of an NFT Marketplace Aggregator Web Application. In an era of unprecedented growth in the NFT industry, our project aims to address the evolving needs of NFT collectors and traders by providing a comprehensive, user-friendly platform for trading NFTs.",
    technologies: ["HTML", "CSS", "Vue.js", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "NFT Marketplace Frontend",
    image: project2,
    description:
      "A fully responsive NFT marketplace built with Next.js, providing a seamless user experience across all devices. The platform allows users to explore, buy, and sell NFTs efficiently. Implemented advanced filtering and search functionalities for easy navigation through collections and assets. Integrated real-time data updates using WebSockets to enhance interactivity. Optimized UI/UX for smooth performance and accessibility, ensuring a visually appealing and engaging marketplace. The frontend is designed with a modular architecture, ensuring scalability and maintainability.",
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "WebSockets",
      "MongoDB",
    ],
    vercelLink: "https://nft-marketplace-roan-seven.vercel.app/",
  },
  {
    title: "Real-Time WebSocket Chat Application",
    image: project3,
    description:
      "A real-time chat application using WebSockets for instant messaging. The project integrates smooth animations and transitions to enhance user experience while ensuring efficient real-time communication.",
    technologies: [
      "React.js",
      "Node.js",
      "WebSockets",
      "CSS Animations",
      "Material UI",
    ],
    vercelLink: "https://github.com/MuhammadRehanOctaloop/RealtimeChat",
  },
  {
    title: "Creative Transitions Showcase Website",
    image: project4,
    description:
      "This project is a showcase of modern web transitions and animations, providing a visually engaging user experience. The website serves as a demonstration of various transition effects, animations, and layouts.",
    technologies: ["HTML", "CSS", "React.js", "CSS Animations", "Material UI"],
    vercelLink: "https://github.com/MuhammadRehanRasheed/animation-task-vercel",
  },
];

export const CONTACT = {
  address: "Lahore, Punjab, Pakistan",
  phoneNo: "0313-4821179",
  email: "chrehan101@gmail.com",
};
