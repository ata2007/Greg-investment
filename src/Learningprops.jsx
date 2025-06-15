import React from "react";
import Class2 from "./Class2";
// Props - short for properties. it is used to pass data or values from a parent component to a child component.

function Learningprops() {
    let cc =()=>{
        alert("Hii")
    }

    return (
        <>
            <div className="h-52 w-[200px] bg-sky-600">Learningprops</div>
            <Class2 pot="john" cc={cc}/>
        </>
    )
}

export default Learningprops