
import {ProjectType} from "../types/Types"

export const hardSkills = ["Typescript", "React", "SolidJS", "PostgreSQL", "Docker"];
export const softSkills = ["Adaptabilité", "Rigueur", "Curiosité", "Autonomie", "Esprit d'analyse et de synthèse"];

export const project: ProjectType[] = [
    {
        nom: "Space Invaders",
        description: "Un ramake du celebre jeu Space Invaders, réalisé durant ma formation",
        technologies: ["Typescript"],
        github: "#",
        image: "../assets/images/screenshots/space-invader.png"
    },
    {
        nom: "Dino Park",
        description: "Un parc à thème dinosaures, il est possible de gérer le parc et de passer commande.",
        technologies: ["Typescript", "PostgreSQL"],
        github: "#",
        image: "../assets/images/screenshots/dinopark.png"
    },
    {
        nom: "Flux Films",
        description: "Une plateforme de streaming avec les données API de The Movie Database.",
        technologies: ["Typescript", "React"],
        github: "#",
        image: "../assets/images/screenshots/flux-films.png"
    }
]