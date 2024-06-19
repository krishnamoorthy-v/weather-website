import { useState } from "react";
import "../App.css"



async function getInfo(location) {
    
    if(location !== "") {
        // console.log(location);
        const key = "cfab1edc35eb8b33f80697c9d732e4a0";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;
    
        try {

            let callpromise = await fetch(url);
            // console.log(callpromise);
            if(!callpromise.ok) {
                throw new Error("wrong location");
            }
            let callobj = await callpromise.json();
            // console.log(callobj["name"]);
            let location = callobj["name"];
            let description = callobj["weather"]['0']['description'];
            let temp = callobj['main']['temp'];
            temp  -= 273;
            let windspeed = callobj['wind']['speed'];

           
            return {
                status: callpromise.ok,
                location: location,
                condition: description,
                temperature: temp.toFixed(3),
                speed: windspeed
            }

        
        } catch(error) {
            document.getElementById("location").style.color = "red";
        }

    } else {
        document.getElementById("location").focus();
    
    }  
}

export default function Input() {
    const [location, setLocation] = useState("");
    const [data, setData] = useState(false)

    function initialize() {
        getInfo(location).then((d)=>{setData(d)});
      
    }

    return (
        <div>
            <section className="w-[300px] bg-blue-400 px-10 py-10 flex flex-col justify-center">
            
                <div className="flex flex-row justify-center gap-1">
                    <input id="location" type="text" placeholder="enter the location" onChange={(e)=>{setLocation(e.target.value, e.target.style.color="black")}} className="w-[200px] h-10 px-2 border-2 border-gray-700 rounded-2xl"/>
                    <button className="border-2 px-1 py-0 bg-slate-500 text-white rounded-1xl" onClick={()=>{initialize()}}>search</button>
                </div>

            </section>


            {data && <section className="w-[300px] bg-white font-bold text-blue-700 mt-10 "> 
        
                <div className="bg-blue-600 text-white w-full text-center">
                    Weather of <span className="text-blue-300">{data.location}</span>
                </div> 
        
                <div className="p-4">
                    Sky Conditions: <span className="text-green-400">{data["condition"]}</span>
                </div>

                <div className="p-4">
                    Temperature: <span className="text-green-400">{data["temperature"]} C </span>
                </div>

                <div className="p-4">
                    Wind Speed: <span className="text-green-400">{data["speed"]} Km/hr</span>
                </div>
            </section> 
        }
        </div>
       
       

    );
}