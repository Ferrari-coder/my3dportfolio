import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    sass,
    vue,
    git,
    figma,
    mui,
    starbucks,
    alphacore,
    nourrir,
    threejs,
    firebase,
    bootstrap,
    framerMotion,
    styledComponents,
    githubFetcher,
    ecom
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "ReactJs",
      icon: web,
    },
    {
      title: "VueJs",
      icon: mobile,
    },
    {
      title: "TypeScrpit",
      icon: backend,
    },
    {
      title: "TailwindCSS",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Sass",
      icon: sass,
    },
    {
      name: "Vue Js",
      icon: vue,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "mui",
      icon: mui,
    }, 
    // {
    //   name: "firebase",
    //   icon: firebase,
    // },
    // {
    //   name: "framerMotion",
    //   icon: framerMotion,
    // },{
    //   name: "bootstrap",
    //   icon: bootstrap,
    // },{
    //   name: "styled components",
    //   icon: styledComponents,
    // },
  ];
  
  const experiences = [
    {
      title: "Front-end Engineer",
      company_name: "MovieFi",
      icon: starbucks,
      iconBg: "#383E56",
      date: "0ct 2022 - Present",
      points: [
        "Streamlined the user experience by constructing a user-friendly interface using HTML, CSS, and ReactJS, enabling effortless uploading of short video clips for movie title identification; this led to a significant boost in user engagement, fostering a 50% increase in active participation and identification accuracy.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Front-end Engineer",
      company_name: "Alpha-core Labs",
      icon: alphacore,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Present",
      points: [
        "Collaborating closely with clients to understand their vision and translate it into user-friendly, visually appealing interfaces.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Maintained a high standard of code quality, fostering collaboration and knowledge sharing within the development team.",
        "Implemented performance optimization techniques, resulting in a 20% improvement in page load times, enhancing user retention and overall user experience.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Fantastic work. Fast and very efficient. Strong handle of concept and also very creative.",
      name: "Stanley Osuide",
      designation: "CEO",
      company: "IBT Awards",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      testimonial:
        "I've never met a front-end developer who truly cares about their clients' success like Rick does.",
      name: "Maxwell Gbenga",
      designation: "CEO",
      company: "Alpha-core Labs",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Feranmi is a top notch front-end developer. Client-first builds so immaculately structured you won't believe it! Highly recommended.",
      name: "Oluwatosin BMT",
      designation: "CEO",
      company: "MovieFi",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Drink Nourrir",
      description:
        "Drink Nourrir is an e-commerce website for food/drinks. It has a certified payment system for easy checkout, the website is user-friendly.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: nourrir,
      source_code_link: "https://github.com/",
    },
    {
      name: "FA Shoppy",
      description:
        "A high-performing clothing e-commerce website built utilizing the MERN stack; achieved a reduced cart abandonment rate by 25% through seamless user experience optimization.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "styled components",
          color: "pink-text-gradient",
        },
      ],
      image: ecom,
      source_code_link: "https://github.com/Ferrari-coder/Fashoppy",
    },
    {
      name: "GitHub Fetcher",
      description:
        "A VueJS application that uses GitHub API to fetch user data and repositories.",
      tags: [
        {
          name: "vuejs",
          color: "blue-text-gradient",
        },
        {
          name: "axios",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: githubFetcher,
      source_code_link: "https://github.com/Ferrari-coder/Altschool-third-semester-project",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };