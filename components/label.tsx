import type { JSX } from "solid-js"

interface LabelProps {
    children: JSX.Element;
}

export default function Label(props:LabelProps) {

    return (
        <div>
            <p class='w-fit text-xl font-text-primary text-primary-text border border-primary-border/20 bg-secondary p-2 rounded-xl shadow-2xl shadow-black/20 transition hover:scale-105 cursor-pointer'>{props.children}</p>
        </div>
    )
}