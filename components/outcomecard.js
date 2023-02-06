import { Card } from "antd";
import styles from '../styles/outcomecard.module.css';
const { Meta } = Card;

const OutcomeCard = ({
    background, text
}) => {
    return <Card
        className={styles.card}
        hoverable
        style={{ width: 240 }}
        cover={<img className={styles.cardImage} alt={background} src={background} />}
    >
        <p className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />
    </Card>
}

export default OutcomeCard;