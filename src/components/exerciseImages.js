import { useState } from "react";

function ExerciseImg(props) {
    const [exerciseImg, setExerciseImg] = useState({
        "cat cow" : "https://images.ctfassets.net/3s5io6mnxfqz/3UPnknhzMFXeMcUtr0g3Ya/0f0df5e65680cf35d76884a99582e3a0/AdobeStock_275104849.jpeg",
        "sitting spine rotation" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZnVgdixFZgoIg9Q5vEYcL1bTEP6Iwbr_etg&usqp=CAU", 
        "standing spine rotation" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwBbuXVb9B8JWZ_vZcVYw624JQmO2raGLzw&usqp=CAU",
        "butcher block" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJC32PNxLBiVtTv7akgR6zkaHDmBOIYAGXTw&usqp=CAU", 
        "shoulder lifts" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLkEY82hsMtBYRnzbRrJXDZfeg8n1O3JD2bg&usqp=CAU",  
        "childs pose" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBvtHuWvsUdzeMFxWueASYd3m_Ha2YDdliKw&usqp=CAU",
        "shoulders extension" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM718Kk1mn8ptxkVw5U-lD4gnAE7pjnoKnu1EPbISkGIfUWiOCctIgDqgLD1e6Ry4bdzw&usqp=CAU", 
        "reverse plank" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyMfuhv--YOglB1vEFqrPLbjbAhgPGKCVQyA&usqp=CAU", 
        "chest stretch" : "https://cdn.shopify.com/s/files/1/1633/7705/files/chest_stretches_before_workout_480x480.jpg?v=1648446576", 
        "cobra" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7nJg6v_fFgOgAvUU8CKsA8mbQPGt9sIsSSg&usqp=CAU", 
        "camel stretch" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQrcE5Zmk1HHBY03Bv-CP7JhkEs1Bdm2pW7Q&usqp=CAU", 
        "standing back lean" : "https://www.orthocarolina.com/storage/wysiwyg/standing_lumbar_extensions_-_orthocarolina.png",
        "squats" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJYoX5OP65OyVIkDl3omuEuErYbyJPq1tQQ&usqp=CAU", 
        "glute rotation" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLMy3TrkeCela5LIdSnIw8cbge6dmJMJ1ASw&usqp=CAU", 
        "knee tuck" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKOcp_kxh0ZNqji6VRn0fkTzAMEHODE-LaQ&usqp=CAU",
        "hip flexor stretch" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUwhjWSxPvvfXq1PFOT3f8LqW95Erqfn-SVw&usqp=CAU", 
        "lunges" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzrqSeDiUpB45uq94dRFBXqNR_trP1HyRtaw&usqp=CAU", 
        "warrior stretch" : "", 
        "seated pike" : "", 
        "standing pike" : "", 
        "good mornings" : " "  
    })
    return (
        <div className="flex justify-center" >
          <img className="w-[200px]" src={exerciseImg[props.exercise]} alt={"image of " + props.exercise } ></img>
        </div>
      );
    }
    
    export default ExerciseImg;