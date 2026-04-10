import clsx from "clsx";
import {splitProps, type JSX} from "solid-js"
import { Dynamic } from "solid-js/web";
import { type TextLevel, type BoldValue, getTextLevelClass, getBoldClass } from "../utils/classNames";

type TextProps = JSX.HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> & {
    children: JSX.Element,
    level?: TextLevel,
    component?: "p" | "span",
    bold?: BoldValue,
}

const paragraphGlobalClasses = "text-primary-text font-text-primary";

export default function Text(props: TextProps){

    const [local, rest] = splitProps(props, ["level", "component"]);
    const Component = local.component || (local.component ?? "p"); 

    return(
        <>
            <Dynamic {...rest} component={Component} class={clsx([rest.class, paragraphGlobalClasses, getTextLevelClass(props.level), getBoldClass(props.bold)])}></Dynamic>
        </>
    )
}