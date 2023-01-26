import styles from '../styles/hero.module.css';
import { images } from '@/utils/constants';
import { Button } from 'antd';

export default function Hero() {
    return <div className={styles.greyBackground}>
        <div className={styles.container}>
            <div className={styles.row}>
                <div className='container'>
                    <h4 className={styles.h4}>Level up your code career.</h4>
                    <h1 className={styles.h1}>CS Engineering <br />Done Differently.</h1>
                    <p className={styles.p}>
                        Become a CS Engineer.<br />
                        4x faster, spend 3x lesser and save hundreds of hours<br />
                        wasted on boring tutorials, in just <span className="text-blue">12 months</span>.
                    </p>
                    <Button
                        className={styles.btn}
                        size="large"
                        type='primary'
                    >Apply Now</Button>
                    <Button
                        className={styles.btnOutlined}
                        size="large"
                    >Request Call</Button>
                </div>
            </div>
        </div>
        <div className={styles.marquee}>
            <div className={styles.marqueeGrid}>
                <div className={styles.marqueeItem}>
                    <img className={styles.img} src={images.javascript} alt="Javascript" />
                </div>
                <div className={styles.marqueeItem}>
                    <img className={styles.img} src={images.typescript} alt="typescript" />
                </div>
                <div className={styles.marqueeItem}>
                    <img className={styles.img} src={images.mongodb} alt="mongodb" />
                </div>
                <div className={styles.marqueeItem}>
                    <img className={styles.img} src={images.reactjs} alt="reactjs" />
                </div>
                <div className={styles.marqueeItem}>
                    <img className={styles.img} src={images.materialui} alt="materialui" />
                </div>
                <div className={styles.marqueeItem}>
                    <img className={styles.img} src={images.nodejs} alt="nodejs" />
                </div>
                <div className={styles.marqueeItem}>
                    <img className={styles.img} src={images.bootstrap} alt="bootstrap" />
                </div>
                <div className={styles.marqueeItem}>
                    <img className={styles.img} src={images.firebase} alt="firebase" />
                </div>
                <div className={styles.marqueeItem}>
                    <img className={styles.img} src={images.docker} alt="docker" />
                </div>
            </div>
            <div className={styles.line}></div>
        </div>
    </div>
}