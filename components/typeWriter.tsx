import { createSignal, onCleanup, onMount } from "solid-js"
import Text from "./text";


export default function TypeWriter() {

    const arrWords = ["faire chier Estelle", "traumatiser vos enfants", "pécho votre mari"]

    const sloganText = "Je suis capable de ";
    const sloganLength = sloganText.length;

    const [word, setWord] = createSignal(sloganText + arrWords[0]);
    const [typedWord, setTypedWord] = createSignal('');

    const [wordCount, setWordCount] = createSignal(0);
    const [arrCount, setArrCount] = createSignal(0);

    let intervalID: number;
    const intervalTime = 60;


    onMount(() => {
        intervalID = setInterval(typingSlogan, intervalTime);
    })

    onCleanup(() => {
        clearInterval(intervalID);
    })

    function typingSlogan() {
        const i = wordCount();

        if (i < word().length) {
            const char = word().charAt(i);
            setTypedWord(typedWord() + char);
            setWordCount(wordCount() + 1)
        }
        else {
            setArrCount(arrCount()+1)
            setWord(arrWords[1]);
            clearInterval(intervalID);
            setTimeout(() => {
                setWordCount(0);
                intervalID = setInterval(cleaningWord, intervalTime);
            }, 2000);
        }
    }

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
        if (typedWord().length > sloganLength) {
            setTypedWord(typedWord().slice(0, typedWord().length - 1))
        }
        else {
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