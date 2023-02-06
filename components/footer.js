import styles from '@/styles/footer.module.css';
import { images } from '@/utils/constants';
import { Col, Row } from 'antd';

export default function Footer() {
    return <div className={styles.container}>
        <div className={styles.footerHead}>
            <div className='container'>
                <Row>
                    <Col span={6}>
                        <img className={styles.footerlogo} src={images.codeInLogo} alt="code.in" />
                        <p className={styles.para}>
                            Become A Real Software <br />Engineer In Just 12 months.
                        </p>
                        <a href='/' className={styles.socialLink}>
                            <img className={styles.socialLogo} src={images.facebookLogo} alt="facebook" />
                        </a>
                        <a href='/' className={styles.socialLink}>
                            <img className={styles.socialLogo} src={images.instagramLogo} alt="instagram" />
                        </a>
                        <a href='/' className={styles.socialLink}>
                            <img className={styles.socialLogo} src={images.twitterLogo} alt="twitter" />
                        </a>
                    </Col>
                    <Col span={6}>
                        <h2 className={styles.linksHeading}>Company info</h2>
                        <a className={styles.link}>About Us</a>
                        <a className={styles.link}>Career</a>
                        <a className={styles.link}>We are hiring</a>
                        <a className={styles.link}>Blog</a>
                    </Col>
                    <Col span={6}>
                        <h2 className={styles.linksHeading}>Features</h2>
                        <a className={styles.link}>Privacy</a>
                        <a className={styles.link}>Live Classroom</a>
                        <a className={styles.link}>Unlimited Support</a>
                        <a className={styles.link}>Live Chat</a>
                    </Col>
                    <Col span={6}>
                        <h2 className={styles.linksHeading}>Resources</h2>
                        <a className={styles.link}>IOS & Android</a>
                        <a className={styles.link}>Watch a demo</a>
                        <a className={styles.link}>Students</a>
                        <a className={styles.link}>API</a>
                    </Col>
                </Row>
            </div>
        </div>
        <div className={styles.footerFoot}>
            <div className='container'>
                <img src={images.navLogo} alt="cs.code.in"/>
                <p className={styles.smallPara}>© CS.code.in , powered by India’s First Coding Bootcamp.<br/>The Hacking School<br/><br/>A Meraj Faheem Inc.</p>
            </div>
        </div>
    </div>
}