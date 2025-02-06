import styles from '../../styles/profile.module.scss';

export default function KeySkill ({data}) {

    const renderStars = (points) => {
        let stars = [];
        for (let i=0; i<10; i++) {
            if (i < points) {
                stars.push(<i key={i} className={`bi bi-star-fill ${styles.stars}`}></i>);
            } else {
                stars.push(<i key={i} className={`bi bi-star ${styles.stars}`}></i>);
            }
        }
        return stars;
    }

    return (
        <div className={`relative`}>
            <h5 className='text m-0 mb-2'>{data.name}</h5>
            <div className='mb-4'>
                {renderStars(data.points)}
            </div>
        </div>
    );
}