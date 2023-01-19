import React,{useState} from 'react';
import Welcome from './Welcome'; 

function Login(){
    const [name , setName] = useState("")
    const [submit , setSubmit] = useState(false)
    return(
        <div className='log'>
            <label>Name</label>
            <input
            placeholder='Enter Your Name' 
            value ={name}
            onChange={(event)=> {setName(event.target.value)}}></input>
            <button onClick={()=>{setSubmit(!submit)}}>Submit</button>
            {(submit && name) && <Welcome name={name}/>}
        </div>
    );
}

export default Login;