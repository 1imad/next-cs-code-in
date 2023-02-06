import styles from '@/styles/section2.module.css';
import { Carousel, Col, Row } from 'antd';
import OutcomeCard from './outcomecard';

export default function Section2() {
    return <div className={styles.container}>
        <div className={`${styles.container} container`}>
            <h1 className={styles.heading}>Program Outcomes.</h1>
            <h2 className={styles.heading2}>Curious? Here's what goes down at <span className={styles.textBlue}>CS.CODE.IN</span></h2>
            <Carousel
                autoplay
                autoplaySpeed={3000}
            >
                <div>
                    <Row>
                        <Col span={6}>
                            <OutcomeCard
                                text="Open-Source Software Contribution"
                                background="https://i.imgur.com/2XdCLjCl.png"
                            />
                        </Col>
                        <Col span={6}>
                            <OutcomeCard
                                text={`Test-Driven <br/> Development`}
                                background="https://i.imgur.com/jtPoFYuh.png"
                            />
                        </Col>
                        <Col span={6}>
                            <OutcomeCard
                                text="Agile Software Development Methodologies"
                                background="https://res.cloudinary.com/dhznnpvlm/image/upload/v1610983524/cs-code-in/screen_2x_olr1hs.jpg"
                            />
                        </Col>
                        <Col span={6}>
                            <OutcomeCard
                                text="Bug Hunting And Secure Programming"
                                background="https://res.cloudinary.com/dhznnpvlm/image/upload/v1610983737/cs-code-in/screen_3x_nugomb.jpg"
                            />
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col span={6}>
                            <OutcomeCard
                                text="Become Software Debugging Master"
                                background="https://res.cloudinary.com/dhznnpvlm/image/upload/v1610983472/cs-code-in/s3_eabiqj.jpg"
                            />
                        </Col>
                        <Col span={6}>
                            <OutcomeCard
                                text={`Self Documenting Coding <br/> Practices`}
                                background="https://res.cloudinary.com/dhznnpvlm/image/upload/v1610982861/cs-code-in/screen_2x_h30ngh.jpg"
                            />
                        </Col>
                        <Col span={6}>
                            <OutcomeCard
                                text="Compititive Programming And Mathematics"
                                background="https://res.cloudinary.com/dhznnpvlm/image/upload/v1610983304/cs-code-in/s3_tkpf0t.jpg"
                            />
                        </Col>
                        <Col span={6}>
                            <OutcomeCard
                                text="Clean Coding <br/> Practice"
                                background="https://res.cloudinary.com/dhznnpvlm/image/upload/v1610983390/cs-code-in/s3_b0jnpb.jpg"
                            />
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col span={6}>
                            <OutcomeCard
                                text="High level design principles and patterns"
                                background="https://res.cloudinary.com/dhznnpvlm/image/upload/v1610983426/cs-code-in/s3_pmlgrv.jpg"
                            />
                        </Col>
                        <Col span={6}>
                            <OutcomeCard
                                text="Test-Driven Development <br/> (TDD)"
                                background="https://res.cloudinary.com/dhznnpvlm/image/upload/v1610983472/cs-code-in/s3_eabiqj.jpg"
                            />
                        </Col>
                        <Col span={6}>
                            <OutcomeCard
                                text="Developing high performance applications"
                                background="https://res.cloudinary.com/dhznnpvlm/image/upload/v1610983524/cs-code-in/screen_2x_olr1hs.jpg"
                            />
                        </Col>
                        <Col span={6}>
                            <OutcomeCard
                                text="Scaling backend servers and devops"
                                background="https://res.cloudinary.com/dhznnpvlm/image/upload/v1610983562/cs-code-in/s3_jgtigg.jpg"
                            />
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col span={6}>
                            <OutcomeCard
                                text="Building Serverless Applications and Microservices"
                                background="https://res.cloudinary.com/dhznnpvlm/image/upload/v1610983611/cs-code-in/screen_2x_cgee8p.jpg"
                            />
                        </Col>
                        <Col span={6}>
                            <OutcomeCard
                                text="Responsive <br/>Web Design"
                                background="https://res.cloudinary.com/dhznnpvlm/image/upload/v1610983658/cs-code-in/s3_q7solm.jpg"
                            />
                        </Col>
                        <Col span={6}>
                            <OutcomeCard
                                text="Progressive Web Apps, UI State Management"
                                background="https://res.cloudinary.com/dhznnpvlm/image/upload/v1610983699/cs-code-in/screen_3x_csdaeu.jpg"
                            />
                        </Col>
                        <Col span={6}>
                            <OutcomeCard
                                text="REST APIs <br/> GraphQL"
                                background="https://res.cloudinary.com/dhznnpvlm/image/upload/v1610983737/cs-code-in/screen_3x_nugomb.jpg"
                            />
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col span={6}>
                            <OutcomeCard
                                text="Progressive Web Apps, UI state Management"
                                background="https://res.cloudinary.com/dhznnpvlm/image/upload/v1610983699/cs-code-in/screen_3x_csdaeu.jpg"
                            />
                        </Col>
                        <Col span={6}>
                            <OutcomeCard
                                text="REST APIs and <br/> GraphQL"
                                background="https://res.cloudinary.com/dhznnpvlm/image/upload/v1610983737/cs-code-in/screen_3x_nugomb.jpg"
                            />
                        </Col>
                        <Col span={6}>
                            <OutcomeCard
                                text="Remote Procedure Calls<br/> (RPC)"
                                background="https://res.cloudinary.com/dhznnpvlm/image/upload/v1610983787/cs-code-in/s3_sekzdh.jpg"
                            />
                        </Col>
                        <Col span={6}>
                            <OutcomeCard
                                text="Building <br/> Distributed Systems"
                                background="https://res.cloudinary.com/dhznnpvlm/image/upload/v1610983827/cs-code-in/screen_3x_ag8hso.jpg"
                            />
                        </Col>
                    </Row>
                </div>
            </Carousel>
        </div>
    </div>
}