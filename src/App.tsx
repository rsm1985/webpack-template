import React, {memo, FC} from 'react';
import img from "./images/bg.png"
import check from "./images/checked.svg"
import {Counter} from "./Counter";
export const App = ({}) => {
    console.log("process.env", process.env)
    return (
        <>
            <h1>
                Hello!

            </h1>
            {/*<img src={img} alt=""/>*/}
            {/*<img src={check} alt=""/>*/}
            <Counter />
        </>

    );
};

