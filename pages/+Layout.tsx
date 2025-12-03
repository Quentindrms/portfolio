import './tailwind.css';
import type {JSX} from 'solid-js';

export default function Layout(props:{children?:JSX.Element}){

    return(
        <div class='w-screen h-screen bg-background'>
            {props.children}
        </div>
    )
}

function Header(){

    return(
        <div class=''>
        
        </div>
    )
}