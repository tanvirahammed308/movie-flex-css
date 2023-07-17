
'use client'
import contactStyle from "@/app/contact/contact.module.css";
import {  Mulish } from 'next/font/google';
import { useState } from "react";

const mulish = Mulish({
    weight:['300', '400','500','600','700','800','900'],
    subsets: ['latin'],
    display: 'swap',
  })

const ContactForm = () => {
    const [user,setUser]=useState({
      username:"",
      email:'',
      phone:'',
      message:''
    });
    const handleChange=(e)=>{
     const  name=e.target.name;
     const value=e.target.value;
     setUser((prevUser) => ({...prevUser, [name] : value}));
     
    }
    const handleSubmit=()=>{}

  return (
    <form className={contactStyle.contact_form} onSubmit={handleSubmit}>
      <div className={contactStyle.input_field}>
        <label htmlFor="username" className={contactStyle.label}  style={{textAlign:"left"}}>
            Enter Your Name
          <input type="text" name="username" id="username" placeholder="enter your user name here"  className={mulish.className}
          value={user.username}
          onChange={handleChange}
          autoComplete="off"
          required
          />
        </label>
      </div>
      <div className={contactStyle.input_field}>
        <label htmlFor="email" className={contactStyle.label}  style={{textAlign:"left"}}>
            Enter Your Email
          <input type="email" name="email" id="email" placeholder="enter your email here"  className={mulish.className}
          value={user.email}
          onChange={handleChange}
          autoComplete="off"
          required
          
          />
        </label>
      </div>
      <div className={contactStyle.input_field}>
        <label htmlFor="phone" className={contactStyle.label}  style={{textAlign:"left"}}>
            Enter Your Phone Number
          <input type="number" name="phone" id="phone" placeholder="enter your phone number"  className={mulish.className} 
          value={user.phone}
          onChange={handleChange}
          autoComplete="off"
          />
        </label>
      </div>
      <div className={contactStyle.input_field}>
        <label htmlFor="message" className={contactStyle.label}  style={{textAlign:"left"}}>
            Enter Your Message
          <textarea  name="message" id="message" placeholder="enter your user name here"  className={mulish.className}
          value={user.message}
          onChange={handleChange}
          autoComplete="off"
          required
          />
        </label>
      </div>
      <div>
        <button type="submit" className={mulish.className}>send messsage</button>
      </div>
    </form>
  );
};

export default ContactForm;
