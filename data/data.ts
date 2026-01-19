
import { ContactType, ProjectType } from "../types/Types"

export const hardSkills = ["Typescript", "React", "SolidJS", "PostgreSQL", "Docker"];
export const softSkills = ["Adaptabilité", "Rigueur", "Curiosité", "Autonomie", "Esprit d'analyse et de synthèse"];

import dinoPark from "../assets/images/screenshots/dinopark.png";
import fluxFlims from "../assets/images/screenshots/flux-films.png";
import spaceInvader from "../assets/images/screenshots/space-invader.png"
import githubLogo from "../assets/images/illustrations/github.svg"
import linkedinLogo from "../assets/images/illustrations/linkedin.svg"

export const project: ProjectType[] = [
    {
        nom: "Space Invaders",
        description: "Un ramake du celebre jeu Space Invaders, réalisé durant ma formation",
        technologies: ["Typescript"],
        github: "https://github.com/Quentindrms/space-invaders",
        image: spaceInvader
    },
    {
        nom: "Dino Park",
        description: "Un parc à thème dinosaures, il est possible de gérer le parc et de passer commande.",
        technologies: ["Typescript", "PostgreSQL"],
        github: "https://github.com/Quentindrms/Dinopark",
        image: dinoPark
    },
    {
        nom: "Flux Films",
        description: "Une plateforme de streaming avec les données API de The Movie Database.",
        technologies: ["Typescript", "React"],
        github: "https://github.com/Quentindrms/FluxFilms",
        image: fluxFlims
    }
];

export const contacts: ContactType[] = [
    {
        name: "Github",
        alt: "Image cliquable menant à mon profil Github",
        image: githubLogo,
        lien: 'https://github.com/Quentindrms'
    },
        {
        name: "Linkedin",
        alt: "Image cliquable menant à mon profil Linkedin",
        image: linkedinLogo,
        lien: 'https://www.linkedin.com/in/quentin-derimais/',
    }
]