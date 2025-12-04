import { createSignal, onCleanup, onMount } from "solid-js"
import Text from "./text";


export default function TypeWriter() {

    const arrWords = ["des applications intégrants les impératifs de conformité.", "des supports soucieux de vos données.", "un code clair, structuré et accessible."]

    const sloganText = "Je développe ";
    const sloganLength = sloganText.length;

    const [word, setWord] = createSignal(sloganText + arrWords[0]);
    const [typedWord, setTypedWord] = createSignal('');

    const [wordCount, setWordCount] = createSignal(0);
    const [arrCount, setArrCount] = createSignal(0);

    let intervalID: number;
    const intervalTime = 40;
    const intervalTimeClear = 30;


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
                intervalID = setInterval(cleaningWord, intervalTimeClear);
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
                intervalID = setInterval(cleaningWord, intervalTimeClear);
            }, 1000);
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
            }, 500)
        }
    }

    return (
        <>
            <Text level={3} class='text-center h-15 font-light'>{typedWord()}</Text>
        </>
    )
}