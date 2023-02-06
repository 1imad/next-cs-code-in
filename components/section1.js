import { images } from '@/utils/constants';
import styles from '@/../styles/section1.module.css';
import { Button, Card, Col, Row } from 'antd';

export default function Section1() {
    return <div className="container">
        <div className={styles.smallbanner}>
            <div>
                <img src={images.star} alt="star" />
            </div>
            <h5 className={styles.smallbannerheading}>Powered by <b>The Hacking School</b> India’s First Coding Bootcamp.® </h5>
            <img className={styles.arrowRight} src={images.arrowRight} alt="right-arrow" />
        </div>
        <div className={styles.main}>
            <h1 className={styles.heading}>Built To Master CS Engineering, <span className={styles.textBlue}>Faster and Smarter.</span></h1>
            <p className={styles.heading2}>Start a new career in weeks with our immersive technical Bootcamps.</p>
            <Row
                className={styles.row}
            >
                <Col className={styles.col} span={8}>
                    <Card
                        hoverable
                        className={styles.cardBody}
                        cover={<img className={styles.cardImg} alt="sec-1-col-1-img" src={images.sec1CardImg1} />}
                    >
                        <h3 className={styles.cardHeading}>CS Course Overview.</h3>
                        <p className={styles.cardDesc}>The CS Engineering program at<br /> Code.in provides anyone and everyone,<br /> with an unparalleled opportunity to gain<br /> the skills, knowledge and exposure<br /> necessary to become successful<br /> computer scientists.</p>
                        <Button
                            className={styles.btn}
                            size="large"
                        >See More</Button>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        hoverable
                        className={styles.cardBody}
                        cover={<img className={styles.cardImg} alt="sec-1-col-1-img" src={images.sec1CardImg2} />}
                    >
                        <h3 className={styles.cardHeading}>CS Outcomes.</h3>
                        <p className={styles.cardDesc}>The CS Program is an intensive Coding Bootcamp for engineers and aspiring engineers. Students will learn to design data systems, gain valuable industry experience and, build software applications that are robust and secure.</p>
                        <Button
                            className={styles.btn}
                            size="large"
                        >See More</Button>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        hoverable
                        className={styles.cardBody}
                        cover={<img className={styles.cardImg} alt="sec-1-col-1-img" src={images.sec1CardImg3} />}
                    >
                        <h3 className={styles.cardHeading}>CS Methodology.</h3>
                        <p className={styles.cardDesc}>cs.code.in replaces unreliable courses, time-draining university programs<br /> and debt-loaded learning experiences<br /> with 365 days of no-nonsense<br /> CS curriculum, so premium that<br /> it will blow your mind.</p>
                        <Button
                            className={styles.btn}
                            size="large"
                        >See More</Button>
                    </Card>
                </Col>
                <img className={styles.arrowbtm} src={images.arrowBottom} alt="arrow-bottom" />
            </Row>
            <div style={{marginLeft: "10rem"}}>
                <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    className={styles.row2}
                >
                    <Col span={6}>
                        <h1 className={styles.col2Heading}>#1</h1>
                        <p className={styles.col2para}>India’s 1st-Coding Bootcamp</p>
                    </Col>
                    <Col span={6}>
                        <h1 className={styles.col2Heading}>5000+</h1>
                        <p className={styles.col2para}>Graduates Worldwide</p>
                    </Col>
                    <Col span={6}>
                        <h1 className={styles.col2Heading}>98%</h1>
                        <p className={styles.col2para}>Employment Rate</p>
                    </Col>
                    <Col span={6}>
                        <h1 className={styles.col2Heading}>4.94/5</h1>
                        <p className={styles.col2para}>In Reviews</p>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
}