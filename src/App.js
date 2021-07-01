import React,{useEffect,useState} from "react"
import {Container,Row,Col} from 'reactstrap'
import Mycard from './Card'
import './App.css';

import Axios from 'axios'

function App() {
   const [details,setDetails]=useState({})

   const fetchdata=async()=>{
      const {data} = await Axios.get("https://randomuser.me/api/")
     
      setDetails(data.results[0])
    
   }

   useEffect(()=>{
       fetchdata()
   },[])

    return (
       <div className="App">
          <h1 className="text-light ">Handling Api with react</h1>
          <Container fluid className="p-4 bg-dark App">
             <Row>
                <Col md={4} className="offset-md-4 mt-4">
                   <Mycard details={details}/>
                </Col>
             </Row>
          </Container>
       </div>
    );
}

export default App;