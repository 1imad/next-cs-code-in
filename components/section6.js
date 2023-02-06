import styles from '@/styles/section6.module.css';
import { images } from '@/utils/constants';
import { Col, Row } from 'antd';

export default function Section6() {
    return <div className={styles.container}>
        <div className='container'>
            <Row>
                <Col span={14}>
                    <h1 className={styles.heading}>Open-Source<br />Contributions.</h1>
                    <h4 className={styles.heading2}>Contributing to the development of your favorite <br />open-source project has never been easier.</h4>
                    <ul>
                        <li className={styles.list}>Contribute to several popular Open-Source Projects.</li>
                        <li className={styles.list}>Utilize this skill to strengthen your Professional Resume and Technical Portfolio!</li>
                        <li className={styles.list}>Take advantage of opportunities geared towards Open-Source Contributors!</li>
                    </ul>
                </Col>
                <Col span={10}>
                    <img className={styles.img} src={images.sec6img} alt="section6"/>
                </Col>
            </Row>
        </div>
    </div>
}