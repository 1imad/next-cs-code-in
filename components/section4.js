import styles from '@/styles/section4.module.css';
import { Button, Col, Row } from 'antd';

export default function Section4() {
    return <div className={styles.container}>
        <h1 className={styles.heading}>The Cutting-edge of the <span className="text-blue">CS.code.in curriculum.</span></h1>
        <h4 className={styles.heading2}>CS Engineering Focus Field - Fullstack Web Development</h4>
        <p className={styles.para}>Everything you need to launch your career in the software industry, while building a world-class portfolio.</p>
        <div className="container">
            <Row>
                <Col span={6} push={2}>
                    <h1 className={styles.rowHeading}>What<br />You<br />Will<br />Learn:</h1>
                    <Button className={styles.btn} size="large">View Full Program Curriculum</Button>
                </Col>
                <Col span={14} push={4}>
                    <div className={styles.backgroundImg}></div>
                </Col>
            </Row>
        </div>
    </div>
}