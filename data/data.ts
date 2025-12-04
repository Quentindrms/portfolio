
import {ProjectType} from "../types/Types"

export const hardSkills = ["Typescript", "React", "SolidJS", "PostgreSQL", "Docker"];
export const softSkills = ["Adaptabilité", "Rigueur", "Curiosité", "Autonomie", "Esprit d'analyse et de synthèse"];

export const project: ProjectType[] = [
    {
        nom: "Space Invaders",
        description: "Un ramake du celebre jeu Space Invaders, réalisé durant ma formation",
        technologies: ["Typescript"],
        github: "#",
    },
    {
        nom: "Dino Park",
        description: "Un parc à thème dinosaures, il est possible de gérer le parc et de passer commande.",
        technologies: ["Typescript", "PostgreSQL"],
        github: "#",
    },
    {
        nom: "Flux Films",
        description: "Une plateforme de streaming avec les données API de The Movie Database.",
        technologies: ["Typescript", "React"],
        github: "#",
    }
]