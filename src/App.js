import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';


function App() {
  
    
    let [val,setval] = useState([])

    useEffect(()=>{
      axios.get('https://rickandmortyapi.com/api/character')

      .then(function (response) {
     
       console.log(response.data.results);
       setval(response.data.results)
       })
      .catch(function (error) {
        
        console.log(error);
      })


 },[])
    
 return(
    <>
    <div className='App'>
      <h1 className='text'>The rick and morty API</h1>
      <p1 className='p1'>
        <Row className='bg'>
          {
            val.map((item) => {
              return (
                <>
                  <Col md={6}>
                    <br/>
                    <Card style={{ width: '600px', height: '220px', marginLeft: '85px', backgroundColor: '#3C3E44'}}>
                      <Card.Body>
                        <img className='img' src={item.image}></img>
                        <p className='flex'>
                          <Card.Title></Card.Title>
                          <Card.Text className='name'>{item.name} <br/></Card.Text>
                          <h1 className='dead'>Dead - {item.species}</h1><br/>
                          <h4 className='location'>Last khown location : {item.status}</h4>
                        </p>
                      </Card.Body>
                    </Card>
              
                  </Col>
                </>
              )
            })
          }
        </Row>
      </p1>
    </div>
    </>
 );
}

export default App;
