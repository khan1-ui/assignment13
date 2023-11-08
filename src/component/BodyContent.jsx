import { useRef } from "react";


const BodyContent = () => {
    let demoRef =useRef()



    const changee =()=>{
        demoRef.innerText ="Hi everyOne ,I'm from useRef methods";
        
    }
    return (
        <div>
            <h1 ref={(demo)=>demoRef=demo}>Element:</h1>
            <button onClick={changee}>useRef uses</button>
            <br /><br />
            
        </div>
    );
};

export default BodyContent;