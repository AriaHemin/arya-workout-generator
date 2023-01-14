import { useEffect, useState } from "react";

function Timer(props) {
    
    useEffect(() => {
        props.timer > 0 && setTimeout(() => props.setTimer(props.timer - 1), 1000);
        if(props.timer === 0 && props.round < 3 && props.exerciseIndex < 7){
            props.setTimer(30)
          }
      }, [props.timer]);
    return (<div className="text-2xl" >{props.timer !== 0 ? "Countdown: " + props.timer : null}</div> 
        
      );
    }
    
    export default Timer;