import { Button } from 'react-bootstrap';
import styles from '../../styles/profile.module.scss';
import {experiences} from './data/experience';
import {keySkills} from './data/keyskills';
import Experience from './experience';
import KeySkill from './keyskill';

export default function Profile() {
    
    const downloadResume = () => {
        window.open("https://veershrivastav.com/veer_shrivastav.pdf", "_blank")
    }

    const renderSkills = () => {
        let _1stcol = Math.ceil(keySkills.length/2);
        let _2ndcol = keySkills.length - _1stcol;
        let _1stskills = [];
        let _2ndskills = [];

        for (let i=0 ; i<_1stcol; i++) {
            _1stskills.push(<KeySkill key={`${keySkills[i].name}_${keySkills[i].points}`} data={keySkills[i]} />);
        }

        for (let i=_1stcol ; i<keySkills.length; i++) {
            _2ndskills.push(<KeySkill key={`${keySkills[i].name}_${keySkills[i].points}`} data={keySkills[i]} />);
        }

        return (
            <div className='d-flex flex-sm-column-xlg-row mb-4'>
                <div className='d-flex flex-col w-sm-100-xlg-50'>{_1stskills}</div>
                <div className='d-flex flex-col w-sm-100-xlg-50'>{_2ndskills}</div>
            </div>
        )
    }

  	return (
		<div className='container-flex relative page' id='profile'>
            <div className='row' id={styles.profile}>
                <div className='col-12'>
                    <Button id={styles.resumeBtn} onClick={downloadResume} size={'md'}>
                        <i className="bi bi-download"></i> Resume
                    </Button>
                    <div className='d-flex flex-column-xlg-row'>
                        <div className='d-flex w-100 flex-column'>
                            <h1 className='title'>Key Skills</h1>
                            {renderSkills()}
                        </div>
                    </div>
                    <h1 className='title'>Experience</h1>
                    {experiences.map((experience, key) => {
                        return (<Experience key={`${key}`} data={experience} />)
                    })}
                </div>
            </div>
		</div>
  	)
}