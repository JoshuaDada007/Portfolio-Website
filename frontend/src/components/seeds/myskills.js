import {TiHtml5} from "react-icons/ti";
import {FaCss3Alt, FaJava, FaReact, FaGithub, FaNode} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io5";
import {SiSpringboot, SiMysql, SiHibernate, SiGradle} from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { SiAuth0 } from "react-icons/si";
import { RiAiGenerate2 } from "react-icons/ri";






export const skillBoxes = [
    {
        name: "Languages",
        about: "Proficient in HTML, CSS, and JavaScript, enabling the creation of dynamic and responsive web interfaces. Skilled in Java for backend development and MySQL for managing relational databases effectively.",
        software: [
            <TiHtml5 size={23} color="#e34c26" />,
            <FaCss3Alt size={23} color="#2965f1" />,
            <IoLogoJavascript size={23} color="#f7df1e" />,
            <SiMysql size={23} color="#00758f" />,
            <FaJava size={23} color="#007396" />
        ]
    },
    {
        name: "Frameworks",
        about: "Proficient in React for creating dynamic and interactive user interfaces, Node.js for server-side logic, Spring Boot for developing RESTful APIs, and Hibernate for efficient database interaction using ORM.",
        software: [
            <FaReact size={23} color="#61dafb" />,
            <FaNode size={23} color="#339933" />,
            <SiSpringboot size={23} color="#6db33f" />,
            <SiHibernate size={23} color="#59666c" />
        ]
    },
    {
        name: "Dev Tools",
        about: "Proficient in GitHub for version control and team collaboration, Gradle for build and dependency automation, Docker for containerized application environments, Google Cloud for scalable cloud solutions, Auth0 for user authentication and authorization, and Generative AI tools to enhance productivity and automate workflows.",
        software: [
            <FaGithub size={23} color="#181717" />,
            <SiGradle size={23} color="#02303a" />,
            <FaDocker size={23} color=" #2496ED " />,
            <SiGooglecloud size={23} color="#4285F4" />,
            <SiAuth0 size={23} color="black" />,
            <RiAiGenerate2 size={23} color="" />

        ]
    }
];
