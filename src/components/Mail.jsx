import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


export function Mail () {

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
    

    emailjs.sendForm(
        'service_va2dor4', 'template_djbjjk5', form.current,'t6AAYP6OlF53T1Pm_'
    ).then(() => {
        alert("message sent ");

        form.current.reset();
    }).catch(() => {
        alert("error sending message.");
    })
    console.log('error');
    
    }

    return (
        <div className="md:flex md:items-center w-screen md:mt-[12%]">
            <div className="flex flex-col  text-white basis-[40%]">
                <p className="text-3xl md:text-4xl text-left md:text-center ml-4 mt-4 md:ml-0 md:mt-0 font-bold md:font-extrabold tracking-tight">Get In Touch</p>
                <p className=" text-lg text-left md:text-center ml-4 mt-2 md:ml-0 md:mt-0 font-medium text-gray-600">Fill the Form To Converstation</p>
                <p className=" w-[264px] md:w-96   text-left md:text-center ml-4 mt-2 md:ml-28 md:mt-0 text-md font-normal text-gray-400">You can contact me with any questions, suggestions or just to say hi. I am always open to new ideas and collaborations. It can be anything like collaborating on good projects or startups or anime or gaming or anything else.</p>
            </div>

            <form ref={form} onSubmit={handleSubmit} className="basis-[40%] flex flex-col ml-4 md:ml-20">
                <input className="h-10 md:h-12 w-72 md:w-[440px] mt-4 rounded-lg pl-2 " type="text" name="name" id="" placeholder="Full Name" />
                <input className="h-10 md:h-12 w-72 md:w-[440px] mt-4 rounded-lg pl-2 " type="email" name="email" id="" placeholder="Email " />
                <div className="w-72 md:w-[440px]">
                    <textarea className="h-20 w-full row{1} mt-4 rounded-lg pl-2 pr-2" name="message" id="" placeholder="Message"></textarea>
                    </div>
                <button className="h-12 w-24 bg-indigo-600 text-white mt-4 rounded-lg font-bold" type="submit">Submit</button>
            </form>
        </div>
    )
}