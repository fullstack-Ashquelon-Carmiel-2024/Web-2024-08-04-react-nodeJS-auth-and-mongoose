import './MathOlymp.css';

export default function MathOlymp() {

  const scoreToLevel = [1,2,4,8,16,32,64,128];

  const actions = ['-','+'];


  return (
    <div className="math-olymp">
      <h2 className="text-primary">Score: , Level: </h2>
      <button className="btn btn-primary">
                Show Exercises!
      </button>
      <div className="row d-grid exGrid fs-3">
      
        Here should be the exercises

      </div>
    </div>
  )
}
