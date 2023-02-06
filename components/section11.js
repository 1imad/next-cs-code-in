import styles from '@/styles/section11.module.css';
import { images } from '@/utils/constants';
import { Col, Row } from 'antd';

export default function Section11(){
    return <div className={styles.container}>
        <h1 className={styles.heading}>Supercharge Your CS Engineering.</h1>
        <p className={styles.para}>Students come to CS.code.in to build what your university programs can not!</p>
        <Row>
            <Col span={12}>
                <div className={styles.heading2Wrapper}>
                    <img className={styles.floatDot} src={images.tickico} alt="tick"/>
                    <h2 className={styles.heading2}>The No-Brainer Choice</h2>
                </div>
                <ul>
                    <li className={styles.list}>Insane full stack web development abilities.</li>
                    <li className={styles.list}>Hands on practice with, modern and cutting edge programming tech stacks.</li>
                    <li className={styles.list}>CS fellows become the most well-rounded full stack software engineers they can be in 360 days of bootcamp.</li>
                </ul>
            </Col>
            <Col span={12}>
                <div className={styles.heading2Wrapper}>
                    <img className={styles.floatDot} src={images.boltico} alt="bolt"/>
                    <h2 className={styles.heading2}>Scale Exponentially</h2>
                </div>
                <ul>
                    <li className={styles.list}>Lightening fast growth with real-time, industry <br/>project-based learnings.</li>
                    <li className={styles.list}>Ready to deploy, supreme CS engineering skills.</li>
                    <li className={styles.list}>Network of experienced global software engineers and SMEs, who care about your growth.</li>
                </ul>
            </Col>
        </Row>
        <img className={styles.floatImg} src={images.sec11img2} alt="placeholder"/>
    </div>
}