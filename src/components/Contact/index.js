import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './index.scss';

const Contact = () => {
    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'gmail',
                'template_ep3qf8p',
                refForm.current,
                'service_93kstob'
            )
            .then (
                () => {
                    alert('Message sent')
                    window.location.reload(false)
                }, 
                () => {
                    alert('Failed')
                }
            )
    }

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1> Contact Me </h1>
                <h2>Please fill out the form below! If you are ready to pay after you submit the form, please click on the cart located on the bottom left of my page to reach my venmo. 
                    <br />
                    When you are paying, make sure your name is on the description!
                </h2>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li>
                                <input type='text' name='name' placeholder='First and Last Name' required />
                            </li>
                            <li>
                                <input type='tel' name='phone' placeholder='Phone Number' required />
                            </li>
                            <li>
                                <textarea placeholder='Description' name='description' required></textarea>
                            </li>
                            <li>
                                <input type='submit' value='Send' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
};

export default Contact;