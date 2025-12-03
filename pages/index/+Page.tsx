import Button from "../../components/button";
import Heading from "../../components/heading";
import NavigationLink from "../../components/navLink";
import Project from "../../components/project";
import Text from "../../components/text";

import type { ProjectType } from "../../components/project";
import Label from "../../components/label";

export default function Home() {

    const project: ProjectType[] = [
        {
            nom: "Space Invaders",
            description: "Un petit jeu reprenant les principes et le design du celèbre jeu space invaders",
            technologies: ["typescript", "test", "test"],
            github: "#",
        },
        {
            nom: "Space Invaders",
            description: "Un petit jeu reprenant les principes et le design du celèbre jeu space invaders",
            technologies: ["typescript", "test", "test"],
            github: "#",
        },
        {
            nom: "Space Invaders",
            description: "Un petit jeu reprenant les principes et le design du celèbre jeu space invaders",
            technologies: ["typescript", "test", "test"],
            github: "#",
        }
    ]

    return (
        <>
            <div class='flex flex-col h-screen justify-center pt-24'>
                <Text class="align-center text-center">
                    Bonjour. <br />
                    Je suis Quentin Derimais. <br />
                    Développeur fullstack junior. <br />
                </Text>
            </div>
            <div class='flex flex-col h-screen pt-24' id="about">

                <Heading level={2} component="h2">01. À propos</Heading>
            </div>
            <div class='flex flex-col pt-24'>

                <Heading level={2} component="h2" id="project">02. Projets</Heading>
                <Project project={project}/>
            </div>
            <div class='flex flex-col h-screen pt-24'>

                <Heading level={2} component="h2" id="contact">03. Me contacter</Heading>
            </div>
        </>
    )
}