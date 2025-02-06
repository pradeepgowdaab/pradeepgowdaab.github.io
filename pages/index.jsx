import Head from 'next/head';
import Banner from '../page-components/banner';
import SideProfile from '../page-components/side-profile';
import Diary from '../page-components/diary';
import Profile from '../page-components/profile';
import Contact from '../page-components/contact';
import { Button } from 'react-bootstrap';
import {useRef, useState, useEffect} from 'react';

export default function Home() {

	const scrollContainerRef = useRef();

	const [btnColorClass, setBtnColorClass] = useState('btnLight');
	const [closeState, setCloseState] = useState(1);
	const [menuClass, setMenuClass] = useState('sideMenu');
	const [btnIcon, setBtnIcon] = useState('bi-grid-fill');
	const [showClue, setShowClue] = useState(false);

	const toggleMenu = () => {
		let newState = closeState==1 ? 0 : 1;
		let newClass = newState==1 ? 'sideMenu' : 'sideMenuOut';
		if (newState) {
			if (scrollContainerRef.current.scrollTop < 400) { setBtnColorClass('btnLight'); }
			setBtnIcon('bi-grid-fill');
		} else {
			if (scrollContainerRef.current.scrollTop < 400) { setBtnColorClass('btnDark'); }
			setBtnIcon('bi-x');
		}
		setCloseState(newState);
		setMenuClass(newClass);
	}

	useEffect(() => {
		if (scrollContainerRef && scrollContainerRef.current) {
			scrollContainerRef.current.addEventListener('scroll', onScroll, false);

			return () => {
				scrollContainerRef.current.removeEventListener('scroll', onScroll, false);
			}
		}
	}, []);

	const onScroll= () => {
		let _100vh = window.innerHeight;
		console.log('100vh', _100vh);
		if (scrollContainerRef.current.scrollTop > 400 && scrollContainerRef.current.scrollTop < (_100vh*4.5)) {
			setBtnColorClass('btnDark');
			console.clear();
			setShowClue(false);
		} else {
			setBtnColorClass('btnLight');
		}

		if (scrollContainerRef.current.scrollTop > (_100vh*4.5)) {
			setShowClue(true);
		}
	}
	

  	return (
		<>
			<Head>
				<title>Veer Shrivastav</title>
				<meta name="description" content="Veer Shrivastav is an Entrepreneur, Technologist, Engineering Leader and Developer." />
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main>
					<div className='container'>
						<Button className={`menuBtn d-block d-md-none ${btnColorClass}`} onClick={toggleMenu}>
							<i className={`bi ${btnIcon}`}></i>
						</Button>
						<div className='row'>
							<div className={`col-sm-12 col-md-4 col-lg-3 ${menuClass}`} style={{'--close': closeState}}>
								<SideProfile onSelect={toggleMenu}/>
							</div>
							<div className='col-sm-12 col-md-8 col-lg-9 scroll-container' ref={scrollContainerRef}>
								<Banner />
								{/* <Diary /> */}
								<Profile />
								<Contact show={showClue} />
							</div>
						</div>
					</div>
			</main>
			<footer></footer>
		</>
  	)
}
