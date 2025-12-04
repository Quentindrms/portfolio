import { createSignal, onCleanup, onMount } from "solid-js"
import Text from "./text";


export default function TypeWriter() {

    const arrWords = ["Lorem ipsum dolor sit amet", "Consectetur adipiscing elit", "Nunc imperdiet sapien nec dolor convallis facilisis"]

    const [word, setWord] = createSignal('');
    const [typedWord, setTypedWord] = createSignal('');

    const [wordCount, setWordCount] = createSignal(0);
    const [arrCount, setArrCount] = createSignal(0);

    let intervalID: number;
    const intervalTime = 60;


    onMount(() => {
        intervalID = setInterval(typingWord, intervalTime);
    })

    onCleanup(() => {
        clearInterval(intervalID);
    })

    function typingWord() {
        const i = wordCount();
        const arr = arrCount();

        if (i < word().length) {
            const char = word().charAt(i);
            setTypedWord(typedWord() + char);
            setWordCount(wordCount() + 1);
        }
        else {
            clearInterval(intervalID);
            setTimeout(() => {
                const nextArr = (arr + 1) % arrWords.length;
                setArrCount(nextArr)
                setWord(arrWords[nextArr]);
                setWordCount(0);
                intervalID = setInterval(cleaningWord, intervalTime);
            }, 2000);
        }
    }

    function cleaningWord() {
        if (typedWord().length > 0) {
            setTypedWord(typedWord().slice(0, typedWord().length - 1))
        }
        else{
            clearInterval(intervalID);
            setTimeout(() => {
                intervalID = setInterval(typingWord, intervalTime); 
            }, 1000)
        }

    }

    return (
        <>
            <Text class='text-center h-15'>{typedWord()}</Text>
        </>
    )
}