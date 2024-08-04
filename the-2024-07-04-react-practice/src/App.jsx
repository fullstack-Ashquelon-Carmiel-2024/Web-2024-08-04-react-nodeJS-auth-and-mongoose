import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Section from './components/section/Section';
import {sectionData} from './data/sectionData';
import {SiblingContextProvider} from './contexts/siblingContext';

function App() {

  return (
    <div className="App">
      

        <Header />
        <Nav />
        

      
    </div>
  );
}

export default App;
