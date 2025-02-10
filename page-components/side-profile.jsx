import { Button } from 'react-bootstrap';
import styles from '../styles/side-profile.module.scss';

export default function SideProfile({onSelect}) {

  	return (
		<>
            <div className='row' id={styles.sideProfile}>
                <div className='col-12'>
					<div id={styles.frame}>
						<img className={styles.profilePic} src="./images/pradeep_ab.jpg" />
						<h3 className={styles.name}><a href="#home" onClick={onSelect}>Pradeep AB</a></h3>
					</div>
					<div className={styles.links}>
						<ul>
							{/* <li><a href="#diary" onClick={onSelect}>My Diary</a></li> */}
							<li><a href="#profile" onClick={onSelect}>My Profile</a></li>
							<li><a href="#contact" onClick={onSelect}>Contact Me!</a></li>
						</ul>
					</div>
					<footer>
						<ul>
							<li>
								<a href='https://www.linkedin.com/in/pradeep-ab-devsecops/' target='_blank' onClick={onSelect}>
									<img className={styles.social} src='./images/linkedin.png' alt='LinkedIn' />
								</a>
							</li>
							<li>
								<a href='https://dev.to/pradeepab' target='_blank' onClick={onSelect}>
									<img className={styles.social} src='./images/devto.png' alt='Dev.To' />
								</a>
							</li>
							<li>
								<a href='https://github.com/pradeepgowdaab' target='_blank' onClick={onSelect}>
									<img className={styles.social} src='./images/github.png' alt='GitHub' />
								</a>
							</li>
							<li>
								<a href='https://stackoverflow.com/users/27689734/pradeep-ab' target='_blank' onClick={onSelect}>
									<img className={styles.social} src='./images/stackoverflow.png' alt='StackOverflow' />
								</a>
							</li>
						</ul>
						<h5 className={`text-center copyright`}>
							<span className='text-danger'>No Copyright!</span> Take the Code.
						</h5>
						<h5 className={`text-center copyright-name`}>
							By Veer S Shrivastav
						</h5>
					</footer>
				</div>
            </div>
		</> 
  	)
}
