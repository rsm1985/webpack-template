import React, {memo, FC} from 'react';
import img from "./images/bg.png"
import check from "./images/checked.svg"
export const App = ({}) => {
    console.log("process.env", process.env)
    return (
        <>
            <h1>
                Hello

            </h1>
            <img src={img} alt=""/>
            <img src={check} alt=""/>
        </>

    );
};

