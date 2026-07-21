import { useState } from 'react';
export const Counter = ()=>{
    const [counter, setCounter] = useState(0);
    return (
        <div className="border-amber-400 p-4 rounded flex flex-col justify-center items-center">
            <span className="text-2xl">{counter}</span>
            <button
                className="bg-blue-500 text-white font-bold rounded-xl p-4"
                onClick={(e)=>{setCounter(counter+1);}}
            >+</button>
        </div>
    );
}

