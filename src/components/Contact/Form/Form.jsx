import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css';


const Form = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      
      toast.success('Sent Successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

      
  
      emailjs.sendForm('service_zq93b1p', 'template_b9ncd7m', form.current, 'qBIsgha3Gn5oLqG-w')
        .then((result) => {
            console.log(result.text);
            formulario.reset();
        }, (error) => {
            console.log(error.text);
        });
    };


  return (
    <div>
    <form ref={form} onSubmit={sendEmail} className='display-flex-column-form' id='formulario'>
      <input type="text" placeholder='Name' name="user_name" required/>
      <input type="email" placeholder='Email' name="user_email" required />
      <input type="text" placeholder='Subject' name="date" required/>
      <textarea placeholder='Message' name="message" />
      <input type="submit" value="Send" className='button-send'/>
    </form>
    <ToastContainer />
    </div>
    
  )
}

export default Form