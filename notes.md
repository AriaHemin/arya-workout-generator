## workout structure 
1. spine or neck : [cat cow, sitting spine rotation, standing spine rotation] 
2. shoulders and/or lats : [butcher block, shoulder lifts, childs pose] 
3. chest and/or biceps : [shoulders extension, reverse plank, chest stretch] 
4. anterior compound : [cobra, camel stretch, standing back lean] 
5. glutes : [squats, glute rotation, knee tuck] 
6. hip flexor and/or quads : [hip flexor stretch, lunges, warrior stretch] 
7. hamstring : [seated pike, standing pike, good mornings]


- 30 seconds per area then move to next area. 
- do 2 to 3 rounds. 
- 30 seconds to 60 seconds rest between rounds

---

{
          if(workoutCreated && workoutStarted){
            return(
              <>
                <div className="flex justify-center" >
                  <img className="w-[200px]" src={workout[exerciseIndex - 1].img} alt={"image of " + workout[exerciseIndex - 1] } ></img>
                </div>
                <ExerciseCard exercise={workout[exerciseIndex - 1]}/>
              </>
            )
          }else if(workoutCreated){
            workout.map((exercise)=>{
              return(
                <>
                  <div className="flex justify-center" >
                    <img className="w-[200px]" src={exercise.img} alt={"image of " + exercise } ></img>
                  </div>
                  <ExerciseCard exercise={exercise}/>
                </>
              )
            }
          }
        }
