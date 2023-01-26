import { Button } from 'antd';
import styles from '../styles/navbar.module.css';
import { images } from '../utils/constants';

export default function Navbar() {
    return <>
        <div className={styles.container}>
            <a href='/'>
                <img className={styles.navLogo} src={images.navLogo} alt='' />
            </a>
            <div className={styles.rightLinks}>
                <a className={styles.navlink} href='/program'>Program</a>
                <a className={styles.navlink} href='/program'>Curriculum</a>
                <a className={styles.navlink} href='/program'>Admissions</a>
                <a className={styles.navlink} href='/program'>Hire Developers</a>
                <a className={styles.navlink} href='/program'>FAQ</a>
                <Button
                    className={styles.btn}
                    href='/program'
                    type='primary'
                    size='large'
                >
                        Apply Now
                </Button>
            </div>
        </div>
       
    </>
}