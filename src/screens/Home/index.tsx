import { Button, Col, Container, Row } from "react-bootstrap"
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
      <Button  onClick={handleResetAll} variant="danger">تصفير العدادات</Button>
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
 