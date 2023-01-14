import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExerciseCard from "../components/exerciseCard";
import Timer from "../components/timer";


function Flexibility() {
  const [exercises, setExercises] = useState({
  spine : ["cat cow", "sitting spine rotation", "standing spine rotation"] ,
  shouldersLats : ["butcher block", "shoulder lifts", "childs pose"] ,
  chestBiceps : ["shoulders extension", "reverse plank", "chest stretch"] , 
  anteriorCompound : ["cobra", "camel stretch", "standing back lean"] ,
  glutes : ["squats", "glute rotation", "knee tuck"] ,
  hipFlexorQuads : ["hip flexor stretch", "lunges", "warrior stretch"] , 
  hamstring : ["seated pike", "standing pike", "good mornings"] 
})
const [workout, setWorkout] = useState([])
const [areas, setAreas] = useState(["spine" , "shouldersLats"  , "chestBiceps"  , "anteriorCompound"  , "glutes"  , "hipFlexorQuads"  , "hamstring"])
const [timer, setTimer] = useState(0);
const [workoutStarted, setWorkoutStarted] = useState(false)
const [round, setRound] = useState(1)
const [exerciseIndex, setExerciseIndex] = useState(1)


function makeFlexibilityWorkout(){

  setWorkout([])
  let newWorkOut = [];
  areas.map((area)=>{
    let randomIndex = Math.floor(Math.random() * 3)
    newWorkOut.push(exercises[area][randomIndex])
    return newWorkOut
  })
  setWorkout(newWorkOut)  
}

function startFlexibilityWorkout(){
  setWorkoutStarted(true)
  setTimer(30);
  

}


useEffect(()=>{
  makeFlexibilityWorkout();
},[])

return (
    <div className="App">
      <Timer timer={timer} setTimer={setTimer}  round={round} exerciseIndex={exerciseIndex} />
      <ol>{
        workout.map((exercise)=>{
          return(
            <li> 
              <ExerciseCard exercise={exercise} />
            </li>
            )
        })
        }
      </ol>
      <div className="flex flex-row" >
        <button>
          <Link to={"/"}>go home</Link>
        </button>
        <button onClick={()=>{makeFlexibilityWorkout()}} >another one</button>
        {!workoutStarted ? <button onClick={()=>{startFlexibilityWorkout()}} >start this workout</button> : null}
      </div>
    </div>
  );
}

export default Flexibility;