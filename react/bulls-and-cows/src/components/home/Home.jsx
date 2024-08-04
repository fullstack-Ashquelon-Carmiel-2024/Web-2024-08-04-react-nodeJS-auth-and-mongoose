import './Home.scss';
import Header from '../header/Header';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getData } from '../../services/data';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {

  const [dogImg, setDogImg] = useState('');
  const [cuisines, setCuisines] = useState([]);
 
  let url = 'https://dog.ceo/api/breeds/image/random';

  useEffect(() => {

    async function getDog() {

      try {

        const response = await fetch(url);
        const data = await response.json();
        setDogImg(data.message);

      } catch(e) {
        console.log(e.message)
      }

    }

    getDog()

  },[])

  const show = [];
  for (let i=0; i<100; i++) show.push(<FontAwesomeIcon icon="fa-solid fa-cow"
                                       className='text-info'/>); 

  async function handleCuisines () {
    let response = await getData('cuisines');
    setCuisines(response.status ? response.data : []);
  }
   
  return (
    <div className="home">
        <Header title="Welcome to the Best Game Portal Ever" />
        <h1>The Best Game Portal Ever</h1>
        <div>
            { show }
        </div>
        <button>
          <Link to="/games">Start Playing!</Link>
        </button>
        <img src={dogImg} alt="" />
        <button onClick={handleCuisines}>
          Get Cuisines!
        </button>
        <ul>
          {cuisines.length > 0 ? 
             cuisines.map((c,ix) => <li key={ix}>{c.name}</li>) 
             : <p>No Cuisines</p>}
        </ul>
    </div>
  )
}
