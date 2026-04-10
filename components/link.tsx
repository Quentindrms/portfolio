import type {JSX} from "solid-js"
import clsx from "clsx";
import { type LinkLevel, type BoldValue, getLinkLevelClass, getBoldClass } from "../utils/classNames";

interface LinkProps extends JSX.HTMLAttributes<HTMLAnchorElement>{
    children: JSX.Element,
    link: string,
    level?: LinkLevel,
    bold?: BoldValue
}

const globalClasses = "text-primary-text font-text-primary w-fit hover:text-blue-600";

export default function Link(props:LinkProps){

    return(<a href={props.link} class={clsx([getLinkLevelClass(props.level), getBoldClass(props.bold), globalClasses])}>{props.children}</a>)
}