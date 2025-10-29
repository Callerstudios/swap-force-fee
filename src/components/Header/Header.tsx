import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <span className={styles.headerText}>
            <h2 className={styles.teamName}>Vital Swap</h2>
            <h2 className={styles.join}>Join @Godwin</h2>
        </span>
    </header>
  )
}

export default Header