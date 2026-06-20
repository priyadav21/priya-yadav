export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Experiences", link: "#experiences" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Working on it",
    des: "My projects will be live soon...",
    img: "/exp4.svg",
    iconLists: ["/re.svg","/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/priyadav21",
  },
  // {
  //   id: 2,
  //   title: "Sample Project 2",
  //   des: "Description of Project 2",
  //   img: "/exp4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg"],
  //   link: "https://github.com/priyadav21",
  // },
  // {
  //   id: 3,
  //   title: "Sample Project 3",
  //   des: "Description of Project 3",
  //   img: "/exp4.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg",],
  //   link: "https://github.com/priyadav21",
  // },
];

export const testimonials = [
  {
    quote: "Highly recommend Priya as a standout front-end developer. She took the lead on a Hector's chatbot development project with unmatched enthusiasm and skill, impressing us all. She has good technical skills and a positive attitude, making her a joy to work with. Her professionalism and ability to tackle challenges impressed us. Any team would be lucky to have Priya —she's not just talented; she's a true team player and a future star in tech.",
    name: "Vipul Joshi",
    title: " Founder @ Aura-AI | Ex CTO @ Hector (NDM Marketing)",
  },
  {
    quote: "I highly recommend Priya for her outstanding skills as a frontend developer. Her expertise in crafting responsive and visually appealing user interfaces greatly contributed to the success of projects. Diligent, collaborative, and always eager to tackle challenges, Priya would be a valuable asset to any team.",
    name: "Shubham  Bhardwaj",
    title: "Assistant Manager @ KPMG  | Ex Cloud Engineer @ Hector (NDM Marketing)",
  },
  {
    quote:`Having worked with Priya in the same team for over a year, I'd like to highlight the below. Priya's proven expertise spans mainly UI development, low code solutions, and Java. She's very active in her work, consistently exceeds expectations and sets the bar high. She also has a strong sense of ownership towards her work . She's a quick learner and can adapt to any new tools and technologies and capable of tackling any challenge that comes in her way. She has been a great mentor to the less experienced and also an excellent teammate to her peers. Priya's skills and her positive nature make her a valuable asset to any team she joins and I'd give her my highest recommendation.`,
    name: "Rahul Penumala",
    title: "Software Developer @ Amdocs",
  },
  {
    quote: `Priya was my junior, worked in a same team. She is very much motivated towards work with good communication , and was a great team player. She was very particular to meet the deadlines. She had a strong hold on data structure and algorithms, a creative thinker and always comes up with better solution. 
    Keep up the good work priya. `,
    name: "Saumyadipta Sarkar",
    title: "Lead Engineer @ Amex | Ex Software Developer Experienced @ Amdocs",
  },
];

export const companies = [
  {
    id: 1,
    name: "Amdocs",
    img: "/amdocs.png",
    nameImg: "/amdocsName.png",
  },
  {
    id: 2,
    name: "Hector",
    img: "/hector.svg",
    nameImg: "/hectorName.png",
  },
  {
    id: 3,
    name: "Octro",
    nameImg: "/octro.png",
  }
];

export const workExperience = [
  {
    id: 1,
    title: "Software Developer Experienced",
    desc: `Modernized legacy retail and e-commerce applications by migrating them to React, implementing order management features, and optimizing frontend performance. Contributed to GraphQL-based data workflows, automation tooling, and team mentorship.`,
    className: "md:col-span-2",
    thumbnail: "/amdocs.png",
  },
  {
    id: 2,
    title: "Frontend Developer",
    desc: `Built and enhanced an AI-powered chatbot platform, developing responsive user interfaces, reusable components, and state management solutions. Worked closely with cross-functional teams to deliver a production-ready product.`,
    className: "md:col-span-2",
    thumbnail: "/hector.svg",
  },
  {
    id: 3,
    title: "Member Of Technical Staff",
    desc: `Developed and maintained React-based BackOffice applications for game configuration, rewards management, and player segmentation. Built real-time features using WebSockets, integrated REST APIs, and collaborated with backend and QA teams to deliver scalable, high-performance solutions.`,
    className: "md:col-span-2", 
    thumbnail: "/octro.png",
  },
  {
    id: 4,
    title: "Independent Frontend Developer | Personal Projects",
    desc: `Designed and developed full-stack web applications and frontend experiences from concept to deployment, focusing on performance, scalability, and user experience. Built reusable UI components, integrated third-party APIs, implemented authentication workflows, and explored modern web technologies while continuously refining software architecture and development best practices.`,
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];