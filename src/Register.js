import React, {useState} from 'react';
//import { useHistory } from 'react-router-dom'

function Register()
{
    //set use state for registerand t&c check box
    const [agree, setAgree] = useState(false);
    const chkbox = () => {
        setAgree(!agree);
    };

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
   // const history=useHistory();

//asunc function for registering
    async function register()
    {
        //check input on console

        let item={email,name,password}
        console.warn(item)


        let result= fetch("http://127.0.0.1:8000/api/register",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json',

            }

        });

        result = await result.json();
        console.warn("result",result)
        localStorage.setresult("user-info",JSON.stringify(result))




    }

    return(
        <div>
            <h1>Register page</h1>
            <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} className='Email' placeholder='Email address...'/><br/>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} className='Username' placeholder='Username...'/><br/>
            <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='password' placeholder='Password...'/> <br/>
            <input type='checkbox' id='agree' onChange={chkbox} className='lable'  />
            <h3 >I agree to the Terms and Conditions</h3>
            <button disabled={!agree} className="button" onClick={register}>
                Sign Up
            </button>

        </div>
    )
}
export default Register