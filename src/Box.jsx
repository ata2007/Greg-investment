import React, {useContext, useEffect, useState} from "react";
// Reacts hooks are like building tools that help in building a single page react app
// useState: this is used to store. It comes with a function that is used to update thatValue.
// useRef
// useEffect
// useContext


function Box() {
    let [num,setNum] = useState(0)
    let [myBg,setmyBg] = useState(false) 

    function coco() { 
        setNum(num = num+1)
    }

    function switcher () {
        if (myBg == false) {
            setmyBg(true)
        } else {
            setmyBg(false)
        }
    }
    
    return (
        <div className={`h-[200px] w-[200px] ${myBg == true?  "bg-yellow-500" : "bg-red-600"}`}>
            <h1 className=" text-3xl font-bold "></h1>
            <button className="bg-slate-500 p-2 text-white rounded-md" onClick={coco}>click me</button>
            <button className="bg-blue-700 p-2 text-white rounded-md"onClick={switcher}>changer</button>
        </div>
    )
}

export default Box;