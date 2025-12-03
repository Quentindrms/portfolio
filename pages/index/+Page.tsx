import { Heading } from "../../components/heading";

export default function Home() {

    return (
        <div class=''>
            <Heading component="h1" level={1} bold="bold">Coucou le monde</Heading>
            <Heading component="h2" level={2} bold="bold">Coucou le monde</Heading>
            <Heading component="h3" level={3} bold="bold">Coucou le monde</Heading>
            <Heading component="h4" level={4} bold="bold">Coucou le monde</Heading>
            <Heading component="h5" level={5} bold="bold">Coucou le monde</Heading>
            <Heading component="h6" level={6} bold="bold">Coucou le monde</Heading>
        </div>
    )
}