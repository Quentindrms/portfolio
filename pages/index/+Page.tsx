import Button from "../../components/button";
import Heading from "../../components/heading";
import NavigationLink from "../../components/navLink";
import Project from "../../components/project";
import Text from "../../components/text";

import type { ProjectType } from "../../components/project";
import Label from "../../components/label";

export default function Home() {

    const project:ProjectType[] = [
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
            <div class='flex flex-col'>
                <Text class="align-center text-align-center">Lorem ipsum</Text>
            </div>
        </>
    )
}