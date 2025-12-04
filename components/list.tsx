import clsx from "clsx"
import {JSX} from "solid-js"

interface ListProps extends JSX.HTMLAttributes<HTMLUListElement>{
    children: JSX.Element,
}

interface ListItemProps extends JSX.HTMLAttributes<HTMLLIElement>{
    children: JSX.Element,
}

const listItemGlobalClasses = "w-fit text-2xl text-primary-text font-text-primary font-extralight transition hover:scale-110 hover:text-secondary-text hover:shadow-md"

export function List(props:ListProps) {

    return (
        <ul {...props} class={clsx([props.class])}>
            {props.children}
        </ul>
    )
}

export function ListItem(props:ListItemProps){
    return(
        <li {...props} class={clsx([listItemGlobalClasses, props.class])}>{props.children}</li>
    )
}