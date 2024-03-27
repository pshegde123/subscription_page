import React from 'react';
import { useNavigate } from 'react-router-dom';

//class SubmitForm extends React.Component{
export default function SubmitForm(){      
    const navigate = useNavigate();

    const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };

    const loadSuccessMessage = (e) =>{
        e.preventDefault();
        console.log(e)
        if(validateEmail(e.target[0].value)){            
            navigate(`/success/${e.target[0].value}`)
        }else{
            document.getElementById("result").innerHTML = "Valid email required"    
            document.getElementById("email").classList.add('bg-red-300')            
        }           
        
    };         
    
    function handleEmailChange(event){
        //console.log(event.target.value)
        //let mymail = document.getElementById("email")
        //mymail.classList.add('bg-red-300')
    }

    return(
        <>            
            <form onSubmit={loadSuccessMessage}>        
                <div className="mb-2 mt-4 grid grid-rows-2">        
                    <div>
                        <p id="emailLabel" className='float-left'>Email address:</p>
                        <p id="result" className='float-right text-red-600 font-bold'></p>                                                
                    </div>                                                                   
                    <div>
                        <input type="text" id="email" name="email" className="border-2 border-slate-200 px-4 py-2 w-64" placeholder="email@company.com" onChange={(event) => handleEmailChange(event)}/>
                    </div>
                </div>
                <div>
                    <button type="submit" className="inline-flex justify-center md:justify-self-center rounded-lg text-sm font-semibold py-3 px-4 w-64 bg-slate-900 text-white hover:bg-rose-600">Subscribe to monthly newsletter</button>
                </div>                
            </form>           
        </>)
}
//export default SubmitForm;