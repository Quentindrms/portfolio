import type {JSX} from "solid-js"
import clsx from "clsx";

interface LinkProps extends JSX.HTMLAttributes<HTMLAnchorElement>{
    children: JSX.Element,
    link: string,
    level?: HeadingLevel,
    bold?: BoldValue
}

type HeadingLevel = 1 | 2 | 3;
type BoldValue = "light" | "regular" | "bold" | "extra-bold" | "black";

const globalClasses = "text-primary-text font-text-primary w-fit hover:text-blue-600";

const levelclasses: Record<HeadingLevel, string> = {
    1: "text-5xl",
    2: "text-4xl",
    3: "text-3xl",
}

const boldCLasses: Record<BoldValue, string> = {
    light : "font-light",
    regular : "font-regular",
    bold: "font-bold",
    "extra-bold": "font-extrabold",
    black: "font-black",
}

function getLevelClasses(props:HeadingLevel|undefined){
    return levelclasses[props ?? 3];
}

function getBoldClasses(props:BoldValue|undefined){
    return boldCLasses[props ?? "regular"];
}

export default function Link(props:LinkProps){

    return(<a href={props.link} class={clsx([getLevelClasses(props.level), getBoldClasses(props.bold), globalClasses])}>{props.children}</a>)
}