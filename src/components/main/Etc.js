import{ init, send } from '@emailjs/browser';
import { useEffect } from 'react';

function Etc(){
    const onSubmitForm = e => {
        send('service_f9eg1s9', 'template_9nbf24m', '#contactForm')
    }

    useEffect(()=>{
        init("user_1pwSWMQVajjnRc7m8XrUh");
    },[])

    return(
        <section id="etc">
            <div className="contactWrap">
                    <h1>CONTACT</h1>
                    <div className="inner">
                        <h2>Thanks for watching UFOLIO!</h2>
                        <form id="contactForm">
                            <div className="left">
                                <input type="hidden" name="contact_number" />
                                <input type="text" required name="to_name" placeholder="NAME" />
                                <input type="text" required name="contact" placeholder="CALL" />
                                <input type="email" required name="from_email" placeholder="E-MAIL" />
                            </div>
                            <div className="right">
                                <textarea required name="message_email" placeholder="MESSAGE" />
                            </div>
                        </form>
                        <input type="submit" value="SEND" className='sendBtn' />
                    </div>

                    <ul className="contact">
                        <li>EMAIL : uvin1016@naver.com</li>
                        <li>NUMBER : 010.9788.2092</li>
                        <li>GITHUB : <a href="https://github.com/uvin1016" target="_blank">GITHUB</a></li>
                    </ul>
                </div>
        </section>
    )
}

export default Etc;