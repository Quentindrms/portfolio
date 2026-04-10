import { splitProps, type JSX } from "solid-js";
import { Dynamic } from "solid-js/web";
import {clsx} from "clsx";
import { type HeadingLevel, type BoldValue, getHeadingLevelClass, getBoldClass } from "../utils/classNames";

export interface HeadingProps extends JSX.HTMLAttributes<HTMLHeadingElement> {
    component?: `h${HeadingLevel}`
    children: JSX.Element,
    bold?: BoldValue;
    level?: HeadingLevel,
}

const globalClasses = "font-title-primary text-primary-text"

export default function Heading(props:HeadingProps) {

    const [local, rest] = splitProps(props, ["level", "component", "bold"]);
    const Component = local.component || `h${local.level ?? 1}`; 

    return (
        <>
        <Dynamic {...rest} component={Component} class={clsx([globalClasses, getHeadingLevelClass(props.level), getBoldClass(props.bold), props.class])}></Dynamic>
        </>
    )
}