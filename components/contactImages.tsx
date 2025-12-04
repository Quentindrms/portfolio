import type { JSX } from "solid-js";
import type { ContactType } from "../types/Types";

interface ContactImagesProps extends JSX.HTMLAttributes<HTMLImageElement> {
    data: ContactType
}

export default function ContactImages(props: ContactImagesProps) {

    return (
        <a href={props.data.lien}>
            <img src={props.data.image} alt={props.data.alt} class='w-[150px]' id={props.data.name}></img>
        </a>
    )
}