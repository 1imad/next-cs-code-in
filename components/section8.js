import styles from '@/styles/section8.module.css';
import { Button, Col, Row } from 'antd';

export default function Section8() {
    return <div className={styles.container}>
        <h1 className={styles.heading}>Study Now, Pay Later.</h1>
        <Row>
            <Col span={20}>
                <p className={styles.para}>Don't have the money to study upfront?<br />
                    Checkout our hassle-free financial facility.</p>
            </Col>
            <Col span={4}>
                <Button className={styles.btn} href="https://apply.cs.code.in" size='large'>Apply Now</Button>
            </Col>
        </Row>
    </div>
}