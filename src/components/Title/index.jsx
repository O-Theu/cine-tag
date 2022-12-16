import styles from './Title.module.css';

export function Title ({ children }) {
    return (
        <div className={styles.texto}>
            {children}
        </div>
    )
}