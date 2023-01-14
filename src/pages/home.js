import { Link } from "react-router-dom";

function Home(){
    return(
        <div>
            <h1 className='font-bold text-4xl' >let's workout!</h1>
            <p>choose what to work on!</p>
            <button className='px-100' >
                <Link to={"/flexibility"} >
                    <img
                        className="m-2 my-4" 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAyKVqzlO48BZZ1bjsY_0dL8xvzyvVMKbWdA&usqp=CAU" alt="vandam doing middle split" ></img>
                    <div>
                        <p className="m-2 font-bold text-5xl' " >flexibility</p>
                    </div>
                </Link>
            </button>
            <p>more coming never!</p>
        </div>
    )
}

export default Home;
