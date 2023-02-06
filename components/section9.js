import styles from '@/styles/section9.module.css';
import { images } from '@/utils/constants';
import { Col, Row } from 'antd';

export default function Section9() {
    return <div className={styles.container}>
        <h1 className={styles.heading}>Land Your dream <span className='text-blue'>&nbsp;Job In Tech.</span></h1>
        <Row>
            <Col span={12}>
                <img className={styles.img} src={images.sec9img} alt="section9" />
            </Col>
            <Col span={12}>
                <p className={styles.para1}>Our software instructional team spends 360 days working non-stop, with the bootcamp participants to advance them from <span className='bold italic'>newbie programmers to full stack web engineers.</span></p>
                <p className={styles.para2}>CS.code.in is the simplest way to transfer your learnings from code to fully functional products, regardless of whether you're looking for a complete overhaul, a career change into computer science engineering, to build your startup, or to up-skill in your current job role.</p>
                <img className={styles.img2} src={images.sec9img2} alt="section9 image 2"/>
            </Col>
        </Row>
        <p className={styles.para}><span className='bold'>gain the skills and knowledge you need to stand out to employers and <span className="italic">land the job you've always wanted.</span></span><br/><br/>Our expert instructors are industry professionals with years of experience in the tech industry. <br/>they'll provide hands-on, interactive instruction to help you gain the skills you need to succeed. <br/>And, you will have opportunities to work on real-world projects, so you can put your new skills to the test <br/>and build a strong portfolio to showcase to potential employers.</p>
    </div>
}