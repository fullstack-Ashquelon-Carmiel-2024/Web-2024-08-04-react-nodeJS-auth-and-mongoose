import {faTrashCan} from '@fortawesome/free-regular-svg-icons';
import {faCog, faCow, faFileSignature, faSignInAlt, faSignOutAlt, faSlidersH} from '@fortawesome/free-solid-svg-icons';
/* import { faCoffee, faTrashCan as faSolidTrashCan } 
                 from '@fortawesome/free-solid-svg-icons'; */
/* import { faReact } from '@fortawesome/free-brands-svg-icons'; */
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { library} from '@fortawesome/fontawesome-svg-core';
//import '@fortawesome/fontawesome-free';
// library.add(far,fas,fab)

library.add(faCog, faCow, faFileSignature, faSignInAlt, faSignOutAlt, faSlidersH, faTrashCan);

/**
 * 
 * 
 * <FontAwesomeIcon icon="fa-regular fa-trash-can" 
                  className="text-danger" role='button' />
                <FontAwesomeIcon icon="fa-solid fa-mug-saucer" />
                <span className="fa-solid fa-mug-saucer"></span>
                 Icon name: 
                <FontAwesomeIcon icon="trash-can" />
                 <FontAwesomeIcon icon={faTrashCan} 
                  className="text-danger" role='button' />
                <FontAwesomeIcon icon={faCoffee} 
                  className="text-warning" role='button' />
                <FontAwesomeIcon icon={faSolidTrashCan} 
                  className="text-info" role='button' />
                <FontAwesomeIcon icon={faReact} 
                  className="text-success" role='button' /> 
 */