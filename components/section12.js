import styles from '@/styles/section12.module.css';
import { images } from '@/utils/constants';
import { Col, Row } from 'antd';

export default function Section12() {
    return <div className={styles.container}>
        <h1 className={styles.heading}>The <span className="text-blue">&nbsp;CS Engineering&nbsp;</span> Toolbox.</h1>
        <h2 className={styles.heading2}>The most powerful Computers Science Engineering Curricula at your fingertips.</h2>
        <Row>
            <Col span={6}>
                <img className={styles.grImg} src={images.sec12gr1} alt="sec12gr1" />
                <h4 className={styles.grHeading}>Highest Placement Rate</h4>
                <p className={styles.para}>100% of our Capstone graduates have accepted job offers and get hired immediately. Witness exponential growth in months.</p>
            </Col>
            <Col span={6}>
                <img className={styles.grImg} src={images.sec12gr2} alt="sec12gr1" />
                <h4 className={styles.grHeading}>Core Engineering Skills</h4>
                <p className={styles.para}>Holistic, On-demand software engineering skills that grow and <br/>flex with you, helping you learn <br/>and adapt in a changing world.</p>
            </Col>
            <Col span={6}>
                <img className={styles.grImg} src={images.sec12gr3} alt="sec12gr1" />
                <h4 className={styles.grHeading}>Product Management Skills</h4>
                <p className={styles.para}>Master product management skills, <br/>by working in teams, building of <br/>group projects. A perfect simulation <br/>of a product-based company. </p>
            </Col>
            <Col span={6}>
                <img className={styles.grImg} src={images.sec12gr4} alt="sec12gr1" />
                <h4 className={styles.grHeading}>Core Engineering Skills</h4>
                <p className={styles.para}>Learn with leading software experts<br/> from the field, by collaborating on<br/> real world-projects and making<br/> open-source contributions.</p>
            </Col>
        </Row>
    </div>
}