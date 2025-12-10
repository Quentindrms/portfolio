import { For, type JSX } from "solid-js";
import Heading from "./heading";
import Text from "./text";
import Label from "./label";
import Link from "./link";
import clsx from "clsx";

import type { ProjectType } from "../types/Types";

interface ProjectProps extends JSX.HTMLAttributes<HTMLDivElement> {
    project: ProjectType[],
}


export default function Project(props: ProjectProps) {

    return (
        <>
            <div class="flex flex-col items-center gap-10 p-5">
                <For each={props.project}>
                    {(project, index) => (
                        <div class={clsx(['flex', 'border-primary-border/10','border','md:p-4', 'w-s md:w-4xl', 'items-center', 'rounded-xl', index()%2 ? ' flex-col md:flex-row' : 'flex-col md:flex-row-reverse', 'shadow-xl', 'transition', 'hover:scale-102'])}>
                           
                            <div class={clsx(["flex", "flex-col", "gap-5", "justify-center"])}>
                                <Heading component="h4" level={4}>{project.nom}</Heading>
                                <Text class="w-xs md:w-fit" level={3}>{project.description}</Text>

                                <div class='flex flex-col md:flex-row gap-3'>
                                    <Text component="p" level={3}>Technologies :</Text>
                                    <For each={project.technologies}>
                                        {(item, index) => (
                                            <Label>{item}</Label>
                                        )}
                                    </For>
                                </div >
                                <Link link={project.github}>Github</Link>
                            </div>
                            <div class='p-4'>
                                <img src={project.image} class="max-w-[265px] md:max-w-[330px] rounded-xl border-2 border-primary-border/10 shadow-2xl"></img>
                            </div>
                        </div>
                    )}
                </For>
            </div>
        </>
    )
}