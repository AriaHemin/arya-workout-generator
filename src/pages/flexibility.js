import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExerciseCard from "../components/exerciseCard";
import Timer from "../components/timer";


import { initializeApp} from 'firebase/app'
import { 
  getFirestore,
  collection,
  getDocs
} from 'firebase/firestore' 

function Flexibility() {
const [workoutCreated, setWorkoutCreated] = useState()
const [workout, setWorkout] = useState([])
const [areas, setAreas] = useState(["spine" , "shoulderAndLat"  , "chestBiceps"  , "anteriorCompound"  , "glutes"  , "hipFlexorQuad"  , "hamstring"])
const [timer, setTimer] = useState(-1);
const [workoutStarted, setWorkoutStarted] = useState(false)
const [round, setRound] = useState(1)
const [exerciseIndex, setExerciseIndex] = useState(1)
const [exerciseArray, setExercisesArray] = useState()

const firebaseConfig = {
  apiKey: "AIzaSyD57RN8nZcryV-mMexsWLdFUT0zTnBYISI",
  authDomain: "exercise-list-6e1e3.firebaseapp.com",
  databaseURL: "https://exercise-list-6e1e3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "exercise-list-6e1e3",
  storageBucket: "exercise-list-6e1e3.appspot.com",
  messagingSenderId: "1008611287684",
  appId: "1:1008611287684:web:48033d9f80c9baaf1d58d1",
  measurementId: "G-YQFX1RNZZY"
};

useEffect(()=>{
  initializeApp(firebaseConfig)
  let db = getFirestore()
  const colref = collection(db, 'exercises')
  getDocs(colref)
    .then((snapshot)=>{
      let exercises = []
      snapshot.docs.forEach((exercise)=>{
        exercises.push({...exercise.data(), id: exercise.id})
      })
      setExercisesArray(exercises)
    })


  },[])




function makeFlexibilityWorkout(){

  setWorkout([])
  let newWorkOut = [];
  areas.map((area)=>{
    let randomNumber = Math.ceil(Math.random() * 3) - 1
    let areaExercise = []
    exerciseArray.map((exercise)=>{
      if (area === exercise.area){
        areaExercise.push(exercise)
      }
    })
    newWorkOut.push(areaExercise[randomNumber])
  })
  setWorkout(newWorkOut)  
  setWorkoutCreated(true)
}

function startFlexibilityWorkout(){
  setRound(1)
  setExerciseIndex(1)
  setWorkoutStarted(true)
  setTimer(30);
}





return (
  <div className="">
    <div className="text-4xl bg-yellow-300 text-white font-bold py-10 m-10 rounded "  >
      <Timer 
        timer={timer}
        round={round}
        exerciseIndex={exerciseIndex}
        setExerciseIndex={setExerciseIndex}
        setRound={setRound}
        setTimer={setTimer}
        setWorkoutStarted={setWorkoutStarted}
      />
      <>{workoutCreated && workoutStarted? 
        <>
          <div className="flex justify-center" >
            <img className="w-[200px]" src={workout[exerciseIndex - 1].img} alt={"image of " + workout[exerciseIndex - 1] } ></img>
          </div>
          <ExerciseCard exercise={workout[exerciseIndex - 1]}/>
        </>: workoutCreated && !workoutStarted ? workout.map((exercise)=>{
        return(
        <>
          <div className="flex justify-center" >
            <img className="w-[200px]" src={exercise.img} alt={"image of " + exercise } ></img>
          </div>
          <ExerciseCard exercise={exercise}/>
        </>
        )}): null}
      </>
        
      </div>
      


      <div className="flex w-full justify-center items-center" >
        <button>
          <Link to={"/"}>go home</Link>
        </button>
        <button onClick={()=>{makeFlexibilityWorkout(); console.log(workout)}} > {!workoutCreated ? "make workout" : "another one"}</button>
        {!workoutStarted && workoutCreated ? <button onClick={()=>{startFlexibilityWorkout()}} >start this workout</button> : null}
    </div>
  </div>)
}

export default Flexibility;