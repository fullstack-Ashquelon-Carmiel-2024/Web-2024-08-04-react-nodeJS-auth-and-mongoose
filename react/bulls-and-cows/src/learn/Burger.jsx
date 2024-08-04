import './BurgerStyle.css';
import { useState, useRef, useEffect } from 'react';

export default function Burger () {

    const [ layers, setLayers ] = useState({lettuce: 0,
                                            tomato: 0,
                                            eggs: 0,
                                            meat: 0});

    const prevLayersRef1 = useRef({});
    let prevLayers2 = {lettuce: 100,
        tomato: 100,
        eggs: 100,
        meat: 100};

    const addRemoveIngredient = (action, ingredient) => {

        action === 'add' ? setLayers({...layers, [ingredient]:layers[ingredient]+1}) 
                         : layers[ingredient] > 0 && setLayers({...layers, [ingredient]:layers[ingredient]-1});
        


        // MISSION02: set new value of the state 
        //            while adding or removing 1 to the amount
        //            of layers.
        //            "action" value could be "add" or "remove"
        

    }

    function handleChange(e) {

    }

    // MISSION03: Copy Burger.js to Burger2.jsx
    //    and change this new component in the way
    //    that the layers will be shown by the order of
    //    their addition and not together by side type like here
    ////////////////////////////////
    // For example we could see in <Burger2 />:
    //     lettuce, meat, eggs, meat, tomatoes, eggs, lettuce


    // MISSION04: create "ref" for #inp1 and "ref" for #inp2.
    //  When some change happens in #inp1 change background color
    //  of #inp2 and vice versa.

    // MISSION05: create "ref" variable prevLayersRef1.
    // Create useEffect that depends on "layers".
    // Inside useEffect make a real copy of the "layers" 
    // into prevLayersRef1 and into prevLayers2.
    // Use the first variable for the first line of the "prev layers"
    // and the second variable for the second line.
    // Now we see the difference, right?
    // What whould happen if we would not use useEffect?

    const burgerContent = () => {
        
        let burger = [];


        // outputting the lettuce
        for (let i = 0; i < layers.lettuce; i++){
            burger.push(<div key={burger.length} className="lettuseSide"></div>);
        }
        // outputting the tomato
        for (let i = 0; i < layers.tomato; i++){
            burger.push(<div key={burger.length} className="tomatoSide"></div>);
        }
        // outputting the eggs
        for (let i = 0; i < layers.eggs; i++){
            burger.push(<div key={burger.length} className="eggsSide"></div>);
        }
        // outputting the meat
        for (let i = 0; i < layers.meat; i++){
            burger.push(<div key={burger.length} className="meatSide"></div>);
        }
        if(burger.length === 0)
            burger.push(<p key="0">Please start adding ingredients!</p>);
        return burger;
    }

    
        return (
            <div className="Burger">
                <div className="burgerIngredients">
                    <div className="topSide"></div>
                    {burgerContent()}
                    <div className="bottomSide"></div>
                </div>

                <div className="inputs">
                    <input id='inp1' onChange={handleChange} />
                    <input id='inp2' onChange={handleChange} />
                </div>
                <h2>Prev layers ref 1 = lettuce: ?, tomato: ?, eggs: ?, meat: ?</h2>
                <h2>Prev layers not ref 2 = lettuce: ?, tomato: ?, eggs: ?, meat: ?</h2>

                <div className="ingredientsBlock">
                    <p>Lettuce</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={()=>{addRemoveIngredient("add","lettuce");}}>Add</button>
                        <button className="ingrBtn" onClick={()=>{addRemoveIngredient("remove","lettuce")}}>Remove</button>
                    </div>
                    <p>TOMATO</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={()=>{addRemoveIngredient("add","tomato")}}>Add</button>
                        <button className="ingrBtn" onClick={()=>{addRemoveIngredient("remove","tomato")}}>Remove</button>
                    </div>
                    <p>EGGS</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={()=>{addRemoveIngredient("add","eggs")}}>Add</button>
                        <button className="ingrBtn" onClick={()=>{addRemoveIngredient("remove","eggs")}}>Remove</button>
                    </div>
                    <p>MEAT</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={()=>{addRemoveIngredient("add","meat")}}>Add</button>
                        <button className="ingrBtn" onClick={()=>{addRemoveIngredient("remove","meat")}}>Remove</button>
                    </div>
                </div>
            </div>
        );

}