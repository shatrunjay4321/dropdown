import {useState} from 'react';
import styles from './styles.module.css';
import List from './List'
import data from '../utils/data';

function App() {
  const [query, setQuery] = useState('');
  // console.log("query:", query);

  const handleChange = (e) => {
    setTimeout(() => {
      setQuery(() => e.target.value);
    }, 600);
  }

  return (
    <div className={styles.main_container}>
      <input className={styles.styled_input} type='text' onChange={handleChange} placeholder='Type here' />
      <List query={query} data={data} />
      <div className={styles.search_label}>Search Item: </div>
    </div>
  );
}

export default App;
