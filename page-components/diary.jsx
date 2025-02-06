import styles from '../styles/diary.module.scss';

export default function Diary() {
  	return (
		<div className='container-flex relative page' id="diary">
            <div className='row' id={styles.profile}>
                <div className='col-12'>
                    My Diary
                </div>
            </div>
		</div>
  	)
}
