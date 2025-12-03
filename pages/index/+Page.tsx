import Button from "../../components/button";
import Heading from "../../components/heading";
import NavigationLink from "../../components/navLink";
import Text from "../../components/text";

export default function Home() {

    return (
        <>
        <div class=''>
            <Heading component="h1" level={1} bold="bold">Coucou le monde</Heading>
            <Heading component="h2" level={2} bold="bold">Coucou le monde</Heading>
            <Heading component="h3" level={3} bold="bold">Coucou le monde</Heading>
            <Heading component="h4" level={4} bold="bold">Coucou le monde</Heading>
            <Heading component="h5" level={5} bold="bold">Coucou le monde</Heading>
            <Heading component="h6" level={6} bold="bold">Coucou le monde</Heading>
        </div>
        <div>
            <Text component="p" level={1}>Text niveau 1</Text>
            <Text component="p" level={2}>Text niveau 2</Text>
            <Text component="p" level={3}>Text niveau 3</Text>
        </div>
        <div>
            <NavigationLink name="Le lien" value=""/>
        </div>
        <div>
            <Button component="button">Cliquez moi</Button>
        </div>
        </>
    )
}