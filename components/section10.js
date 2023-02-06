import { images } from "@/utils/constants";
import styles from '@/styles/section10.module.css';

export default function Section10(){
    return <div className={styles.container}>
        <h1 className={styles.heading}>365 Days</h1>
        <img className={styles.img} src={images.sec10img} alt="section 10"/>
    </div>
}