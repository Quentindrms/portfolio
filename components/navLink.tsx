
export type NavLinksType = {
    name: string,
    value: string,
}

export default function NavigationLink(props: NavLinksType) {

    return (<a href={props.value} class='font-title-primary text-primary-text text-4xl font-norma hover:text-slate-500'>{props.name}</a>)
}