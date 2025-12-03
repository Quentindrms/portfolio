import { For, type JSX } from "solid-js";
import Heading from "./heading";
import Text from "./text";
import Label from "./label";
import Link from "./link";

export type ProjectType = {
    nom: string,
    description: string,
    technologies: string[],
    github: string,
}

interface ProjectProps extends JSX.HTMLAttributes<HTMLDivElement> {
    project: ProjectType[],
}




export default function Project(props: ProjectProps) {

    return (
        <>
            <div>
                <For each={props.project}>
                    {(project) => (
                        <div class='flex flex-row border-1 border-primary-border p-4 w-4xl items-center rounded-xl'>
                            <div class="flex flex-col gap-5">
                                <Heading component="h4" level={4}>{project.nom}</Heading>
                                <Text level={3}>{project.description}</Text>
                                <div class='flex flex-row gap-3'>
                                    <Text component="p" level={3}>Technologies :</Text>
                                    <For each={project.technologies}>
                                        {(item, index) => (
                                            <Label>{item}</Label>
                                        )}
                                    </For>
                                </div >
                                <Link link="#">Github</Link>
                            </div>
                            <div class='p-4'>
                                <img src="https://placehold.co/300x300"></img>
                            </div>
                        </div>
                    )}
                </For>
            </div>
        </>
    )
}