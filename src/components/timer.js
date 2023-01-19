import { useEffect, useState } from "react";


function Timer(props) {
  
  
    useEffect(() => {
        props.timer > 0 && setTimeout(() => {
            props.setTimer(props.timer - 1)
            if(props.timer === 1 && props.round < 3 && props.exerciseIndex < 8 ){
              props.setExerciseIndex(props.exerciseIndex + 1);
              if(props.round < 3 && props.exerciseIndex === 7 && props.timer === 1 ){
                props.setRound(props.round + 1)
                props.setExerciseIndex(1)
              }
            }
          }, 1000);
          if(props.timer === 0 && props.round < 3 && props.exerciseIndex < 8){
            props.setTimer(30)
          }
          if(props.timer === 0 && props.round === 3 && props.exerciseIndex  === 1){
            
            props.setWorkoutStarted(false)
          }
      }, [props.timer]);
    return (<div >
      {props.timer !== -1 && props.round !== 3  ? 
        "Countdown: " + props.timer + " exercise : " + props.exerciseIndex + " round : " + props.round: null
      }</div> 
        
      );
    }
    
    export default Timer;