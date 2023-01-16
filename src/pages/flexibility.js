import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExerciseCard from "../components/exerciseCard";
import Timer from "../components/timer";
import ExerciseImg from "../components/exerciseImages";


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
const [timer, setTimer] = useState(-1);
const [workoutStarted, setWorkoutStarted] = useState(false)
const [round, setRound] = useState(1)
const [exerciseIndex, setExerciseIndex] = useState(1)


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD57RN8nZcryV-mMexsWLdFUT0zTnBYISI",
  authDomain: "exercise-list-6e1e3.firebaseapp.com",
  projectId: "exercise-list-6e1e3",
  storageBucket: "exercise-list-6e1e3.appspot.com",
  messagingSenderId: "1008611287684",
  appId: "1:1008611287684:web:48033d9f80c9baaf1d58d1",
  measurementId: "G-YQFX1RNZZY",
  databaseURL: "https://exercise-list.europe-west1.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

useEffect(()=>{
  console.log(round, timer)
  console.log(database)
},[round])

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
  setRound(1)
  setExerciseIndex(1)
  setWorkoutStarted(true)
  setTimer(30);
}


useEffect(()=>{
  makeFlexibilityWorkout();
},[])

return (
    <div className="">
      <div className="text-2xl bg-yellow-300 text-white font-bold py-10 m-10 rounded "  >
        <ExerciseImg exercise={workout[exerciseIndex - 1]} />
        <Timer 
          timer={timer} 
          setTimer={setTimer}  
          round={round} 
          setRound={setRound}
          exerciseIndex={exerciseIndex}
          setExerciseIndex={setExerciseIndex} />
        <ExerciseCard exercise={workout[exerciseIndex - 1]}/> 
      </div>
      
      <div className="flex w-full justify-center items-center" >
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