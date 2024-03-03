import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import EmptyState from '../EmptyState';

function List ({
    query = '',
    data = [],
}) {
    const [listData, setListData] = useState([]);

    useEffect(() => {
        setListData(() => (data || []).filter((item) => item?.position?.toLowerCase()?.startsWith(query?.toLowerCase())));
    }, [query]);
    
    if(!query) {
        return;
    }

    return (
        <div className={styles.container}>
            {listData?.length 
                ? (listData || []).map((item) => <div className={styles.item}>
                        <span className={styles.bold_font}>
                            {item?.position.slice(0, query.length)}
                        </span>
                        <span>
                            {item?.position.slice(query.length, item?.position.length)}
                        </span>
                    </div>
                    ) 
                : <EmptyState />
            }
        </div>
    )
}

export default List;