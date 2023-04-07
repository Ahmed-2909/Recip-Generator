import React from "react";

const Recipes = (props) => {

    return (
        <div className="bg-white mt-5 w-2/5 flex flex-wrap justify-center items-start rounded-xl flex-col text-center font-mono">
            <img src={props.image} alt="No image" className="rounded-full m-auto my-2 " />
            <h2 className="text-center font-bold mx-auto text-2xl">{props.title}</h2>
            <p className="text-center font-bold mx-auto text-lg ">calories : {props.calories.toFixed(2)}</p>
            <ul>
                <li >{props.ingredient}</li>
            </ul>
        </div>
    );

};
export default Recipes;