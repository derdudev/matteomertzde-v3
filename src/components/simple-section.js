import styles from "./simple-section.module.css";

export default function SimpleSection({ title, children: body }) {
    if(title !== ""){
        return <section className={styles.sectionContainer}>
            <p className={styles.heading}>
                {title}
            </p>
            <p className={styles.textBody}>
                {body}
            </p>
        </section>;
    } else {
        return <section className={styles.sectionContainer}>
            <p className={styles.textBody}>
                {body}
            </p>
        </section>;
    }
}