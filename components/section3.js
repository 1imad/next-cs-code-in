import { images } from '@/utils/constants';
import { Button, Col, Row } from 'antd';
import styles from '../styles/section3.module.css';

export default function Section3() {
    return <div className={styles.container}>
        <div className={styles.partners}>
            <div className='container'>
                <Row>
                    <Col span={8}>
                        <div className={styles.partnerImgWrapper}>
                            <img className={styles.paatnerImg1} src={images.codeInLogo} alt="code.in" />
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className={styles.partnerImgWrapper}>
                            <img className={styles.paatnerImg2} src={images.thswhitelogo} alt="The Hacking School" />
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className={styles.partnerImgWrapper}>
                            <img className={styles.paatnerImg3} src={images.icollegewhitelogo} alt="ICollege" />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
        <div className="container">
            <h1 className={styles.heading}>Stay ahead of the curve and become a Better <span className="text-blue">CS Engineer.</span></h1>
            <p className={styles.para}>Whether your looking for clean code practices, development processes, deployment speed <br />or unlocking new capabilities, the CS Program equips learners with the superpowers, they didn't know they had.<br /><br />Scale dynamically to hundreds of full-stack products without breaking a sweat.</p>
            <div className={styles.video}></div>
            <h2 className={styles.heading2}>You can start for FREE! Join a free <a className={`text-blue text-underline`} href="/">info-session</a> to get detailed understanding of the CS Program.</h2>
            <div className='text-center'>
                <br/>
                <Button className={styles.btn} size="large">New Batch Starts On June, 2023</Button>
            </div>
        </div>
    </div>
}