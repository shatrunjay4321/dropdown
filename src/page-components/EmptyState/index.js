import styles from './styles.module.css'

function EmptyState () {
    return (
        <div className={styles.empty_state}>
            No results match your query
        </div>
    )
}

export default EmptyState;