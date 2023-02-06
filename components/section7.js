import styles from '@/styles/section7.module.css';
import { Button, Input } from 'antd';

export default function Section7() {
    return <div className={styles.container}>
        <h1 className={styles.heading}>Take a look inside<br />
            the <span className="text-blue">course curriculum.</span></h1>
        <p className={styles.para}>Discover and understand our Course Curriculum better— <br />Our extensive curriculum enables graduates to work at companies<br />regardless of the programming languages upon which the company is built.</p>
        <Input className={styles.input} placeholder="coder@code.in" />
        <Button type='primary' className={styles.btn} size="large">Download Now</Button>
    </div>
}