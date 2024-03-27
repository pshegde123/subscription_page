import React, {useState,useEffect} from "react";
import debounce from 'debounce';
import Header from "./Header";
import SubmitForm from "./Form";
import {default as lImage } from '../assets/images/illustration-sign-up-desktop.svg';
import {default as mImage } from '../assets/images/illustration-sign-up-mobile.svg';

export default function SubscribeComponent(){
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
    
    return (   
        <>
        {isMobile ? (
        <div className="bg-gray-700">
            <div className="container mx-auto">
                <div className="bg-white p-5 rounded shadow-lg mx-auto">
                    <div className="grid md:grid-cols-2">
                        <div>
                            <img src={mImage} className="w-full mb-5" alt="Mobile Illustration"/>
                        </div>
                        <div className=" w-70">
                            <Header/>     
                            <SubmitForm/>                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ):
        (<div className="lg:py-20 lg:min-h-screen lg:bg-gray-700">
            <div className="container mx-auto">
                <div className="lg:relative bg-white p-5 rounded shadow-lg mx-auto" style={{width:"800px", height:"600px"}}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="mt-16 ml-4">
                            <Header/>     
                            <SubmitForm/>                          
                        </div>
                        <div>
                            <img src={lImage} className="float-right" style={{width:"650px", height:"600px"}} alt="Illustration"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )}
        
        </>
  )
}