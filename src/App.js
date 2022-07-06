import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='titulo'>Bienvenidos a nuestra aplicacion</h1>

      <div className="contenedor">
        <button className="boton">Ejecutar aplicacion</button>

        <h2 className="textoPromedio">Promedio actual del BitCoin en la base de datos:</h2>
        <h2 className="promedio">VALOR DE LA CONSULTA</h2>

        <h2 className="textoValorActual">Valor actual del BitCoin:</h2>
        <h2 className="valorActual">VALOR ACTUAL DEL BitCoin</h2>
      </div>
    </div>
  );
}

export default App;
