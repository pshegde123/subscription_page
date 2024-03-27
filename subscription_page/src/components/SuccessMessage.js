import React, {useState,useEffect} from "react";
import debounce from 'debounce';
import {default as icon} from '../assets/images/icon-list.svg';
import { useNavigate, useLocation } from 'react-router-dom';

export default function SuccessMessage(){
    const navigate = useNavigate();
    const location = useLocation();
    const emailaddress = location.pathname.substring(9);
    //console.log("email value= ",location.pathname.substring(9)) //pathname = /success/emailid
    const [isMobile, setMobile] = useState(false);

    const resize = () => {
        let currentHideImage = window.innerWidth <= 600;
        //console.log("Mobile Sceen? = ", currentHideImage)
        // Are we mobile?
        setMobile(currentHideImage);        
      };

      useEffect(() => {
        window.addEventListener("resize", debounce(resize, 250));
        resize();
      });

    const handleSubmit = (e) =>{        
        e.preventDefault();
        navigate("/")
    }

    return (isMobile ? 
        (
        <div>            
                <div className="container bg-white">
                    <div className='grid grid-rows-5 mx-20 my-8'>
                        <div>
                            <img src={icon} className="inline w-10 mb-3" alt="Icon"/>
                            <h1 className="font-bold antialiased  text-4xl" style={{width:"200px"}}>Thanks for subscribing!</h1>
                        </div>
                        <div>
                            <p className='text-sm antialiased p-2' style={{width:"250px"}}>A conformation email has been sent to <strong>{emailaddress}</strong>. Please open it and click the button inside to confirm your subscription.</p>
                        </div>   
                        <div>
                            <button className="inline-flex justify-center rounded-lg text-sm font-semibold mb-2 py-3 px-4 w-64 bg-slate-900 text-white hover:bg-rose-600" onClick={handleSubmit}>Dismiss message</button>                      
                        </div>      
                    </div>
            </div>
        </div>
        ):
    (<>   
        <div className="py-20 min-h-screen bg-gray-700">
            <div className="container mx-auto max-w-96">
                <div className="lg:relative bg-white p-10 rounded shadow-lg max-h-96">
                    <div className='container grid grid-rows-5'>
                        <div>
                            <img src={icon} className="inline mb-3 w-10" alt="Icon"/>
                            <h1 className="font-bold text-4xl mb-2">Thanks for subscribing!</h1>
                        </div>
                        <div>
                            <p className='text-sm p-2'>A conformation email has been sent to <strong>{emailaddress}</strong>. Please open it and click the button inside to confirm your subscription.</p>
                        </div>   
                        <div>
                            <button className="inline-flex justify-center rounded-lg text-sm font-semibold mb-2 py-3 px-4 w-64 bg-slate-900 text-white hover:bg-rose-600" onClick={handleSubmit}>Dismiss message</button>                      
                        </div>      
                    </div>
                </div>
            </div>
        </div>
    </>)
  )
}