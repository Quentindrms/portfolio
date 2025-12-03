import clsx from "clsx";
import {splitProps, type JSX} from "solid-js"
import { Dynamic } from "solid-js/web";

type HeadingLevel = 1 | 2 | 3;
type BoldValue = "light" | "regular" | "bold" | "extra-bold" | "black";

type TextProps = JSX.HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> & {
    children: JSX.Element,
    level?: HeadingLevel,
    component?: "p" | "span", 
    bold?: BoldValue,
}

const paragraphGlobalClasses = "text-primary-text font-text-primary";

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
    return levelclasses[props ?? 1];
}

function getBoldClasses(props:BoldValue|undefined){
    return boldCLasses[props ?? "regular"];
}

export default function Text(props: TextProps){

    const [local, rest] = splitProps(props, ["level", "component"]);
    const Component = local.component || (local.component ?? "p"); 

    return(
        <>
            <Dynamic {...rest} component={Component} class={clsx([rest.class, paragraphGlobalClasses, getLevelClasses(props.level), getBoldClasses(props.bold)])}></Dynamic>
        </>
    )
}