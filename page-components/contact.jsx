import { useEffect } from 'react';
import styles from '../styles/contact.module.scss';

export default function Contact({show}) {

    useEffect(() => {
        console.clear();
        console.log('%cWoohoo.. I see you!', 'color: red; font-size: 30px');
        console.log('%cWhat are you looking for?', 'color: red; font-size: 30px');
        console.log('%cWanna chat? The clue is hidden in the window... 😊', 'color: red; font-size: 30px');
        window.clue = () => {
            console.log('%cIf you have reached here, that means you are smart enough! But do keep the secret 🤫.', 'color: blue; font-size: 22px');
        }
        window.email = () => {
            console.log('%cAhhh!! Okay because you have cracked it, you deserve it. But please don\'t share it with anyone 🤫. I have marketing messages. Feel free to send me an email on hello@veershrivastav.com', 'color: blue; font-size: 22px');
        }
        window.phone = () => {
            console.log('%cSorry buddy! even you have cracked it! I can\'t share my phone number with you. However, there is a way you can retrieve it. keep looking...', 'color: blue; font-size: 22px');
        }
        window.unlock = () => {
            console.log('%cInteresting! Here is my phone number... oZpSZeO/eaS8z1Bnezb697GEp2RTP90FOyNG2+hjpoa6YLs4ny0EWklvoAmJOY7XDu2YLIulA1v4bzbp1Xhseg==', 'color: blue; font-size: 22px');
        }
    }, [show]);

  	return (
		<div className='container-flex relative page' id="contact">
            <div className='row' id={styles.contact}>
                <div className='col-12 d-flex justify-content-center'>
                    <div className='d-flex align-items-center' id={styles.container}>
                        <div className='d-flex flex-col'>
                            <h2 className='title pb-1 pt-0'>Wanna talk?</h2>
                            <h3 className='subtitle'>Need help on Engineering Leadership? Or do you want to leaverage my network?</h3>
                            <h3 className='mt-2 mb-3'>I am more than happy to help.</h3>
                            <h4>Sorry I can't share my number here.</h4>
                            <h4>But, feel free to connect with me on LinkedIn.</h4>
                        </div>
                    </div>
                </div>
            </div>
		</div>
  	)
}
