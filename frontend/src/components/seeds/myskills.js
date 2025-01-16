import {TiHtml5} from "react-icons/ti";
import {FaCss3Alt, FaJava, FaReact, FaGithub, FaGitlab, FaNode} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io5";
import {SiSpringboot, SiMysql, SiHibernate, SiDigitalocean, SiApachemaven, SiGradle} from "react-icons/si";



export const skillBoxes = [
    {
        name: "Languages",
        about: "Proficient in HTML, CSS, and JavaScript for creating dynamic and responsive user interfaces. Experienced in Java for backend development and MySQL for managing relational databases.",
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
        about: "Skilled in React for building interactive UIs, Node.js for server-side logic, Spring Boot for RESTful APIs, and Hibernate for ORM. Familiar with Apache Maven and Gradle for efficient build automation.",
        software: [
            <FaReact size={23} color="#61dafb" />,
            <FaNode size={23} color="#339933" />,
            <SiSpringboot size={23} color="#6db33f" />,
            <SiHibernate size={23} color="#59666c" />
        ]
    },
    {
        name: "Dev Tools",
        about: "Experienced in GitHub and GitLab for version control, TestNG for automated testing, DigitalOcean for cloud deployments, and SonarCloud for code quality monitoring.",
        software: [
            <FaGithub size={23} color="#181717" />,
            <FaGitlab size={23} color="#fc6d26" />,
            <SiDigitalocean size={23} color="#008bcf" />,
            <SiApachemaven size={23} color="#c71a36" />,
            <SiGradle size={23} color="#02303a" />
        ]
    }
];
