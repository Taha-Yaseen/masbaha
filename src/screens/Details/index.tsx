import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { resetAll } from "../../redux/slices/data"
import { RootState } from "../../redux/store"
import styles from "./styles.module.scss"



const DetailsScreen = () =>{
  const azkar:any = useAppSelector((state:RootState) => state.data)
  const dispatch = useAppDispatch()
  const handleResetAll = ()=>{
    const ans = window.confirm('هل تريد تصفير العدادات؟ ')
    if(ans)
    dispatch(resetAll())    
  }
  return (
    <div className={styles.container}>
     
    </div>
  )
}



export default DetailsScreen
 