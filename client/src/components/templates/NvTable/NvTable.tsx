import { useState } from "react";
import { nouns, verbs } from "./tables";
import { randomBetweenZeroAndMaxMinusOne } from "../../../utils/utils";

const NvTable = () => {

    const [result, setResult] = useState('Click to get a verb/noun pair');

    const handleClick = () => {
        const verb = verbs[randomBetweenZeroAndMaxMinusOne(verbs.length)];
        const noun = nouns[randomBetweenZeroAndMaxMinusOne(nouns.length)];
        setResult(verb + ' ' + noun);
    }
    
    return (
        <>
            <a onClick={() => handleClick()}>Click me I dare ye</a>
            <p>{result}</p>
        </>
        
    );
};

export default NvTable;