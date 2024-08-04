import Counters from './Counters';
import { useState } from 'react';

export default function UseEffect() {

  const [ isVisible, setIsVisible ] = useState(false);  

  return (
    <div>
        <h1 className="display-1 text-success">useEffect</h1>
        <button className="btn btn-danger"
                  onClick={() => setIsVisible(!isVisible)}>
            Show/Hide Counters
        </button>
        { isVisible && <Counters /> } 
    </div>
  )
}
