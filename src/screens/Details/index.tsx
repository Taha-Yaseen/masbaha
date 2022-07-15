import { Button, Card, Container, ProgressBar } from "react-bootstrap"
import { FaUndo } from 'react-icons/fa'
import { useLocation } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { inc, reset } from "../../redux/slices/data"
import { RootState } from "../../redux/store"
import styles from "./styles.module.scss"



const DetailsScreen = () =>{
  const dispatch = useAppDispatch()
  const {state}:any = useLocation()
  const azkar:any = useAppSelector((state:RootState) => state.data)
  return (
    <div className={styles.container}>
      <Container>
        <Card className={styles.card}>
            <Card.Header className={styles.header}>{state.key}</Card.Header>
            <Card.Body className={styles.body}>
            <Button variant="warning" className={styles.reset} onClick={()=>{
              const ans = window.confirm('هل تريد تصفير العداد؟ ')
              if(ans)
              dispatch(reset(state.key))}
            }>تصفير العداد<FaUndo/></Button>
              <div className={styles.counter} onClick={()=>{dispatch(inc(state.key))}}>
                <p>{state.key}</p>
                <p>{azkar.value[state.key]}</p>
            </div>
            </Card.Body>
          </Card>
          <div className={styles.progress}>
            <ProgressBar animated now={azkar.value[state.key]} label={state.key}/>
          </div>
        </Container>
    </div>
  )
}



export default DetailsScreen
 