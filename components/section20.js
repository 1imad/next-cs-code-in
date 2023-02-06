import styles from '@/styles/section20.module.css';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';

const { Panel } = Collapse;

export default function Section20() {

    const { token } = theme.useToken();

    const panelStyle = {
        marginBottom: 24,
        background: "#E7E7E7",
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };

    return <div className={styles.container}>
        <div className="container">
            <h1 className={styles.heading}>Frequently Asked Questions.</h1>
            <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                style={{ background: token.colorBgContainer }}
            >
                <Panel header="What is CS.CODE.IN?" key="1" style={panelStyle}>
                    <p>CS.CODE.IN is an online 1-year Computer Science education program to equip students with modern and cutting edge programming technologies in the competitive world. It is designed to improve hiring prospects, land dream jobs and pick up true creative and innovation opportunities in the IT industry.</p>
                </Panel>
                <Panel header="Why a CS Program?" key="2" style={panelStyle}>
                    <p>CS programs are intensive courses in Computer Science which help students understand the field of engineering in an innovative and accelerated manner.</p>
                </Panel>
                <Panel header="How is it different from other CS programs?" key="3" style={panelStyle}>
                    <p>Students acquire industry-relevant knowledge with hands-on experience within a 12-month framework and develop technical expertise.</p>
                </Panel>
                <Panel header="I'm not a student of Computer Science, can I still join?" key="4" style={panelStyle}>
                    <p>This program is meant for the anyone looking to learn and develop CS engineering skills. You could be from any background, provided you're fully determined to learn.</p>
                </Panel>
                <Panel header="I'm already a CS grad, why should I join?" key="5" style={panelStyle}>
                    <p>It's a blood-bath when competing for high-profile tech jobs. Being a CS grad is the minimum criteria. What will get you through is market experience and industry relevant knowledge. A typical CS degree fails to live up to the tech market's requirement. And that's where CS.CODE.IN comes into play!</p>
                </Panel>
                <Panel header="I want to transition my career to IT, will CS.CODE.IN help?" key="6" style={panelStyle}>
                    <p>Yes. The curriculum is designed in such a way that it helps students from each and any background to grasp core concepts of applied computer sciences.</p>
                </Panel>
                <Panel header="I work. Can I still join CS.CODE.IN?" key="11" style={panelStyle}>
                    <p>Yes. Provided you give the required 3 (session hours) + 2 (practice hours) minimum) to the program.</p>
                </Panel>
                <Panel header="What can I expect after I graduate this program?" key="7" style={panelStyle}>
                    <p>You will have become competitive programmer a full-fledged CS engineer. With complete knowledge of UI development, web technologies, front and back end development, APIs and much more.</p>
                </Panel>
                <Panel header="What will be my career opportunites after graduating?" key="8" style={panelStyle}>
                    <p>You can start a career as a: Software Engineer, Full-stack Developer, Back-end Developer, or UI developer.</p>
                </Panel>
                <Panel header="How long is the CS.CODE.IN program?" key="9" style={panelStyle}>
                    <p>The CS Program has a 12-month long framework which is followed by placement assistance and internships.</p>
                </Panel>
                <Panel header="Can I avail student loans?" key="10" style={panelStyle}>
                    <p>Yes</p>
                </Panel>
            </Collapse>
        </div>
    </div>
}