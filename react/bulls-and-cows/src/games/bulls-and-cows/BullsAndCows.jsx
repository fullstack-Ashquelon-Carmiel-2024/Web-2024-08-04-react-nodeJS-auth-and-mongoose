import './BullsAndCows.scss';
import Header from '../../components/header/Header';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BullsAndCows() {

  const show = [];
  for (let i=0; i<100; i++) show.push(<FontAwesomeIcon icon="fa-solid fa-cow"/>); 
   
  return (
    <div>
        <Header title="Bulls and Cows Game" />
        <h1>THE GAME</h1>
        <div>
            { show }
        </div>
    </div>
  )
}
