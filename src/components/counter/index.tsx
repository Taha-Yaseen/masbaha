import { Card } from 'react-bootstrap'
import { FaUndo } from 'react-icons/fa'
import { useAppDispatch } from "../../redux/hooks"
import { inc, reset } from "../../redux/slices/data"
import styles from "./styles.module.scss"
interface props {
  title: string,
  counter: number,
}

const Counter = ({title,counter=0}:props) =>{
  const dispatch = useAppDispatch()
    
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
      <Card.Header>{title}</Card.Header>
      <Card.Body className={styles.body}>
      <div className={styles.reset} onClick={()=>{
        const ans = window.confirm('هل تريد تصفير العداد؟ ')
        if(ans)
          dispatch(reset(title))}
        }><FaUndo/></div>
        <div className={styles.counter} onClick={()=>{dispatch(inc(title))}}>
          <h3>{counter}</h3>
      </div>
      </Card.Body>
    </Card>
    </div>
  )
}



export default Counter
