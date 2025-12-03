import clsx from "clsx";
import { splitProps, type JSX } from "solid-js";
import { Dynamic } from "solid-js/web";
import Text from "./text";

type ComponentType = "button";

interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
    children: JSX.Element,
    component: ComponentType,
}

const globalButtonClasses = "cursor-pointer border border-1 border-primary-border text-primary-text p-4 -skew-x-10 hover:border-secondary-border hover:text-secondary-text";


export default function Button(props:ButtonProps) {

    const [local, rest] = splitProps(props, ["component"]);
    const component = local.component;

    return (
        <Dynamic component={component} {...rest} class={clsx([globalButtonClasses])}>
            <p class='text-3xl font-title-primary font-bold'>{rest.children}</p>
        </Dynamic>
    )
}