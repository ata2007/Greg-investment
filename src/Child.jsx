import React from "react";

function Child({icon,myNumber,text,cc}) {
    return (
        <div className="flex justify-center items-center flex-col gap-2">
            <div className="p-3 bg-[coral] w-max text-3xl rounded-md">
                {icon}
            </div>
            <h1 className="text-2xl font-semibold">{myNumber}</h1>
            <p>{text}</p>
            <button className="h-[50px] w-[80px] bg-red-700"onClick={cc}>click</button>
        </div>
    )
}

export default Child