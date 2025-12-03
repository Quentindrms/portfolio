import type { JSX } from "solid-js"

interface LabelProps {
    children: JSX.Element;
}

export default function Label(props:LabelProps) {

    return (
        <div>
            <p class='w-fit text-xl font-text-primary text-primary-text bg-blue-600 p-2 rounded-xl'>{props.children}</p>
        </div>
    )
}