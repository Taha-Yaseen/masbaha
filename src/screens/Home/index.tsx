import Counter from "../../components/counter"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { resetAll } from "../../redux/slices/data"
import { RootState } from "../../redux/store"
import styles from "./styles.module.scss"



const HomeScreen = () =>{
  const azkar:any = useAppSelector((state:RootState) => state.data)
  const dispatch = useAppDispatch()
  const handleResetAll = ()=>{
    const ans = window.confirm('هل تريد تصفير العدادات؟ ')
    if(ans)
    dispatch(resetAll())    
  }
  return (
    <div className={styles.container}>
      <div className={styles.reset} onClick={handleResetAll}>تصفير العدادات</div>
      <div className={styles.counters}>
      {
        Object.keys(azkar.value).map((zeker:string)=>(
          <Counter key={zeker} title={zeker} counter={azkar.value[zeker]}/>
          ))
        }
      </div>
    </div>
  )
}



export default HomeScreen
 