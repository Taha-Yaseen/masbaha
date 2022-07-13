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
      <div className={styles.reset} onClick={()=>{
        const ans = window.confirm('هل تريد تصفير العداد؟ ')
        if(ans)
          dispatch(reset(title))}
        }><FaUndo/></div>
      <h2>{title}</h2>
      <div className={styles.counter} onClick={()=>{dispatch(inc(title))}}>
          <h3>{counter}</h3>
      </div>
    </div>
  )
}



export default Counter
