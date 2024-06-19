import "../App.css"
import { useState } from "react";

export default function DisInfo(props) {

   
   



   return (
    <section className="w-[300px] bg-white font-bold text-blue-700 mt-10 ">
        
        <div className="bg-blue-600 text-white w-full text-center">
            Weather of <span className="text-blue-300">{props.location}</span>
        </div>
        
        <div className="p-4">
            Sky Conditions: <span className="text-green-400">{props.condition}</span>
        </div>

        <div className="p-4">
            Temperature: <span className="text-green-400">{props.temperature} C </span>
        </div>

        <div className="p-4">
            Wind Speed: <span className="text-green-400">{props.speed} Km/hr</span>
        </div>
    </section>
   );
}