import Button from '../components/button';
import NavigationLink from '../components/navLink';
import Text from '../components/text';
import './tailwind.css';
import { For, type JSX } from 'solid-js';

const navigationLink = [
    {
        name: "01. À propos",
        value: "#about",
    },
    {
        name: "02. Projets",
        value: "#project",
    },
    {
        name: "03. Contact",
        value: "#contact"
    }
];

export default function Layout(props: { children?: JSX.Element }) {

    return (
        <div class='flex flex-col flex-1 bg-background'>
            <Header />
            {props.children}
        </div>
    )
}

function Header() {

    return (
        <nav class='fixed w-screen p-3 flex flex-row justify-end gap-10 items-center'>
            <For each={navigationLink}>
                {(items) => (
                    <NavigationLink name={items.name} value={items.value} />
                )
                }
            </For>
            <Button component='button'>Mon CV</Button>
        </nav>
    )
}