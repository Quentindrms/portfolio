import { splitProps, type JSX } from "solid-js";
import { Dynamic } from "solid-js/web";
import {clsx} from "clsx";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type BoldValue = "light" | "regular" | "bold" | "extra-bold" | "black";

export interface HeadingProps extends JSX.HTMLAttributes<HTMLHeadingElement> {
    component?: `h${HeadingLevel}`
    children: JSX.Element,
    bold?: BoldValue;
    level?: HeadingLevel,
}

const globalClasses = "text-title-primary text-primary-text"

const levelclasses: Record<HeadingLevel, string> = {
    1: 'text-6xl',
    2: 'text-5xl',
    3: 'text-4xl',
    4: 'text-3xl',
    5: 'text-2xl',
    6: 'text-xl'
}

const boldCLasses: Record<BoldValue, string> = {
    light : "font-light",
    regular : "font-regular",
    bold: "font-bold",
    "extra-bold": "font-extrabold",
    black: "font-black",
}

function getLevelClasses(props: HeadingLevel|undefined){
    return levelclasses[props ?? 1];
}

function getBoldCLasses(props: BoldValue|undefined){
    return boldCLasses[props ?? "regular"];
}

export default function Heading(props:HeadingProps) {

    const [local, rest] = splitProps(props, ["level", "component", "bold"]);
    const Component = local.component || `h${local.level ?? 1}`; 

    return (
        <>
        <Dynamic {...rest} component={Component} class={clsx([globalClasses, getLevelClasses(props.level), getBoldCLasses(props.bold)])}></Dynamic>
        </>
    )
}