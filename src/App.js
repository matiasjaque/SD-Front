import './App.css';
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Container,Row, Col, Spinner, Button } from 'react-bootstrap';



function App() {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);
  const datosGet = async (event) =>{
    console.log("llame a datosget")
    setLoading(false)
    axios.get('http://localhost:3050/prom')
        .then(response=>{
        setDatos(response.data);
        console.log(response.data);
        setLoading(true)
        // console.log(response.data);
    }).catch (error=> {
        setDatos([]);
        setLoading(true)
        //alert(error.response.data.message);
        console.log(error);
    })
  }
  
  useEffect(() => {
    datosGet();
}, []);
  if(loading){
    return (
    <div className="App">
      <h1 className='titulo'>Bienvenidos a nuestra aplicacion</h1>

      <div className="contenedor">
        
        <Button className='boton' onClick={() =>datosGet()}>Ejecutar aplicacion</Button>

        <h2 className="textoPromedio">Promedio actual del BitCoin en la base de datos:</h2>
        <h2 className="promedio">{datos[0]}</h2>

        <h2 className="textoValorActual">Valor actual del BitCoin:</h2>
        <h2 className="valorActual">{datos[1]}</h2>
      </div>
    </div>
  );
  };
  return(
    <div>
        <Container className="fondoUnidadAcademica" fluid>
        <Container className="UnidadAcademica" fluid>
            <Row>
                <Col></Col>
                <Col className="loading">
                    <Button variant="primary" disabled>
                        <span>Cargando datos... </span> 
                        <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        />
                    </Button>
                </Col>
                <Col></Col>
            </Row>
        </Container>
        </Container>
    </div>
  )
  }

export default App;
