function SelectUser() {
  
  function handleChange(nick) {
    console.log(`value=${nick}`)
    
  }

  return (
    <select onChange={(e)=>handleChange(e.target.value)}>
      <option value="seaman" key={1}>Seaman</option>
    </select>
  )
}

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="layout">{children}</main>
    </div>
  );
}

function Header() {
  return (
    <header>
      <UserInfo />
    </header>
  );
}

const Emoji = props => (
  <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
  >
      {props.symbol}
  </span>
);

function UserInfo() {

  return (<span>
        <Emoji symbol={"🐬"}/>
        seaman (Yosef Levi)
      </span>);
}

function About() {
  
  return (
    <div className="details" 
             style={{backgroundImage: `radial-gradient(transparent,"yellow")`}}>
      <h1 className="favorite-book">📚 Favorite book 📚 <br/>Diary of a Wimpy Kid</h1>
      
      <h1>🏇✍️🖼️ Hobbies 🏇✍️🖼️ </h1>
      <h3 className="hobbie-list"> 
        <ul>
          <li>Knitting</li>
          <li>Knitting long scarfes</li>
          <li>More knitting</li>
        </ul>
      </h3>
    </div>
  )
}
 

function App() {

  const userName = 'seaman';

  const users = {
    seaman: {id: 7, name: "Yosef Levi", face: "🐬", hobbies: ["surfing","swimming", "reading"],
               favoriteBook: `"Mobi Dick" by Herman Melwille`,
               favoriteColor: 'turquoise' },
    night123: {id: 12, name: "Layla Koen", face: "🦇", hobbies: ["star watching"],
               favoriteBook: `"A Midsummer Night’s Dream" by William Shakespeare`,
               favoriteColor: 'navy'},
    mazerunner: {id: 23, name: "Noa Abulafia", face: "🕸", 
                 hobbies: ["creating mazes", "solving mazes","word games","running"],
                 favoriteBook: `"Alice in Wonderland" by Lewis Carroll`,
                 favoriteColor: "cornflowerblue"},
    sportfan: {id: 29, name: "Daniel Dori", face: "🦸‍♂️",
               hobbies: ["runnig","reading","going to gym","cooking"],
               favoriteBook:`"Don Quixote" by Miguel de Cervantes`, 
               favoriteColor:"orange"},
    princess789: {id: 31, name: "Tamar Grinberg", face: "👸",
                  hobbies: ["math","solving riddles"],
                  favoriteBook: `"The Adventures of Sherlock Holmes" by Arthur Conan Doyle`,
                  favoriteColor: "orangered"
                }
  }
  
  console.log(userName);
  console.log(users);
  return (
      <div className="App">
        <Layout>
          <SelectUser />
          <article>
            <About />
          </article>
        </Layout>
      </div>
  );
}

export default App;
