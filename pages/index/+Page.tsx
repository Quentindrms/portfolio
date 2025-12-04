import Heading from "../../components/heading";
import Project from "../../components/project";
import Text from "../../components/text";
import TypeWriter from "../../components/typeWriter";
import { List, ListItem } from "../../components/list";

import { hardSkills, softSkills, project, contacts } from "../../data/data";
import { For } from "solid-js";
import ContactImages from "../../components/contactImages";

export default function Home() {

    return (
        <>
            <div class='flex flex-col h-screen justify-center pt-24'>
                <Text class="align-center text-center">
                    Bonjour. <br />
                    Je suis Quentin Derimais. <br />
                    Développeur fullstack. <br />
                </Text>
                <TypeWriter />
            </div>
            <div class='flex flex-col h-screen' id="about">
                <Heading level={2} component="h2" class="pl-10">01. À propos</Heading>

                <Text level={1} class='self-center text-center w-5xl pt-24'>Je m’appelle Quentin. Je suis passionné par l’informatique et le développement depuis l’âge de dix ans.
                    Issu d’une formation en droit, j’ai rapidement décidé de m’orienter dans le développement web.</Text>

                <div id="blockSkills" class='p-10 flex flex-row justify-between items-center'>
                    <div id="skills">
                        <Heading level={3} component="h3">Compétences techniques</Heading>
                        <List class="pt-4">
                            <For each={hardSkills}>
                                {(skill) => (
                                    <ListItem class='pt-4'>{skill}</ListItem>
                                )}
                            </For>
                        </List>
                    </div>
                    <div class='h-80 w-2 bg-primary-border rounded-2xl'></div>
                    <div id="softSkills">
                        <Heading level={3} component="h3">Compétences interpersonnelles</Heading>
                        <List class="pt-4">
                            <For each={softSkills}>
                                {(skill) => (
                                    <ListItem class="pt-4">{skill}</ListItem>
                                )}
                            </For>
                        </List>
                    </div>
                </div>
            </div>
            <div class='flex flex-col pt-24'>

                <Heading level={2} component="h2" id="project" class="pl-10">02. Projets</Heading>
                <Project project={project} />
            </div>
            <div class='flex flex-col h-screen pt-24'>
                <Heading level={2} component="h2" id="contact" class="pl-10">03. Me contacter</Heading>
                <div class='flex justify-center'>
                    <Text class='text-center w-5xl pt-15 pb-15'>Vous pouvez me contacter sur les réseaux listés ci-dessous. Je vous répondrais rapidement</Text>
                </div>
                <div class="flex flex-row justify-center gap-20 p-10">
                    <For each={contacts}>
                        {(item) => (
                            <ContactImages data={item} />
                        )}
                    </For>
                </div>
            </div>
        </>
    )
}