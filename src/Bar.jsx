import React, {useState} from "react";

function Bar() {
        let [mover,setMover] = useState(true)

        function mv() {
            if(mover) {
                setMover(false)
            } else {
                    setMover(true)
            }      
        }

        return (
            <div>
                <button onClick={mv} className="bg-red-700 text-sky-500 p-2">show</button>
                <div className={`${mover == true? "ml-[100px]" : "ml-0"} h-[150px] duration-200 w-[100px] bg-neutral-900 ml-[-100px]`}></div>
            </div>
        )
    
}

export default Bar