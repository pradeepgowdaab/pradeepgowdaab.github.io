import { Button } from 'react-bootstrap';
import styles from '../styles/banner.module.scss';
import Conways from './conways';
import { useEffect, useRef, useState } from 'react';

export default function Banner() {

    const [subIndex, setSubIndex] = useState(0);
    const [index, setIndex] = useState(0); //index of char of word
    const [reverse, setReverse] = useState(false);
    const definition = ['Entrepreneur', 'Technologist', 'Developer', 'Explorer', 'Learner', 'Blogger'];

    useEffect(() => {
        if (subIndex === definition[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }
         
        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => {
                return (prev + 1 >= definition.length) ? 0 : prev+1;
            });
            return;
        }
        
        const indextimeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, 200);
         
        return () => clearTimeout(indextimeout);
    }, [subIndex, index, reverse]);

    const gotoProfile = () => {
        window.location.hash = '#profile';
    }

    const gotoContact = () => {
        window.location.hash = '#contact';
    }

  	return (
		<div className='container-flex relative page' id="home">
            <div className='row' id={styles.banner}>
                <div className='col-12'>
                    <Conways />
                    <div className={styles.wrapper}>
                        <h1 className={styles.hello}>Hi There! I'm</h1>
                        <h1 className={styles.intro}><span className={styles.name}>Veer Shrivastav,</span></h1>
                        <h3 className={styles.definition}><span>{`${definition[index].substring(0, subIndex)}`}</span></h3>
                        <div className='d-flex'>
                            <Button className={styles.hire} variant='danger' size='lg' onClick={gotoContact}>Hire Me!</Button>
                            <Button className={styles.info} variant='warning' size='lg' onClick={gotoProfile}>My Profile</Button>
                        </div>
                    </div>
                </div>
            </div>
		</div>
  	)
}
