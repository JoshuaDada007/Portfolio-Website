import beer from "../../assets/images/beerAPI.jpeg"
import cooking from "../../assets/images/cooking.jpeg"
import assembly from "../../assets/images/assembly-endgame.jpeg"

export const allProjects = [
    {
        name: "Brewery Management Api",
        about: "A RESTful API designed to manage breweries, beers, and their associated countries. This project demonstrates efficient CRUD operations, robust data persistence, and scalable backend design using Java and Spring Boot.",
        tech: ["Java", "SpringBoot", "Hibernate", "SQL", "PostMan"],
        img: beer,
        display: true,
        github: "https://github.com/joshuadada007/beerz",
    },
    {
        name: "Assembly-EndGame",
        about: "A React-based word guessing game focused on programming concepts. Players must guess programming-related keywords while avoiding too many wrong guesses. Each incorrect guess eliminates a programming language from the display.",
        tech: ["HTML", "CSS", "JavaScript", "ReactJS"],
        img: assembly,
        display: false,
        github: "https://github.com/JoshuaDada007/Assembly-Endgame"
    },
    {
        name: `Recipe App`,
        about: "An innovative app that uses AI to generate personalized recipes based on the ingredients you select. Simply input what you have on hand, and the app creates a unique, step-by-step recipe tailored to your ingredients, preferences, and dietary needs, making cooking creative and effortless.",
        tech: ["HTML", "CSS", "ReactJS", "GenAI"],
        img: cooking,
        display: false,
        github: "https://github.com/JoshuaDada007"
    }
];