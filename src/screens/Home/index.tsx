import { Button, Col, Container, Row } from "react-bootstrap"
import Counter from "../../components/counter"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { resetAll, undo } from "../../redux/slices/data"
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
  const handleUndo = ()=>{
    const ans = window.confirm('هل تريد الرجوع؟ ')
    if(ans)
    dispatch(undo())    
  }
  return (
    <div className={styles.container}>
      <div className={styles.actionButtons}>
        <Button  onClick={handleUndo} variant="warning">Back</Button>
        <Button  onClick={handleResetAll} variant="danger">تصفير العدادات</Button>
      </div>
      <div className={styles.counters}>
        <Container>
          <Row>
          {
           Object.keys(azkar.value).map((zeker:string)=>(
            <Col xs={12} sm={6} lg={4}>
              <Counter key={zeker} title={zeker} counter={azkar.value[zeker]}/>
            </Col>
             ))
            }
        </Row>
        </Container>
      </div>
    </div>
  )
}



export default HomeScreen
 