import { useState, useEffect } from 'react';

export default function Counters() {
  
  const [ counter1, setCounter1 ] = useState(0);  
  const [ counter2, setCounter2 ] = useState(0);  
  const [ bgColor, setBgColor ] = useState('cornflowerblue');

  /**
   * useEffect() gets 2 parameters
   *   1. callback function (will run, when the event that useEffect depends on will happen)
   *   2. array of dependencies
   */
  /** Example1: useEffect without dependencies - only one parameter */
  // useEffect without dependencies will run it's callback function
  //     on the first render and on each re-render
  useEffect(() => {

    // If we change state here, we get endless loop
    // const rand = () =>  Math.floor(Math.random() * 256);
    // setBgColor(`rgb(${rand()},${rand()},${rand()})`);

    console.log(`There was mount(first render) or re-render`)

  }); 

  /** Example 2: useEffect which has an empty array as the dependency -
   *  it means, this useEffect depends on mount (first render)
   */
  useEffect(() => {

        let intervalId = setInterval(() => {
          const rand = () =>  Math.floor(Math.random() * 256);
          setBgColor(`rgb(${rand()},${rand()},${rand()})`);
        },3500)

        console.log(`MOUNT`);
        // This useEffect is useful for fetching initial data from somewhere,
        // as fetching data is an asynchronous operation, and this specific useEffect
        // does this once - only on mount

        // Perform some actions before UNMOUNT:
        return ( () => {
          console.log(`Before UNMOUNT`)
          clearInterval(intervalId);
        } )

  }, [])

  useEffect(() => {

    console.log(`counter1 = ${counter1} or counter2 = ${counter2}`)

  },[counter1,counter2])

  return (
    <div>
        <h3 className="display-3">Counters</h3>
        <button className="btn btn-outline-success" onClick={()=>setCounter1(counter1+1)}>
            Counter 1
        </button>
        <button className="btn btn-outline-primary" onClick={()=>setCounter2(counter2+1)}>
            Counter 2
        </button>
        <div style={{ backgroundColor: bgColor }}
            className="output vh-25 vw-25 border border-primary m-5">
            counter1 = { counter1 } <br /> 
            counter2 = { counter2 } 
        </div>
    </div>
  )
}
