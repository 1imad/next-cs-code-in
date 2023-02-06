import styles from '@/styles/section5.module.css';
import { images } from '@/utils/constants';
import { Button, Col, Row } from 'antd';

export default function Section5() {
    return <div className={styles.container}>
        <div className='container'>
            <h1 className={styles.heading}><span className='text-blue'>CS</span> Route Map</h1>
            <h4 className={styles.heading2}>This route map shows your detailed timeline and all the milestones you will be achieving<br/> while your time at the 12-month long CS Diploma Program.</h4>
            <div className={styles.backgroundRoadmap}></div>
            <div className='text-center'>
                <Button className={styles.btn} size="large" href="https://apply.cs.code.in">Apply Now</Button>
            </div>
        </div>
        <div className={styles.rodamap}>
            <div className='container'>
                <Row>
                    <Col span={11}>
                        <img className={styles.roadmapImg} src={images.roadmap} alt={"roadmap"}/>
                    </Col>
                    <Col span={13}>
                        <p className={styles.roadmaptext}>The CS Program replaces unreliable courses <br/>and, a debt-crushing learning experience with <br/><span className={styles.underline}>365 days of no-nonsense computer science curriculum,</span> <br/>so premium that it will blow your mind!</p>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
}